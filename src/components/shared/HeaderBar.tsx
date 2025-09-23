"use client";
import React, { useState, useRef, useEffect } from 'react';
import { Bell, BookOpen, Search, User, Settings, LogOut } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import Link from 'next/link';
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
    <header className="sticky top-0 z-20 border-b border-gray-200 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="mx-auto max-w-7xl px-4 py-4 flex items-center gap-4">
        {/* Logo con gradiente */}
        <div className={`size-12 rounded-xl ${gradients.hero} flex items-center justify-center shadow-md`}>
          <BookOpen className="size-6 text-white drop-shadow-sm" />
        </div>
        
        {/* Título con gradiente */}
        <div className="flex-1 min-w-0">
          <h1 className={`text-xl font-bold ${utils.textGradient} leading-tight`}>
            {title}
          </h1>
          {subtitle && (
            <p className="text-sm text-gray-600 mt-1">{subtitle}</p>
          )}
        </div>

        {/* Barra de búsqueda mejorada */}
        <div className="hidden md:flex items-center gap-3">
          <div className="relative">
            <Search className="size-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              placeholder="Buscar clases, materiales..." 
              className={`pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white transition-all duration-200 ${utils.focusRing} text-sm`}
            />
          </div>
          
          {/* Notificaciones con badge */}
          <button className="relative p-2.5 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors">
            <Bell className="size-5 text-gray-600" />
            <span className="absolute -top-1 -right-1 size-3 bg-red-500 rounded-full"></span>
          </button>
          
          <div className="h-6 w-px bg-gray-200" />
          
          {/* Avatar con menú */}
          <div className="relative" ref={menuRef}>
            <button 
              onClick={() => setMenuOpen(!menuOpen)} 
              className="flex items-center gap-3 px-3 py-2 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <div 
                className="size-10 rounded-xl flex items-center justify-center text-white font-semibold shadow-md"
                style={{ background: getRoleColor() }}
              >
                {getRoleIcon()}
              </div>
              <div className="hidden lg:block text-left">
                <p className="text-sm font-medium text-gray-900">Usuario</p>
                <p className="text-xs text-gray-500 capitalize">{state.user?.role || 'usuario'}</p>
              </div>
            </button>
            
            {menuOpen && (
              <div className="absolute right-0 mt-2 w-56 rounded-xl border border-gray-200 bg-white shadow-xl z-30 overflow-hidden">
                <div className="p-3 border-b border-gray-100">
                  <p className="text-sm font-medium text-gray-900">Panel de {state.user?.role}</p>
                  <p className="text-xs text-gray-500">Gestiona tu experiencia</p>
                </div>
                <div className="py-2">
                  <Link href="/profile" className="flex items-center gap-3 px-4 py-2 text-sm hover:bg-gray-50">
                    <User className="size-4 text-gray-500" />
                    Perfil
                  </Link>
                  <Link href="/settings" className="flex items-center gap-3 px-4 py-2 text-sm hover:bg-gray-50">
                    <Settings className="size-4 text-gray-500" />
                    Configuración
                  </Link>
                  <div className="h-px bg-gray-100 my-2" />
                  <button 
                    onClick={logout} 
                    className="flex items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50 w-full text-left"
                  >
                    <LogOut className="size-4" />
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


