"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Skeleton, SidebarSkeleton, StatCardSkeleton } from '@/components/shared/Skeleton';

export function ParentSkeleton() {
  return (
    <div className="min-h-screen w-full bg-gray-50 text-gray-900 relative overflow-hidden">
      {/* Fondo familiar amigable */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-16 left-16 w-20 h-20 bg-green-400 rounded-full blur-lg animate-pulse"></div>
        <div className="absolute top-48 right-24 w-28 h-28 bg-blue-300 rounded-full blur-xl animate-pulse" style={{ animationDelay: '0.6s' }}></div>
        <div className="absolute bottom-24 left-1/4 w-24 h-24 bg-purple-300 rounded-full blur-lg animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-48 right-1/3 w-32 h-32 bg-orange-300 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '0.3s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-pink-300 rounded-full blur-md animate-pulse" style={{ animationDelay: '1.4s' }}></div>
      </div>

      {/* Header skeleton similar al HeaderBar */}
      <div className="sticky top-0 z-30 border-b border-white/30 bg-white/80 backdrop-blur-md shadow-lg">
        <div className="mx-auto max-w-7xl px-4 py-4 flex items-center gap-4">
          <div className="flex items-center gap-4">
            <Skeleton variant="rounded" className="size-16" />
            <div className="flex-1 min-w-0">
              <Skeleton className="w-56 h-8 mb-2" />
              <Skeleton variant="text" className="w-72" />
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
      
      <div className="mx-auto max-w-7xl px-4 py-6 grid grid-cols-12 gap-6">
        {/* Sidebar */}
        <aside className="col-span-12 md:col-span-3 lg:col-span-2">
          <div className="h-full bg-gradient-to-br from-blue-600 to-blue-700 text-white flex flex-col rounded-2xl overflow-hidden">
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
                  {i === 3 && <Skeleton variant="circle" className="size-4 bg-orange-400/60" />}
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
          </div>
        </aside>

        {/* Contenido principal */}
        <main className="col-span-12 md:col-span-9 lg:col-span-10 space-y-6 relative">
          {/* Próxima clase */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="col-span-2 bg-white rounded-2xl border border-gray-200 shadow-sm">
              <div className="p-6 flex items-center justify-between border-b border-gray-100">
                <Skeleton className="w-48 h-6" />
                <Skeleton variant="circle" className="size-5" />
              </div>
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <Skeleton variant="rounded" className="size-14" />
                  <div className="flex-1">
                    <Skeleton className="w-64 h-6 mb-2" />
                    <Skeleton className="w-80 h-4 mb-2" />
                    <Skeleton variant="text" className="w-32 mb-4" />
                    <Skeleton className="w-40 h-10" />
                  </div>
                </div>
              </div>
            </div>

            {/* Progreso del niño */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm">
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center gap-3 mb-2">
                  <Skeleton className="w-32 h-5" />
                  <Skeleton variant="circle" className="size-6" />
                </div>
              </div>
              <div className="p-6 space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center justify-between">
                    <Skeleton variant="text" className="w-28" />
                    <div className="flex items-center gap-2">
                      <Skeleton variant="circle" className="size-5" />
                      <Skeleton className="w-6 h-5" />
                    </div>
                  </div>
                ))}
                <div className="mt-4">
                  <Skeleton variant="text" className="w-24 mb-2" />
                  <div className="flex flex-wrap gap-2">
                    {[1, 2, 3].map((i) => (
                      <Skeleton key={i} className="w-20 h-6" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Materiales para reforzar */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="col-span-2 bg-white rounded-2xl border border-gray-200 shadow-sm">
              <div className="p-6 flex items-center justify-between border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <Skeleton className="w-56 h-6" />
                  <Skeleton variant="circle" className="size-6" />
                </div>
                <Skeleton variant="circle" className="size-5" />
              </div>
              <div className="p-6 grid gap-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-xl border border-gray-200">
                    <Skeleton variant="rounded" className="size-12" />
                    <div className="flex-1 min-w-0">
                      <Skeleton className="w-48 h-4 mb-1" />
                      <Skeleton variant="text" className="w-20" />
                    </div>
                    <Skeleton className="w-16 h-8" />
                  </div>
                ))}
              </div>
            </div>

            {/* Asistente IA */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm">
              <div className="p-6 border-b border-gray-100">
                <Skeleton className="w-24 h-5 mb-1" />
                <Skeleton variant="text" className="w-48" />
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200">
                  <Skeleton variant="circle" className="size-5" />
                  <Skeleton className="flex-1 h-4" />
                </div>
                <div className="space-y-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="p-3 rounded-lg bg-gray-50">
                      <Skeleton className="w-32 h-4 mb-1" />
                      <Skeleton variant="text" className="w-full" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Mensaje amigable para padres */}
          <motion.div 
            className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-xl border border-green-200"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <div className="flex items-center gap-3">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
              <div>
                <p className="text-gray-700 font-medium text-sm">👨‍👩‍👧‍👦 Preparando el progreso de tu hijo...</p>
                <p className="text-gray-500 text-xs">Cargando actividades y logros</p>
              </div>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
}
