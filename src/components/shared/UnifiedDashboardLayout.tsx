"use client";
import React from 'react';
import { useAuth } from '@/hooks/useAuth';
import { SidebarNav, type NavItem } from '@/components/shared/SidebarNav';
import { GlobalHeader } from '@/components/shared/GlobalHeader';

interface UnifiedDashboardLayoutProps {
  children: React.ReactNode;
  sidebarItems: NavItem[];
  title: string;
  subtitle: string;
  headerActions?: React.ReactNode;
  filters?: React.ReactNode;
}

export function UnifiedDashboardLayout({
  children,
  sidebarItems,
  title,
  subtitle,
  headerActions,
  filters
}: UnifiedDashboardLayoutProps) {
  const { state } = useAuth();

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-400 via-blue-300 to-orange-300 text-gray-900 relative overflow-hidden">
      {/* Header global */}
      <GlobalHeader />
      
      {/* Fondo con patrones amigables */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-orange-400 rounded-full blur-2xl"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-blue-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-orange-300 rounded-full blur-xl"></div>
        <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-blue-400 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 w-36 h-36 bg-yellow-300 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      
      <div className="relative z-10">
        <div className="flex" style={{ height: 'calc(100vh - 80px)' }}>
          {/* Sidebar fijo */}
          <aside className="w-80 flex-shrink-0">
            <SidebarNav items={sidebarItems} />
          </aside>

          {/* Contenido principal */}
          <main className="flex-1 overflow-auto bg-gray-50">
            <div className="p-8">
              {/* Header del contenido principal */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">{title}</h1>
                    <p className="text-gray-600">{subtitle}</p>
                    {state.user?.organization && (
                      <p className="text-sm text-gray-500 mt-1">📍 {state.user.organization}</p>
                    )}
                  </div>
                  {headerActions && (
                    <div className="flex items-center gap-3">
                      {headerActions}
                    </div>
                  )}
                </div>

                {/* Filtros */}
                {filters && (
                  <div className="flex items-center gap-4 mb-8">
                    {filters}
                  </div>
                )}
              </div>
              
              {/* Contenido específico */}
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
