import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { AuthState, AuthUser, UserRole } from '@/settings/types';

type AuthContextValue = {
  state: AuthState;
  login: (params: { username: string; password: string; preferredRole?: UserRole }) => Promise<void>;
  logout: () => void;
};

const AUTH_STORAGE_KEY = 'auth_state_v1';

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AuthState>({ user: null, isAuthenticated: false });

  // Cargar estado del localStorage solo en el cliente
  useEffect(() => {
    try {
      const raw = localStorage.getItem(AUTH_STORAGE_KEY);
      if (raw) {
        const savedState = JSON.parse(raw) as AuthState;
        setState(savedState);
      }
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(state));
    } catch {}
  }, [state]);

  const login = useCallback(async ({ username, password, preferredRole }: { username: string; password: string; preferredRole?: UserRole }) => {
    // Simulación local: inferimos rol por nombre o usamos preferredRole si se indica
    let role: UserRole = 'user';
    const uname = username.toLowerCase();
    if (preferredRole) role = preferredRole;
    else if (uname.includes('admin')) role = 'admin';
    else if (uname.includes('maestro') || uname.includes('teacher')) role = 'teacher';
    else if (uname.includes('padre') || uname.includes('parent')) role = 'parent';
    if (!password) throw new Error('Contraseña requerida');

    const user: AuthUser = {
      id: crypto.randomUUID(),
      name: username,
      role,
    };
    setState({ user, isAuthenticated: true });
  }, []);

  const logout = useCallback(() => {
    setState({ user: null, isAuthenticated: false });
  }, []);

  const value = useMemo<AuthContextValue>(() => ({ state, login, logout }), [state, login, logout]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth debe usarse dentro de AuthProvider');
  return ctx;
}


