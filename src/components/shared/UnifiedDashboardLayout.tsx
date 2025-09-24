"use client";
import React, { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { SidebarNav, type NavItem } from '@/components/shared/SidebarNav';
import { GlobalHeader } from '@/components/shared/GlobalHeader';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detectar si estamos en móvil
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
      if (window.innerWidth >= 1024) {
        setSidebarOpen(false); // Cerrar sidebar en desktop
      }
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
          {/* Sidebar para Desktop */}
          <aside className="hidden lg:block w-80 flex-shrink-0">
            <SidebarNav items={sidebarItems} />
          </aside>

          {/* Sidebar Mobile Overlay */}
          <AnimatePresence>
            {isMobile && sidebarOpen && (
              <>
                {/* Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
                  onClick={() => setSidebarOpen(false)}
                />
                
                {/* Sidebar Mobile */}
                <motion.aside
                  initial={{ x: -320 }}
                  animate={{ x: 0 }}
                  exit={{ x: -320 }}
                  transition={{ type: "spring", damping: 20, stiffness: 300 }}
                  className="fixed left-0 top-0 h-full w-80 z-50 lg:hidden"
                  style={{ paddingTop: '80px' }}
                >
                  <SidebarNav items={sidebarItems} />
                </motion.aside>
              </>
            )}
          </AnimatePresence>

          {/* Contenido principal */}
          <main className="flex-1 overflow-auto bg-gray-50">
            <div className="p-4 sm:p-6 lg:p-8">
              {/* Header del contenido principal */}
              <div className="mb-6 sm:mb-8">
                {/* Botón de menú móvil */}
                {isMobile && (
                  <div className="flex items-center gap-4 mb-4">
                    <button
                      onClick={() => setSidebarOpen(true)}
                      className="lg:hidden p-2 rounded-xl bg-white/90 backdrop-blur-sm border border-white/30 shadow-lg hover:shadow-xl transition-all duration-200"
                    >
                      <Menu className="size-5 text-gray-700" />
                    </button>
                  </div>
                )}

                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6 gap-4">
                  <div className="min-w-0 flex-1">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 truncate">{title}</h1>
                    <p className="text-sm sm:text-base text-gray-600 line-clamp-2">{subtitle}</p>
                    {state.user?.organization && (
                      <p className="text-xs sm:text-sm text-gray-500 mt-1 truncate">📍 {state.user.organization}</p>
                    )}
                  </div>
                  {headerActions && (
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
                      {headerActions}
                    </div>
                  )}
                </div>

                {/* Filtros */}
                {filters && (
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
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
