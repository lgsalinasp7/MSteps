"use client";
import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { AuthState, AuthUser, UserRole } from '@/settings/types';
import { authenticateUser, getUserById } from '@/data/users';

type AuthContextValue = {
  state: AuthState;
  login: (params: { username: string; password: string; preferredRole?: UserRole }) => Promise<void>;
  logout: () => void;
  restoreSession: () => boolean;
};

const AUTH_STORAGE_KEY = 'auth_state_v1';

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AuthState>({ user: null, isAuthenticated: false });

  // NO cargar estado del localStorage automáticamente al inicio
  // Solo cargar cuando se haga login explícitamente
  const loadSavedState = useCallback(() => {
    try {
      const raw = localStorage.getItem(AUTH_STORAGE_KEY);
      if (raw) {
        const savedState = JSON.parse(raw) as AuthState;
        setState(savedState);
        return true;
      }
    } catch {}
    return false;
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(state));
    } catch {}
  }, [state]);

  const login = useCallback(async ({ username, password, preferredRole }: { username: string; password: string; preferredRole?: UserRole }) => {
    if (!username.trim()) throw new Error('Usuario requerido');
    if (!password.trim()) throw new Error('Contraseña requerida');

    // Autenticar usuario con la base de datos
    const authenticatedUser = authenticateUser(username.trim(), password.trim(), preferredRole);
    
    if (!authenticatedUser) {
      if (preferredRole) {
        throw new Error(`Credenciales incorrectas o no tienes permisos de ${preferredRole === 'admin' ? 'Administrador' : preferredRole === 'teacher' ? 'Maestro' : 'Padre'}`);
      } else {
        throw new Error('Usuario o contraseña incorrectos');
      }
    }

    const user: AuthUser = {
      id: authenticatedUser.id,
      name: authenticatedUser.name,
      role: authenticatedUser.role,
      email: authenticatedUser.email,
      organization: authenticatedUser.organization,
    };
    
    setState({ user, isAuthenticated: true });
  }, []);

  const logout = useCallback(() => {
    // Limpiar el estado de autenticación
    setState({ user: null, isAuthenticated: false });
    
    // Limpiar localStorage
    try {
      localStorage.removeItem(AUTH_STORAGE_KEY);
      localStorage.removeItem('auth-token'); // Por si hay tokens legacy
    } catch (error) {
      console.warn('Error al limpiar localStorage:', error);
    }
  }, []);

  const value = useMemo<AuthContextValue>(() => ({ state, login, logout, restoreSession: loadSavedState }), [state, login, logout, loadSavedState]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth debe usarse dentro de AuthProvider');
  return ctx;
}


