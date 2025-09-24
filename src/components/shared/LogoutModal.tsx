"use client";
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { LogOut, X, AlertTriangle } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

interface LogoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LogoutModal({ isOpen, onClose }: LogoutModalProps) {
  const { logout, state } = useAuth();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLogout = () => {
    logout();
    onClose();
    if (typeof window !== 'undefined') {
      window.location.href = '/login';
    }
  };

  const getRoleIcon = () => {
    switch(state.user?.role) {
      case 'admin': return '👑';
      case 'teacher': return '📚';
      case 'parent': return '👨‍👩‍👧‍👦';
      default: return '👤';
    }
  };

  const getRoleColor = () => {
    switch(state.user?.role) {
      case 'admin': return 'from-blue-500 to-blue-600';
      case 'teacher': return 'from-orange-300 to-orange-400';
      case 'parent': return 'from-pink-500 to-pink-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getRoleDisplayName = () => {
    switch(state.user?.role) {
      case 'admin': return 'Administrador';
      case 'teacher': return 'Maestro';
      case 'parent': return 'Padre';
      default: return 'Usuario';
    }
  };

  if (!mounted) return null;

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998]"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ type: "spring", duration: 0.4, bounce: 0.3 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-4"
            style={{ 
              minHeight: '100vh',
              minWidth: '100vw',
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0
            }}
          >
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl border border-gray-200 w-full max-w-xs sm:max-w-sm overflow-hidden max-h-[85vh] sm:max-h-[90vh] flex flex-col mx-auto">
              {/* Header del modal - Compacto */}
              <div className="relative px-3 sm:px-4 py-2.5 sm:py-3 bg-gradient-to-r from-red-50 to-orange-50 border-b border-red-100 flex-shrink-0">
                <button
                  onClick={onClose}
                  className="absolute top-2 sm:top-3 right-2 sm:right-3 p-1 rounded-full hover:bg-white/50 transition-colors"
                >
                  <X className="size-3 sm:size-4 text-gray-500" />
                </button>
                
                <div className="flex items-center gap-2">
                  <div className="size-8 sm:size-10 rounded-xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center text-white shadow-lg flex-shrink-0">
                    <AlertTriangle className="size-4 sm:size-5" />
                  </div>
                  <div className="min-w-0 flex-1 pr-6">
                    <h3 className="text-sm sm:text-base font-bold text-gray-900 line-clamp-1">Cerrar Sesión</h3>
                    <p className="text-xs text-red-600 line-clamp-1">Confirmar acción</p>
                  </div>
                </div>
              </div>

              {/* Contenido del modal - Ultra Compacto */}
              <div className="px-3 sm:px-4 py-3 sm:py-4 overflow-y-auto flex-1">
                {/* Información del usuario - Compacta */}
                <div className="flex items-center gap-2 p-2.5 sm:p-3 rounded-lg bg-gray-50 border border-gray-200 mb-3 sm:mb-4">
                  <div className={`size-8 sm:size-10 rounded-full bg-gradient-to-br ${getRoleColor()} flex items-center justify-center text-white font-bold shadow-lg flex-shrink-0`}>
                    <span className="text-xs sm:text-sm">{getRoleIcon()}</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs sm:text-sm font-bold text-gray-900 truncate">{state.user?.name || 'Usuario'}</p>
                    <p className="text-xs text-blue-600">{getRoleDisplayName()}</p>
                  </div>
                </div>

                {/* Mensaje de confirmación - Compacto */}
                <div className="mb-3 sm:mb-4">
                  <p className="text-sm text-gray-700 text-center">
                    ¿Cerrar sesión?
                  </p>
                  <p className="text-xs text-gray-500 text-center mt-1">
                    Deberás iniciar sesión nuevamente.
                  </p>
                </div>

                {/* Botones de acción - Compactos */}
                <div className="flex gap-2">
                  <button
                    onClick={onClose}
                    className="flex-1 px-3 py-2 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-all duration-200 border border-gray-200 text-sm"
                  >
                    Cancelar
                  </button>
                  <button
                    onClick={handleLogout}
                    className="flex-1 px-3 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white font-medium rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-200 shadow-lg flex items-center justify-center gap-1.5 text-sm"
                  >
                    <LogOut className="size-3.5" />
                    Salir
                  </button>
                </div>
              </div>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );

  return createPortal(modalContent, document.body);
}
