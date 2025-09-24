"use client";
import React, { useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default function Page() {
  const { state } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (state.isAuthenticated && state.user?.role === 'admin') router.push('/dashboard');
    else if (state.isAuthenticated && state.user?.role === 'teacher') router.push('/maestros');
    else if (state.isAuthenticated && state.user?.role === 'parent') router.push('/padres' as any);
    else router.push('/login');
  }, [state, router]);
  return null;
}


