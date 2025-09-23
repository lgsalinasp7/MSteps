"use client";
import React from 'react';
import { motion } from 'framer-motion';

export type StatItem = {
  label: string;
  value: string | number;
  icon: React.ComponentType<{ className?: string; color?: string }>;
  color: string;
};

export function StatsCards({ items, cardClass, gradient }: { items: StatItem[]; cardClass: string; gradient: (from: string, to: string) => string; }) {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {items.map((s, i) => (
        <motion.div key={i} className={`${cardClass} p-4`} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
          <div className="flex items-center justify-between">
            <div className={`size-10 rounded-md ${gradient(s.color, '#10a8f7')} flex items-center justify-center`}>
              <s.icon className="size-5" color={s.color} />
            </div>
          </div>
          <div className="mt-3">
            <p className="text-xs text-slate-500">{s.label}</p>
            <p className="text-2xl font-semibold">{s.value}</p>
          </div>
        </motion.div>
      ))}
    </section>
  );
}


