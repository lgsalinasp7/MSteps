"use client";
import React, { useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';

export function RequireAdmin({ children }: { children: React.ReactNode }) {
  const { state } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!state.isAuthenticated || state.user?.role !== 'admin') {
      router.replace('/login');
    }
  }, [state, router]);

  if (!state.isAuthenticated || state.user?.role !== 'admin') {
    return null;
  }

  return <>{children}</>;
}


