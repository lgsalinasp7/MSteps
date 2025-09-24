"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { useAuth } from '@/hooks/useAuth';
import { brand, gradients, components, utils } from '@/lib/design-system';
import { LogoutModal } from './LogoutModal';

export type NavItem = {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  href?: string;
  active?: boolean;
  badge?: number;
};

export function SidebarNav({ items }: { items: NavItem[] }) {
  const { state } = useAuth();
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  
  const getRoleDisplayName = () => {
    switch(state.user?.role) {
      case 'admin': return 'Administrador';
      case 'teacher': return 'Maestro';
      case 'parent': return 'Padre';
      default: return 'Usuario';
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
      case 'teacher': return 'from-orange-500 to-orange-600';
      case 'parent': return 'from-green-500 to-green-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <nav className="h-full bg-gradient-to-br from-blue-600 to-blue-700 text-white flex flex-col">

          {/* Tarjeta de perfil de usuario */}
          <div className="p-6 pt-8 border-b border-blue-500/30">
            <div className="bg-blue-500/30 backdrop-blur-sm rounded-2xl p-4 border border-blue-400/30">
              <div className="flex items-center gap-3 mb-4">
                <div className={`size-12 rounded-full bg-gradient-to-br ${getRoleColor()} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                  {getRoleIcon()}
                </div>
                <div>
                  <p className="text-white font-semibold">{state.user?.name || 'Usuario'}</p>
                  <p className="text-blue-200 text-xs">{getRoleDisplayName()}</p>
                </div>
              </div>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-blue-200">Organización</span>
                  <span className="text-white font-semibold text-right text-xs">{state.user?.organization || 'N/A'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-200">Email</span>
                  <span className="text-orange-300 font-semibold text-xs truncate max-w-24">{state.user?.email || 'N/A'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-200">Estado</span>
                  <span className="text-green-300 font-semibold">Activo</span>
                </div>
              </div>
            </div>
          </div>
      
      {/* Items de navegación */}
      <div className="flex-1 px-4 py-2">
        {items.map((item, idx) => (
          <a 
            key={idx}
            href={item.href ?? '#'} 
            className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 mb-1 ${
              item.active 
                ? 'bg-white/20 text-white shadow-md backdrop-blur-sm' 
                : 'text-blue-100 hover:bg-white/10 hover:text-white'
            }`}
          >
            <item.icon className="size-5" />
            <span className="flex-1 truncate">{item.label}</span>
            
            {/* Badge de notificación */}
            {item.badge && item.badge > 0 && (
              <span className="px-2 py-0.5 text-xs font-bold rounded-full bg-orange-500 text-white">
                {item.badge}
              </span>
            )}
          </a>
        ))}
      </div>
      
      {/* Botón de cerrar sesión */}
      <div className="p-4 border-t border-blue-500/30">
        <button 
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 mb-3 text-red-200 hover:bg-red-500/20 hover:text-red-100"
          onClick={() => setShowLogoutModal(true)}
        >
          <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          <span>Cerrar Sesión</span>
        </button>
        
        {/* Footer con estado del sistema */}
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-blue-200">
            <div className="size-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>Sistema activo</span>
          </div>
          <span className="text-blue-300">v2.0</span>
        </div>
      </div>

      {/* Modal de confirmación de logout */}
      <LogoutModal 
        isOpen={showLogoutModal} 
        onClose={() => setShowLogoutModal(false)} 
      />
    </nav>
  );
}


