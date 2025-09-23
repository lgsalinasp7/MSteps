"use client";
import React from 'react';
import { brand, gradients, components, utils } from '@/lib/design-system';

export type NavItem = {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  href?: string;
  active?: boolean;
  badge?: number;
  color?: string;
};

export function EnhancedSidebarNav({ items }: { items: NavItem[] }) {
  return (
    <nav className={`${components.card.elevated} rounded-2xl border-0 overflow-hidden`}>
      {/* Header con gradiente */}
      <div 
        className="p-4 border-b border-gray-100"
        style={{ background: gradients.primary }}
      >
        <div className="flex items-center gap-3">
          <div className="size-8 rounded-lg bg-white/20 flex items-center justify-center">
            <span className="text-white text-sm font-bold">📚</span>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Navegación</p>
            <p className="text-xs text-white/80">Explora las secciones</p>
          </div>
        </div>
      </div>
      
      {/* Items de navegación */}
      <div className="p-2">
        {items.map((item, idx) => (
          <div key={idx} className="mb-1">
            <a 
              href={item.href ?? '#'} 
              className={`group flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                item.active 
                  ? `${components.button.primary} shadow-md` 
                  : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              {/* Icono con color dinámico */}
              <div className={`size-8 rounded-lg flex items-center justify-center ${
                item.active 
                  ? 'bg-white/20' 
                  : 'bg-gray-100 group-hover:bg-gray-200'
              }`}>
                <item.icon className={`size-4 ${
                  item.active ? 'text-white' : 'text-gray-600 group-hover:text-gray-700'
                }`} />
              </div>
              
              {/* Label */}
              <span className="flex-1 truncate">{item.label}</span>
              
              {/* Badge de notificación */}
              {item.badge && item.badge > 0 && (
                <span className={`px-2 py-1 text-xs font-bold rounded-full ${
                  item.active 
                    ? 'bg-white/20 text-white' 
                    : components.badge.warning
                }`}>
                  {item.badge}
                </span>
              )}
            </a>
          </div>
        ))}
      </div>
      
      {/* Footer con información adicional */}
      <div className="p-4 border-t border-gray-100 bg-gray-50">
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <div className="size-2 bg-green-500 rounded-full"></div>
          <span>Sistema activo</span>
        </div>
      </div>
    </nav>
  );
}
