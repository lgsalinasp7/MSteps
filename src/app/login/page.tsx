"use client";
import React, { useEffect, useState } from 'react';
import Login from '@/components/Login';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default function LoginPage() {
  const { state } = useAuth();
  const router = useRouter();
  const [hasLoggedIn, setHasLoggedIn] = useState(false);

  // Limpiar cualquier sesión anterior al cargar la página
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('auth_state_v1');
    }
  }, []);

  // Solo redirigir si acabamos de hacer login exitoso
  useEffect(() => {
    if (state.isAuthenticated && hasLoggedIn) {
      if (state.user?.role === 'admin') router.push('/dashboard');
      else if (state.user?.role === 'teacher') router.push('/maestros');
      else if (state.user?.role === 'parent') router.push('/padres' as any);
    }
  }, [state.isAuthenticated, hasLoggedIn, state.user?.role, router]);

  // Función para indicar que se ha hecho login
  const handleLoginSuccess = () => {
    setHasLoggedIn(true);
  };

  return <Login onLoginSuccess={handleLoginSuccess} />;
}


