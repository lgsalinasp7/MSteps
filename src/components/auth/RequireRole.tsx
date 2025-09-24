"use client";
import React, { useEffect, useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import type { UserRole } from '@/settings/types';

export function RequireRole({ role, children }: { role: UserRole; children: React.ReactNode }) {
  const { state, restoreSession } = useAuth();
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    // Intentar restaurar la sesión desde localStorage
    if (!state.isAuthenticated) {
      const restored = restoreSession();
      if (!restored) {
        router.replace('/login');
        return;
      }
    }
    setIsChecking(false);
  }, [state.isAuthenticated, restoreSession, router]);

  useEffect(() => {
    // Verificar permisos después de cargar la sesión
    if (!isChecking && (!state.isAuthenticated || state.user?.role !== role)) {
      router.replace('/login');
    }
  }, [state, router, isChecking, role]);

  if (isChecking || !state.isAuthenticated || state.user?.role !== role) {
    // Importar dinámicamente el skeleton apropiado según el rol
    const SkeletonComponent = React.lazy(async () => {
      switch (role) {
        case 'teacher':
          const { TeacherSkeleton } = await import('@/components/maestros/TeacherSkeleton');
          return { default: TeacherSkeleton };
        case 'parent':
          const { ParentSkeleton } = await import('@/components/padres/ParentSkeleton');
          return { default: ParentSkeleton };
        case 'admin':
        default:
          const { DashboardSkeleton } = await import('@/components/shared/Skeleton');
          return { default: DashboardSkeleton };
      }
    });
    
    return (
      <React.Suspense fallback={
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 via-blue-300 to-orange-300">
          <div className="text-center">
            <div className="flex space-x-1 mb-4">
              <div className="w-3 h-3 bg-white rounded-full animate-bounce"></div>
              <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
            <p className="text-white font-medium">Cargando experiencia educativa...</p>
          </div>
        </div>
      }>
        <SkeletonComponent />
      </React.Suspense>
    );
  }

  return <>{children}</>;
}


