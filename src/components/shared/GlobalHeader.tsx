"use client";
import React, { useState, useRef, useEffect } from 'react';
import { Bell, Search, User, Settings, LogOut } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import Link from 'next/link';
import Image from 'next/image';

export function GlobalHeader() {
  const { logout, state } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!menuRef.current) return;
      if (!menuRef.current.contains(e.target as Node)) setMenuOpen(false);
    }
    document.addEventListener('click', onDocClick);
    return () => document.removeEventListener('click', onDocClick);
  }, []);

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

  const getRoleDisplayName = () => {
    switch(state.user?.role) {
      case 'admin': return 'Administrador';
      case 'teacher': return 'Maestro';
      case 'parent': return 'Padre';
      default: return 'Usuario';
    }
  };

  return (
    <header className="w-full shadow-lg relative z-50" style={{ background: '#0B317D' }}>
      {/* Fondo con textura sutil */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/20"></div>
      
      <div className="relative z-10 px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo y marca */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              {/* Logo con fondo blanco */}
              <div className="size-12 rounded-xl bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-lg border border-white/30">
                <Image 
                  src="/logo.png" 
                  alt="Mastersteps Logo" 
                  width={32} 
                  height={32} 
                  className="object-contain"
                />
              </div>
              
              {/* Texto de la marca */}
              <div>
                <h1 className="text-xl font-bold text-white">Mastersteps</h1>
                <p className="text-xs text-blue-100">Plataforma Educativa</p>
              </div>
            </div>
          </div>

          {/* Barra de búsqueda central */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <Search className="size-5 absolute left-4 top-1/2 -translate-y-1/2 text-blue-200" />
              <input 
                placeholder="Buscar clases, estudiantes, materiales..." 
                className="w-full pl-12 pr-4 py-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-blue-100 focus:bg-white/20 focus:border-white/40 focus:outline-none transition-all duration-200"
              />
            </div>
          </div>
          
          {/* Área de usuario */}
          <div className="flex items-center gap-4">
            {/* Notificaciones */}
            <button className="relative p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-200">
              <Bell className="size-5 text-white" />
              <span className="absolute -top-1 -right-1 size-5 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center border-2" style={{ borderColor: '#0B317D' }}>
                <span className="text-white text-xs font-bold">3</span>
              </span>
            </button>
            
            <div className="h-6 w-px bg-white/20" />
            
            {/* Perfil de usuario */}
            <div className="relative" ref={menuRef}>
              <button 
                onClick={() => setMenuOpen(!menuOpen)} 
                className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-200"
              >
                <div 
                  className={`size-10 rounded-xl bg-gradient-to-br ${getRoleColor()} flex items-center justify-center text-white font-bold shadow-lg`}
                >
                  {getRoleIcon()}
                </div>
                <div className="hidden lg:block text-left">
                  <p className="text-sm font-semibold text-white">{state.user?.name || 'Usuario'}</p>
                    <p className="text-xs text-blue-100">{getRoleDisplayName()}</p>
                </div>
              </button>
              
              {menuOpen && (
                <div className="absolute right-0 mt-3 w-72 rounded-2xl bg-white shadow-2xl border border-gray-200 z-50 overflow-hidden">
                  {/* Header del menú */}
                  <div className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 border-b border-blue-200">
                    <div className="flex items-center gap-3">
                      <div 
                        className={`size-12 rounded-xl bg-gradient-to-br ${getRoleColor()} flex items-center justify-center text-white font-bold shadow-lg`}
                      >
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
                  </div>
                  
                  {/* Opciones del menú */}
                  <div className="py-2">
                    <Link href="/profile" className="flex items-center gap-3 px-4 py-3 text-sm font-medium hover:bg-blue-50 transition-colors">
                      <div className="size-8 rounded-lg bg-blue-100 flex items-center justify-center">
                        <User className="size-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-gray-900">Mi Perfil</p>
                        <p className="text-xs text-gray-500">Información personal</p>
                      </div>
                    </Link>
                    <Link href="/settings" className="flex items-center gap-3 px-4 py-3 text-sm font-medium hover:bg-orange-50 transition-colors">
                      <div className="size-8 rounded-lg bg-orange-100 flex items-center justify-center">
                        <Settings className="size-4 text-orange-600" />
                      </div>
                      <div>
                        <p className="text-gray-900">Configuración</p>
                        <p className="text-xs text-gray-500">Preferencias del sistema</p>
                      </div>
                    </Link>
                    <div className="h-px bg-gray-200 mx-4 my-2" />
                    <button 
                      onClick={logout} 
                      className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-red-600 hover:bg-red-50 w-full text-left transition-colors"
                    >
                      <div className="size-8 rounded-lg bg-red-100 flex items-center justify-center">
                        <LogOut className="size-4 text-red-600" />
                      </div>
                      <div>
                        <p className="text-red-600">Cerrar Sesión</p>
                        <p className="text-xs text-red-400">Salir del sistema</p>
                      </div>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
