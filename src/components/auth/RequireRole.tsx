"use client";
import React, { useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import type { UserRole } from '@/settings/types';

export function RequireRole({ role, children }: { role: UserRole; children: React.ReactNode }) {
  const { state } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (!state.isAuthenticated) router.replace('/login');
    else if (state.user?.role !== role) router.replace('/login');
  }, [state, role, router]);
  if (!state.isAuthenticated || state.user?.role !== role) return null;
  return <>{children}</>;
}


