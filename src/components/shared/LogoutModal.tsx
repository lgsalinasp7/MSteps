"use client";
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LogOut, X, AlertTriangle } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

interface LogoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LogoutModal({ isOpen, onClose }: LogoutModalProps) {
  const { logout, state } = useAuth();

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

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 w-full max-w-md overflow-hidden">
              {/* Header del modal */}
              <div className="relative px-6 py-4 bg-gradient-to-r from-red-50 to-orange-50 border-b border-red-100">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-1 rounded-full hover:bg-white/50 transition-colors"
                >
                  <X className="size-4 text-gray-500" />
                </button>
                
                <div className="flex items-center gap-3">
                  <div className="size-12 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center text-white shadow-lg">
                    <AlertTriangle className="size-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Confirmar Cierre de Sesión</h3>
                    <p className="text-sm text-red-600">Esta acción cerrará tu sesión actual</p>
                  </div>
                </div>
              </div>

              {/* Contenido del modal */}
              <div className="px-6 py-6">
                {/* Información del usuario */}
                <div className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 mb-6">
                  <div className={`size-12 rounded-full bg-gradient-to-br ${getRoleColor()} flex items-center justify-center text-white font-bold shadow-lg`}>
                    {getRoleIcon()}
                  </div>
                  <div>
                    <p className="text-base font-bold text-gray-900">{state.user?.name || 'Usuario'}</p>
                    <p className="text-sm text-blue-600">{getRoleDisplayName()}</p>
                    {state.user?.organization && (
                      <p className="text-xs text-gray-500 mt-1">📍 {state.user.organization}</p>
                    )}
                  </div>
                </div>

                {/* Mensaje de confirmación */}
                <div className="mb-6">
                  <p className="text-gray-700 text-center leading-relaxed">
                    ¿Estás seguro de que deseas cerrar sesión?
                  </p>
                  <p className="text-sm text-gray-500 text-center mt-2">
                    Tendrás que iniciar sesión nuevamente para acceder al sistema.
                  </p>
                </div>

                {/* Botones de acción */}
                <div className="flex gap-3">
                  <button
                    onClick={onClose}
                    className="flex-1 px-4 py-3 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-all duration-200 border border-gray-200"
                  >
                    Cancelar
                  </button>
                  <button
                    onClick={handleLogout}
                    className="flex-1 px-4 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-xl hover:from-red-600 hover:to-red-700 transition-all duration-200 shadow-lg flex items-center justify-center gap-2"
                  >
                    <LogOut className="size-4" />
                    Cerrar Sesión
                  </button>
                </div>
              </div>

              {/* Footer con información adicional */}
              <div className="px-6 py-3 bg-gray-50 border-t border-gray-200">
                <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                  <div className="size-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>Sesión activa • Mastersteps v2.0</span>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
