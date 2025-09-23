"use client";
import React from 'react';

export type NavItem = {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  href?: string;
  active?: boolean;
};

export function SidebarNav({ items }: { items: NavItem[] }) {
  return (
    <nav className="rounded-xl bg-white shadow-sm border border-slate-200/70 overflow-hidden">
      <div className="p-3 border-b border-slate-200/70">
        <span className="text-xs font-medium text-slate-500">Navegación</span>
      </div>
      <ul className="p-2">
        {items.map((i, idx) => (
          <li key={idx}>
            <a href={i.href ?? '#'} className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm hover:bg-slate-50 ${i.active ? 'bg-slate-50 border border-slate-200' : 'text-slate-700'}`}>
              <i.icon className="size-4" />
              <span className="flex-1 truncate">{i.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}


