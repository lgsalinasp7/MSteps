"use client";
import React, { useState, useRef, useEffect } from 'react';
import { Bell, BookOpen, Search } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import Link from 'next/link';

export function HeaderBar({ title, subtitle }: { title: string; subtitle?: string }) {
  const { logout } = useAuth();
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

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center gap-3">
        <div className={`size-9 rounded-md bg-[linear-gradient(135deg,#0e5fac20,#10a8f720)] flex items-center justify-center`}>
          <BookOpen className="size-5" color="#0e5fac" />
        </div>
        <div className="flex-1">
          <h1 className="text-lg font-semibold leading-tight">{title}</h1>
          {subtitle ? <p className="text-xs text-slate-500">{subtitle}</p> : null}
        </div>
        <div className="hidden md:flex items-center gap-2">
          <div className="relative">
            <Search className="size-4 absolute left-2 top-1/2 -translate-y-1/2 text-slate-400" />
            <input placeholder="Buscar..." className="pl-8 pr-3 py-1.5 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#10a8f7] bg-white text-sm" />
          </div>
          <button className="p-2 rounded-md border border-slate-200 hover:bg-slate-100">
            <Bell className="size-5 text-slate-600" />
          </button>
          <div className="h-6 w-px bg-slate-200" />
          <div className="relative" ref={menuRef}>
            <button onClick={() => setMenuOpen((v) => !v)} className="flex items-center gap-2 px-2 py-1 rounded-md border border-slate-200 hover:bg-slate-50">
              <div className={`size-8 rounded-full bg-[linear-gradient(135deg,#f9b43e20,#d04a5c20)] flex items-center justify-center`}>
                <span className="text-sm font-semibold text-slate-800">AD</span>
              </div>
            </button>
            {menuOpen ? (
              <div className="absolute right-0 mt-2 w-44 rounded-md border border-slate-200 bg-white shadow-sm z-30">
                <div className="py-1">
                  <Link href="/profile" className="block px-3 py-2 text-sm hover:bg-slate-50">Perfil</Link>
                  <Link href="/settings" className="block px-3 py-2 text-sm hover:bg-slate-50">Ajustes</Link>
                  <div className="h-px bg-slate-200 my-1" />
                  <button onClick={logout} className="w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-red-50">Cerrar sesión</button>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </header>
  );
}


