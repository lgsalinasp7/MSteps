"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { brand, gradients, components, utils } from '@/lib/design-system';

export type StatItem = {
  label: string;
  value: string | number;
  icon: React.ComponentType<{ className?: string; color?: string }>;
  color: string;
  trend?: 'up' | 'down' | 'neutral';
  change?: string;
};

export function EnhancedStatsCards({ items }: { items: StatItem[] }) {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {items.map((item, i) => (
        <motion.div 
          key={i} 
          className={`${components.card.elevated} p-6 rounded-2xl border-0 overflow-hidden relative`}
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: i * 0.1, duration: 0.5 }}
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
        >
          {/* Gradiente de fondo sutil */}
          <div 
            className="absolute inset-0 opacity-5"
            style={{ background: gradients.primary }}
          />
          
          <div className="relative">
            {/* Header con icono */}
            <div className="flex items-center justify-between mb-4">
              <div 
                className="size-12 rounded-xl flex items-center justify-center shadow-lg"
                style={{ background: gradients.hero }}
              >
                <item.icon className="size-6 text-white" />
              </div>
              
              {/* Trend indicator */}
              {item.trend && (
                <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                  item.trend === 'up' ? components.badge.success :
                  item.trend === 'down' ? components.badge.danger :
                  'bg-gray-100 text-gray-600'
                }`}>
                  {item.trend === 'up' ? '↗' : item.trend === 'down' ? '↘' : '→'} {item.change}
                </div>
              )}
            </div>
            
            {/* Valor principal */}
            <div className="mb-2">
              <p className="text-3xl font-bold text-gray-900">{item.value}</p>
            </div>
            
            {/* Label */}
            <p className="text-sm text-gray-600 font-medium">{item.label}</p>
            
            {/* Barra de progreso sutil */}
            <div className="mt-4 h-1 bg-gray-100 rounded-full overflow-hidden">
              <motion.div 
                className="h-full rounded-full"
                style={{ background: gradients.hero }}
                initial={{ width: 0 }}
                animate={{ width: '75%' }}
                transition={{ delay: i * 0.1 + 0.3, duration: 0.8 }}
              />
            </div>
          </div>
        </motion.div>
      ))}
    </section>
  );
}
