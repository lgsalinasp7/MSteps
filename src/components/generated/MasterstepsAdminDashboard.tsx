import React, { useState, useRef, useEffect, useMemo } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useDashboardData } from '@/hooks/useDashboardData';
import { motion } from 'framer-motion';
import { Church, Users, BookOpen, Calendar, UploadCloud, FileText, Video, Settings, BarChart3, CreditCard, Bell, Mail, MessageSquare, Plus, Search, CheckCircle2, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { HeaderBar } from '@/components/shared/HeaderBar';
import { SidebarNav, type NavItem } from '@/components/shared/SidebarNav';
import { StatsCards } from '@/components/shared/StatsCards';
import { AttendanceArea, ParticipationBars } from '@/components/shared/Charts';
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { brand, gradients, components, utils } from '@/lib/design-system';
// Datos dinámicos del dashboard via API
const quickActions = [{
  icon: UploadCloud,
  label: 'Subir material',
  color: brand.primary
}, {
  icon: Video,
  label: 'Nuevo video',
  color: brand.secondary
}, {
  icon: FileText,
  label: 'Añadir PDF',
  color: brand.accent
}, {
  icon: Calendar,
  label: 'Programar clase',
  color: brand.danger
}] as any[];

// @component: MasterstepsAdminDashboard
export const MasterstepsAdminDashboard: React.FC = () => {
  const { logout } = useAuth();
  const { loading, error, stats, asistencia, participacion } = useDashboardData();
  const uiStats = useMemo(() => {
    const iconByLabel: Record<string, any> = {
      'Niños inscritos': Users,
      'Iglesias activas': Church,
      'Clases esta semana': BookOpen,
      'Licencias congregacionales': Settings,
    };
    const colorByLabel: Record<string, string> = {
      'Niños inscritos': brand.primary,
      'Iglesias activas': brand.accent,
      'Clases esta semana': brand.danger,
      'Licencias congregacionales': brand.secondary,
    };
    return stats.map((s) => ({
      ...s,
      icon: iconByLabel[s.label] ?? Users,
      color: colorByLabel[s.label] ?? brand.primary,
      trend: 'up' as const,
      change: '+12%'
    }));
  }, [stats]);
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
  // @return
  return <div className="min-h-screen w-full bg-slate-50 text-slate-900">
      <HeaderBar title="Mastersteps • Administrador" subtitle="Gestión central de clases, contenidos y automatizaciones" />

      <div className="mx-auto max-w-7xl px-4 py-6 grid grid-cols-12 gap-6">
        <aside className="col-span-12 md:col-span-3 lg:col-span-2">
          <SidebarNav items={[
            { icon: BarChart3, label: 'Panel', active: true },
            { icon: UploadCloud, label: 'Contenidos' },
            { icon: Calendar, label: 'Automatizaciones' },
            { icon: Users, label: 'Usuarios' },
            { icon: BookOpen, label: 'Reportes' },
            { icon: CreditCard, label: 'Membresías y Pagos' },
            { icon: Settings, label: 'Configuración' },
          ] as NavItem[]} />
        </aside>

        <main className="col-span-12 md:col-span-9 lg:col-span-10 space-y-6">
          <StatsCards items={loading ? Array.from({ length: 4 }).map((_, i) => ({ label: '—', value: '—', icon: Users, color: brand.primary })) : uiStats} />

          <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className={`${components.card.elevated} col-span-2 rounded-2xl border-0 overflow-hidden`}>
              <div className="p-6 flex items-center justify-between border-b border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900">Asistencia semanal</h3>
                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Últimos 7 días</span>
              </div>
              <div className="p-4 h-64"><AttendanceArea data={asistencia} color={brand.secondary} /></div>
            </div>

            <div className={`${components.card.elevated} rounded-2xl border-0 overflow-hidden`}>
              <div className="p-6 flex items-center justify-between border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <h3 className="text-lg font-semibold text-gray-900">Acciones rápidas</h3>
                  <div 
                    className="px-2 py-1 rounded-full text-xs font-bold text-white"
                    style={{ background: brand.accent }}
                  >
                    ⚡
                  </div>
                </div>
                <Plus className="size-5 text-gray-400" />
              </div>
              <div className="p-4 grid grid-cols-2 gap-3">
                {quickActions.map((a, i) => (
                  <motion.button 
                    key={i} 
                    className={`flex items-center gap-3 p-4 rounded-xl border border-gray-200 hover:shadow-md transition-all duration-200 ${utils.focusRing}`}
                    style={{ background: gradients.card }}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                  <div 
                    className="size-10 rounded-lg flex items-center justify-center"
                    style={{ background: gradients.hero }}
                  >
                    <a.icon className="size-5 text-white drop-shadow-sm" />
                  </div>
                    <span className="text-sm font-medium text-gray-900">{a.label}</span>
                  </motion.button>
                ))}
              </div>
            </div>
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className={`${components.card.elevated} col-span-2 rounded-2xl border-0 overflow-hidden`}>
              <div className="p-6 flex items-center justify-between border-b border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900">Participación por iglesia</h3>
                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Niños vs. Maestros</span>
              </div>
              <div className="p-4 h-64"><ParticipationBars data={participacion} colorA={brand.primary} colorB={brand.accent} /></div>
            </div>

            <div className={`${components.card.elevated} rounded-2xl border-0 overflow-hidden`}>
              <div className="p-6 border-b border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900">Automatizaciones</h3>
                <p className="text-sm text-gray-500">
                  Programar recordatorios y enlaces
                </p>
              </div>
              <div className="p-4 space-y-3">
                {[{
                icon: WhatsIcon,
                title: 'WhatsApp: Recordatorio clase',
                time: 'Sáb 9:00 AM',
                color: brand.danger
              }, {
                icon: Mail,
                title: 'Email: Enviar materiales',
                time: 'Vie 7:00 PM',
                color: brand.primary
              }, {
                icon: Calendar,
                title: 'Calendario: Clase semanal',
                time: 'Dom 10:00 AM',
                color: brand.accent
              }].map((item, i) => <div key={i} className="flex items-center justify-between p-3 rounded-lg border border-slate-200 hover:bg-slate-50">
                    <div className="flex items-center gap-3">
                      <div 
                        className="size-9 rounded-md flex items-center justify-center"
                        style={{ background: gradients.card }}
                      >
                        <item.icon className="size-4" style={{ color: item.color }} />
                      </div>
                      <div>
                        <p className="text-sm font-medium">{item.title}</p>
                        <p className="text-xs text-slate-500">{item.time}</p>
                      </div>
                    </div>
                    <button className="text-xs text-slate-600 hover:text-slate-900 underline">
                      Editar
                    </button>
                  </div>)}
              </div>
            </div>
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className={`${components.card.elevated} col-span-2 rounded-2xl border-0 overflow-hidden`}>
              <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">Gestión de contenidos</h3>
                <div className="flex items-center gap-2">
                  <button className="px-4 py-2 text-sm rounded-lg border border-gray-200 hover:bg-gray-50">
                    Nuevo
                  </button>
                  <button className="px-4 py-2 text-sm rounded-lg text-white font-medium" style={{
                  background: gradients.hero
                }}>
                    Subir
                  </button>
                </div>
              </div>
              <div className="p-4 grid sm:grid-cols-2 gap-3">
                {[{
                icon: Video,
                t: 'Serie: Parábolas',
                s: '8 videos',
                c: brand.secondary
              }, {
                icon: FileText,
                t: 'PDF: Guía Maestros',
                s: '32 páginas',
                c: brand.accent
              }, {
                icon: UploadCloud,
                t: 'Taller: Manualidades',
                s: '3 módulos',
                c: brand.danger
              }, {
                icon: BookOpen,
                t: 'Plan de Clase',
                s: 'Domingo',
                c: brand.primary
              }].map((m, i) => (
                <motion.div 
                  key={i} 
                  className="p-4 rounded-xl border border-gray-200 hover:shadow-md transition-all duration-200 flex items-center gap-3"
                  whileHover={{ y: -2 }}
                >
                  <div 
                    className="size-12 rounded-xl flex items-center justify-center shadow-md"
                    style={{ background: gradients.hero }}
                  >
                    <m.icon className="size-6 text-white drop-shadow-sm" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-gray-900 truncate">{m.t}</p>
                    <p className="text-xs text-gray-500">{m.s}</p>
                  </div>
                </motion.div>
              ))}
              </div>
            </div>

            <div className={`${components.card.elevated} rounded-2xl border-0 overflow-hidden`}>
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">Usuarios y Roles</h3>
                  <div 
                    className="px-2 py-1 rounded-full text-xs font-bold text-white"
                    style={{ background: brand.accent }}
                  >
                    👥
                  </div>
                </div>
                <p className="text-sm text-gray-500">
                  Padres, maestras y tutores
                </p>
              </div>
              <div className="p-4 space-y-3">
                {[{
                role: 'Padres',
                count: 680,
                color: brand.primary
              }, {
                role: 'Maestras',
                count: 55,
                color: brand.accent
              }, {
                role: 'Tutores',
                count: 32,
                color: brand.danger
              }].map((r, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50">
                  <div className="flex items-center gap-3">
                    <Users className="size-5" style={{ color: r.color }} />
                    <span className="text-sm font-medium text-gray-900">{r.role}</span>
                  </div>
                  <span className="text-sm font-bold text-gray-900">{r.count}</span>
                </div>
              ))}
              <motion.button 
                className="w-full mt-4 px-4 py-3 text-sm rounded-xl text-white font-semibold"
                style={{ background: gradients.hero }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Crear usuario
              </motion.button>
              </div>
            </div>
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className={`${components.card.elevated} col-span-2 rounded-2xl border-0 overflow-hidden`}>
              <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <h3 className="text-lg font-semibold text-gray-900">Reportes</h3>
                  <div 
                    className="px-2 py-1 rounded-full text-xs font-bold text-white"
                    style={{ background: brand.accent }}
                  >
                    📊
                  </div>
                </div>
                <button className="px-4 py-2 text-sm rounded-lg border border-gray-200 hover:bg-gray-50">
                  Exportar
                </button>
              </div>
              <div className="p-4 grid sm:grid-cols-3 gap-3">
                {[{
                k: 'Asistencia por iglesia',
                v: '92%'
              }, {
                k: 'Participación de niños',
                v: '78%'
              }, {
                k: 'Desempeño de maestros',
                v: '8.7/10'
              }].map((r, i) => <div key={i} className="p-3 rounded-lg border border-slate-200">
                    <p className="text-xs text-slate-500">{r.k}</p>
                    <p className="text-xl font-semibold mt-1">{r.v}</p>
                  </div>)}
              </div>
            </div>

            <div className={`${components.card.elevated} rounded-2xl border-0 overflow-hidden`}>
              <div className="p-6 border-b border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900">Membresías y Pagos</h3>
                <p className="text-sm text-gray-500">
                  Control de planes y licencias
                </p>
              </div>
              <div className="p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Plan actual</span>
                  <span className="text-sm font-semibold">Pro Congregacional</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Licencias</span>
                  <span className="text-sm font-semibold">10 activas</span>
                </div>
                <motion.button 
                  className="w-full px-4 py-3 text-sm rounded-xl text-white font-semibold flex items-center justify-center gap-2"
                  style={{ background: gradients.hero }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <CreditCard className="size-4" />
                  Gestionar pagos
                </motion.button>
              </div>
            </div>
          </section>

          <footer className="text-xs text-gray-500 pt-8 pb-4 text-center">
            © {new Date().getFullYear()} Mastersteps. Construyendo pasos firmes en la fe.
          </footer>
        </main>
      </div>
    </div>;
};
function WhatsIcon(props: React.SVGProps<SVGSVGElement>) {
  return <MessageSquare {...props} />;
}