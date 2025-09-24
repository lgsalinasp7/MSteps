"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { brand, gradients } from '@/lib/design-system';

interface SkeletonProps {
  className?: string;
  variant?: 'default' | 'rounded' | 'circle' | 'text';
  animate?: boolean;
  style?: React.CSSProperties;
}

export function Skeleton({ className = '', variant = 'default', animate = true, style }: SkeletonProps) {
  const baseClasses = 'bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 bg-[length:200%_100%]';
  
  const variantClasses = {
    default: 'rounded-lg',
    rounded: 'rounded-xl',
    circle: 'rounded-full',
    text: 'rounded-md h-4'
  };

  const animationClasses = animate ? 'animate-[shimmer_2s_ease-in-out_infinite]' : '';

  return (
    <div 
      className={`${baseClasses} ${variantClasses[variant]} ${animationClasses} ${className}`}
      style={{
        backgroundImage: `linear-gradient(90deg, ${brand.gray[200]} 25%, ${brand.gray[100]} 50%, ${brand.gray[200]} 75%)`,
        ...style
      }}
    />
  );
}

// Skeleton específico para tarjetas de estadísticas
export function StatCardSkeleton() {
  return (
    <motion.div 
      className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center justify-between mb-4">
        <Skeleton variant="circle" className="size-12" />
        <Skeleton className="w-16 h-6" />
      </div>
      <div className="space-y-2">
        <Skeleton className="w-20 h-8" />
        <Skeleton variant="text" className="w-32" />
      </div>
      <Skeleton className="w-full h-1 mt-4" />
    </motion.div>
  );
}

// Skeleton para el header
export function HeaderSkeleton() {
  return (
    <div className="sticky top-0 z-30 border-b border-white/30 bg-white/80 backdrop-blur-md shadow-lg">
      <div className="mx-auto max-w-7xl px-4 py-4 flex items-center gap-4">
        <div className="flex items-center gap-4">
          <Skeleton variant="rounded" className="size-16" />
          <div className="flex-1 min-w-0">
            <Skeleton className="w-48 h-8 mb-2" />
            <Skeleton variant="text" className="w-64" />
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-3">
          <Skeleton className="w-64 h-12" />
          <Skeleton variant="circle" className="size-12" />
          <div className="h-6 w-px bg-gray-200" />
          <Skeleton className="w-32 h-12" />
        </div>
      </div>
    </div>
  );
}

// Skeleton para la sidebar
export function SidebarSkeleton() {
  return (
    <nav className="h-full bg-gradient-to-br from-blue-600 to-blue-700 text-white flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-blue-500/30">
        <div className="flex items-center gap-3">
          <Skeleton variant="rounded" className="size-12 bg-white/20" />
          <div className="flex-1">
            <Skeleton className="w-32 h-5 mb-1 bg-white/20" />
            <Skeleton className="w-24 h-3 bg-white/10" />
          </div>
        </div>
      </div>

      {/* Perfil de usuario */}
      <div className="p-6 border-b border-blue-500/30">
        <div className="bg-blue-500/30 backdrop-blur-sm rounded-2xl p-4 border border-blue-400/30">
          <div className="flex items-center gap-3 mb-4">
            <Skeleton variant="circle" className="size-12 bg-white/20" />
            <div>
              <Skeleton className="w-24 h-4 mb-1 bg-white/20" />
              <Skeleton className="w-20 h-3 bg-white/10" />
            </div>
          </div>
          <div className="space-y-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex justify-between">
                <Skeleton className="w-16 h-3 bg-white/10" />
                <Skeleton className="w-20 h-3 bg-white/10" />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Items de navegación */}
      <div className="flex-1 px-4 py-2">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="flex items-center gap-3 px-4 py-3 rounded-lg mb-1">
            <Skeleton variant="circle" className="size-5 bg-white/20" />
            <Skeleton className="flex-1 h-4 bg-white/20" />
          </div>
        ))}
      </div>
      
      {/* Footer */}
      <div className="p-4 border-t border-blue-500/30">
        <div className="flex items-center gap-3 px-4 py-3 rounded-lg mb-3">
          <Skeleton variant="circle" className="size-5 bg-white/20" />
          <Skeleton className="flex-1 h-4 bg-white/20" />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Skeleton variant="circle" className="size-2 bg-white/20" />
            <Skeleton className="w-20 h-3 bg-white/10" />
          </div>
          <Skeleton className="w-8 h-3 bg-white/10" />
        </div>
      </div>
    </nav>
  );
}

// Skeleton para gráficos
export function ChartSkeleton() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <div>
          <Skeleton className="w-40 h-6 mb-2" />
          <Skeleton variant="text" className="w-32" />
        </div>
        <Skeleton className="w-20 h-6" />
      </div>
      <div className="h-64 bg-gradient-to-br from-blue-50 to-orange-50 rounded-xl flex items-center justify-center">
        <div className="w-full h-full p-4">
          {/* Simulación de barras de gráfico */}
          <div className="flex items-end justify-between h-full gap-2">
            {[40, 60, 80, 45, 70, 90, 35].map((height, i) => (
              <Skeleton 
                key={i} 
                className="flex-1 rounded-t-md"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Skeleton para listas
export function ListSkeleton({ items = 5 }: { items?: number }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <Skeleton className="w-32 h-6" />
        <Skeleton className="w-16 h-5" />
      </div>
      <div className="space-y-4">
        {Array.from({ length: items }).map((_, i) => (
          <div key={i} className="flex items-center justify-between p-3 rounded-lg">
            <div className="flex items-center gap-3">
              <Skeleton variant="circle" className="size-8" />
              <div>
                <Skeleton className="w-32 h-4 mb-1" />
                <Skeleton variant="text" className="w-24" />
              </div>
            </div>
            <Skeleton className="w-12 h-4" />
          </div>
        ))}
      </div>
    </div>
  );
}

// Skeleton completo para dashboard
export function DashboardSkeleton() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-400 via-blue-300 to-orange-300 text-gray-900 relative overflow-hidden">
      {/* Fondo con patrones amigables */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-orange-400 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-blue-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-orange-300 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-blue-400 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      <div className="relative z-10">
        <div className="flex h-screen">
          {/* Sidebar */}
          <aside className="w-80 flex-shrink-0">
            <SidebarSkeleton />
          </aside>

          {/* Contenido principal */}
          <main className="flex-1 overflow-auto bg-gray-50">
            <div className="p-8">
              {/* Header del contenido */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <Skeleton className="w-64 h-8 mb-2" />
                    <Skeleton variant="text" className="w-96" />
                    <Skeleton variant="text" className="w-32 mt-1" />
                  </div>
                  <div className="flex items-center gap-3">
                    <Skeleton className="w-32 h-10" />
                    <Skeleton className="w-36 h-12" />
                  </div>
                </div>

                {/* Filtros */}
                <div className="flex items-center gap-4 mb-8">
                  <Skeleton className="flex-1 h-12" />
                  <Skeleton className="w-40 h-12" />
                  <Skeleton className="w-32 h-12" />
                </div>
              </div>
              
              {/* Tarjetas de estadísticas */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {[1, 2, 3, 4].map((i) => (
                  <StatCardSkeleton key={i} />
                ))}
              </div>

              {/* Gráficos */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                <ChartSkeleton />
                <ListSkeleton />
              </div>

              {/* Sección inferior */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <ListSkeleton items={4} />
                <ListSkeleton items={4} />
                <ListSkeleton items={4} />
              </div>
            </div>
          </main>
        </div>
      </div>
      
      {/* Mensaje amigable */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-xl border border-white/50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="flex items-center gap-3">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
            <p className="text-gray-700 font-medium">Preparando tu experiencia educativa...</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
