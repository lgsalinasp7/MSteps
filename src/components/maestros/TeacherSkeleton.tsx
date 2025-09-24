"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Skeleton, SidebarSkeleton, StatCardSkeleton } from '@/components/shared/Skeleton';

export function TeacherSkeleton() {
  return (
    <div className="min-h-screen w-full bg-gray-50 text-gray-900 relative overflow-hidden">
      {/* Fondo educativo amigable */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-24 h-24 bg-orange-400 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-60 right-32 w-32 h-32 bg-blue-300 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '0.8s' }}></div>
        <div className="absolute bottom-32 left-1/3 w-20 h-20 bg-green-300 rounded-full blur-lg animate-pulse" style={{ animationDelay: '1.2s' }}></div>
        <div className="absolute bottom-60 right-1/4 w-28 h-28 bg-purple-300 rounded-full blur-xl animate-pulse" style={{ animationDelay: '0.4s' }}></div>
      </div>

      {/* Header skeleton */}
      <div className="sticky top-0 z-20 border-b border-gray-200 bg-white/90 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center gap-3">
          <Skeleton variant="rounded" className="size-9" />
          <div className="flex-1 min-w-0">
            <Skeleton className="w-48 h-5 mb-1" />
            <Skeleton variant="text" className="w-64" />
          </div>
          <div className="hidden md:flex items-center gap-2">
            <Skeleton className="w-32 h-8" />
            <Skeleton variant="circle" className="size-8" />
            <div className="h-6 w-px bg-gray-200" />
            <Skeleton className="w-24 h-8" />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-6 grid grid-cols-12 gap-6">
        {/* Sidebar de navegación */}
        <aside className="col-span-12 md:col-span-3 lg:col-span-2">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm">
            <div className="p-3 border-b border-gray-200">
              <Skeleton variant="text" className="w-20" />
            </div>
            <div className="p-2">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="flex items-center gap-3 px-4 py-3 rounded-lg mb-1">
                  <Skeleton variant="circle" className="size-5" />
                  <Skeleton className="flex-1 h-4" />
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Contenido principal */}
        <main className="col-span-12 md:col-span-9 lg:col-span-10 space-y-6 relative">
          {/* Panel principal */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <StatCardSkeleton key={i} />
            ))}
          </section>

          {/* Sección de clase */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm">
              <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                <div>
                  <Skeleton className="w-32 h-5 mb-1" />
                  <Skeleton variant="text" className="w-40" />
                </div>
                <Skeleton variant="circle" className="size-4" />
              </div>
              <div className="p-4 space-y-4">
                {/* Área de video */}
                <div className="aspect-video w-full rounded-lg bg-gradient-to-br from-blue-100 to-orange-100 flex items-center justify-center">
                  <div className="text-center">
                    <Skeleton variant="circle" className="size-16 mx-auto mb-3" />
                    <Skeleton className="w-32 h-6" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Skeleton className="h-12" />
                  <Skeleton className="h-12" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm">
              <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                <Skeleton className="w-40 h-5" />
                <Skeleton variant="circle" className="size-4" />
              </div>
              <div className="p-4 space-y-4">
                {[1, 2].map((i) => (
                  <div key={i} className="p-4 rounded-lg border border-gray-200">
                    <Skeleton className="w-24 h-4 mb-1" />
                    <Skeleton variant="text" className="w-16" />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Lista de estudiantes */}
          <section className="bg-white rounded-2xl border border-gray-200 shadow-sm">
            <div className="p-4 border-b border-gray-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Skeleton variant="circle" className="size-5" />
                <Skeleton className="w-48 h-5" />
              </div>
              <Skeleton className="w-20 h-4" />
            </div>
            <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="p-4 rounded-lg border border-gray-200 flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <Skeleton className="w-20 h-4 mb-1" />
                      <Skeleton variant="text" className="w-12" />
                    </div>
                    <Skeleton className="w-16 h-6" />
                  </div>
                  <Skeleton variant="text" className="w-full" />
                  <Skeleton className="w-full h-8" />
                </div>
              ))}
            </div>
          </section>

          {/* Mensaje amigable para maestros */}
          <motion.div 
            className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-xl border border-orange-200"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <div className="flex items-center gap-3">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
              <div>
                <p className="text-gray-700 font-medium text-sm">🎓 Preparando tu aula virtual...</p>
                <p className="text-gray-500 text-xs">Cargando materiales y actividades</p>
              </div>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
}
