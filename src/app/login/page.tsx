"use client";
import React, { useEffect } from 'react';

export const dynamic = 'force-dynamic';
import Login from '@/components/Login';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const { state } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (state.isAuthenticated && state.user?.role === 'admin') router.push('/dashboard');
    else if (state.isAuthenticated && state.user?.role === 'teacher') router.push('/maestros');
    else if (state.isAuthenticated && state.user?.role === 'parent') router.push('/padres' as any);
  }, [state, router]);
  return <Login />;
}


