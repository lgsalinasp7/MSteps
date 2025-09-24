"use client";
import React, { useState, useRef, useEffect } from 'react';
import { Bell, Search, User, Settings, LogOut } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import Link from 'next/link';
import Image from 'next/image';
import { brand, gradients, components, utils } from '@/lib/design-system';

export function HeaderBar({ title, subtitle }: { title: string; subtitle?: string }) {
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
      case 'admin': return brand.primary;
      case 'teacher': return brand.accent;
      case 'parent': return brand.secondary;
      default: return brand.primary;
    }
  };

  return (
        <header className="sticky top-0 z-30 border-b border-white/30 bg-white/80 backdrop-blur-md shadow-lg">
          <div className="mx-auto max-w-7xl px-4 py-4 flex items-center gap-4">
            {/* Logo prominente */}
            <div className="flex items-center gap-4">
              <div className="size-16 rounded-2xl bg-gradient-to-br from-orange-100 to-blue-100 border-2 border-white/50 flex items-center justify-center shadow-xl">
                <Image 
                  src="/logo.png" 
                  alt="Mastersteps Logo" 
                  width={48} 
                  height={48} 
                  className="object-contain"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h1 className={`text-2xl font-bold ${utils.textGradient} leading-tight`}>
                  {title}
                </h1>
                {subtitle && (
                  <p className="text-sm text-gray-600 mt-1">{subtitle}</p>
                )}
              </div>
            </div>

        {/* Barra de búsqueda mejorada */}
        <div className="hidden md:flex items-center gap-3">
              <div className="relative">
                <Search className="size-4 absolute left-3 top-1/2 -translate-y-1/2 text-blue-500" />
                <input 
                  placeholder="Buscar clases, materiales... 🔍" 
                  className="pl-10 pr-4 py-3 rounded-2xl border-2 border-white/50 bg-white/80 backdrop-blur-sm focus:bg-white focus:border-blue-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-200 text-sm shadow-sm"
                />
              </div>
          
          {/* Notificaciones con badge */}
          <button className="relative p-3 rounded-2xl bg-white/80 border-2 border-white/50 hover:bg-white hover:shadow-md transition-all duration-200 backdrop-blur-sm">
            <Bell className="size-5 text-blue-600" />
            <span className="absolute -top-1 -right-1 size-4 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">3</span>
            </span>
          </button>
          
          <div className="h-6 w-px bg-gray-200" />
          
          {/* Avatar con menú */}
          <div className="relative" ref={menuRef}>
            <button 
              onClick={() => setMenuOpen(!menuOpen)} 
              className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/80 border-2 border-white/50 hover:bg-white hover:shadow-md transition-all duration-200 backdrop-blur-sm"
            >
              <div 
                className="size-12 rounded-2xl flex items-center justify-center text-white font-bold shadow-lg text-lg"
                style={{ background: `linear-gradient(135deg, ${getRoleColor()}, ${getRoleColor()}dd)` }}
              >
                {getRoleIcon()}
              </div>
              <div className="hidden lg:block text-left">
                <p className="text-sm font-semibold text-gray-800">Usuario</p>
                <p className="text-xs text-gray-600 capitalize font-medium">{state.user?.role || 'usuario'}</p>
              </div>
            </button>
            
            {menuOpen && (
              <div className="absolute right-0 mt-3 w-64 rounded-2xl bg-white/95 backdrop-blur-md border-2 border-white/50 shadow-2xl z-30 overflow-hidden">
                <div className="p-4 bg-gradient-to-r from-blue-50 to-orange-50 border-b border-orange-100">
                  <p className="text-base font-bold text-gray-800">Panel de {state.user?.role} ✨</p>
                  <p className="text-xs text-gray-600 mt-1">Gestiona tu experiencia educativa</p>
                </div>
                <div className="py-3">
                  <Link href="/profile" className="flex items-center gap-3 px-4 py-3 text-sm font-medium hover:bg-blue-50 transition-colors">
                    <div className="size-8 rounded-lg bg-blue-100 flex items-center justify-center">
                      <User className="size-4 text-blue-600" />
                    </div>
                    Perfil
                  </Link>
                  <Link href="/settings" className="flex items-center gap-3 px-4 py-3 text-sm font-medium hover:bg-orange-50 transition-colors">
                    <div className="size-8 rounded-lg bg-orange-100 flex items-center justify-center">
                      <Settings className="size-4 text-orange-600" />
                    </div>
                    Configuración
                  </Link>
                  <div className="h-px bg-gray-200 mx-4 my-2" />
                  <button 
                    onClick={logout} 
                    className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-red-600 hover:bg-red-50 w-full text-left transition-colors"
                  >
                    <div className="size-8 rounded-lg bg-red-100 flex items-center justify-center">
                      <LogOut className="size-4 text-red-600" />
                    </div>
                    Cerrar sesión
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}


