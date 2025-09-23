import React, { useState, useRef, useEffect, useMemo } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useDashboardData } from '@/hooks/useDashboardData';
import { motion } from 'framer-motion';
import { Church, Users, BookOpen, Calendar, UploadCloud, FileText, Video, Settings, BarChart3, CreditCard, Bell, Mail, MessageSquare, Plus, Search, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { HeaderBar } from '@/components/shared/HeaderBar';
import { SidebarNav, type NavItem } from '@/components/shared/SidebarNav';
import { StatsCards } from '@/components/shared/StatsCards';
import { AttendanceArea, ParticipationBars } from '@/components/shared/Charts';
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
const brand = {
  blue: '#0e5fac',
  orange: '#f9b43e',
  rose: '#d04a5c',
  lightBlue: '#10a8f7'
};
const card = 'rounded-xl bg-white shadow-sm border border-slate-200/70 overflow-hidden';
const gradient = (from: string, to: string) => `bg-[linear-gradient(135deg,${from}20,${to}20)]`;
// Datos dinámicos del dashboard via API
const quickActions = [{
  icon: UploadCloud,
  label: 'Subir material',
  color: brand.blue
}, {
  icon: Video,
  label: 'Nuevo video',
  color: brand.lightBlue
}, {
  icon: FileText,
  label: 'Añadir PDF',
  color: brand.orange
}, {
  icon: Calendar,
  label: 'Programar clase',
  color: brand.rose
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
      'Niños inscritos': brand.blue,
      'Iglesias activas': brand.orange,
      'Clases esta semana': brand.rose,
      'Licencias congregacionales': brand.lightBlue,
    };
    return stats.map((s) => ({
      ...s,
      icon: iconByLabel[s.label] ?? Users,
      color: colorByLabel[s.label] ?? brand.blue,
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
          <StatsCards items={(loading ? Array.from({ length: 4 }).map((_, i) => ({ label: '—', value: '—', icon: Users, color: brand.blue })) : uiStats)} cardClass={card} gradient={gradient} />

          <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className={`${card} col-span-2`}>
              <div className="p-4 flex items-center justify-between border-b border-slate-200/70">
                <h3 className="font-semibold">Asistencia semanal</h3>
                <span className="text-xs text-slate-500">Últimos 7 días</span>
              </div>
              <div className="p-2 h-64"><AttendanceArea data={asistencia} color={brand.lightBlue} /></div>
            </div>

            <div className={`${card}`}>
              <div className="p-4 flex items-center justify-between border-b border-slate-200/70">
                <h3 className="font-semibold">Acciones rápidas</h3>
                <Plus className="size-4 text-slate-500" />
              </div>
              <div className="p-4 grid grid-cols-2 gap-3">
                {quickActions.map((a, i) => <button key={i} className={`flex items-center gap-2 p-3 rounded-lg border border-slate-200 hover:shadow-sm ${gradient(a.color, '#ffffff')}`}>
                    <a.icon className="size-5" color={a.color} />
                    <span className="text-sm font-medium">{a.label}</span>
                  </button>)}
              </div>
            </div>
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className={`${card} col-span-2`}>
              <div className="p-4 flex items-center justify-between border-b border-slate-200/70">
                <h3 className="font-semibold">Participación por iglesia</h3>
                <span className="text-xs text-slate-500">Niños vs. Maestros</span>
              </div>
              <div className="p-2 h-64"><ParticipationBars data={participacion} colorA={brand.blue} colorB={brand.orange} /></div>
            </div>

            <div className={`${card}`}>
              <div className="p-4 border-b border-slate-200/70">
                <h3 className="font-semibold">Automatizaciones</h3>
                <p className="text-xs text-slate-500">
                  Programar recordatorios y enlaces
                </p>
              </div>
              <div className="p-4 space-y-3">
                {[{
                icon: WhatsIcon,
                title: 'WhatsApp: Recordatorio clase',
                time: 'Sáb 9:00 AM',
                color: brand.rose
              }, {
                icon: Mail,
                title: 'Email: Enviar materiales',
                time: 'Vie 7:00 PM',
                color: brand.blue
              }, {
                icon: Calendar,
                title: 'Calendario: Clase semanal',
                time: 'Dom 10:00 AM',
                color: brand.orange
              }].map((item, i) => <div key={i} className="flex items-center justify-between p-3 rounded-lg border border-slate-200 hover:bg-slate-50">
                    <div className="flex items-center gap-3">
                      <div className={`size-9 rounded-md ${gradient(item.color, '#ffffff')} flex items-center justify-center`}>
                        <item.icon className="size-4" color={item.color} />
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
            <div className={`${card} col-span-2`}>
              <div className="p-4 border-b border-slate-200/70 flex items-center justify-between">
                <h3 className="font-semibold">Gestión de contenidos</h3>
                <div className="flex items-center gap-2">
                  <button className="px-3 py-1.5 text-sm rounded-md border border-slate-200">
                    Nuevo
                  </button>
                  <button className="px-3 py-1.5 text-sm rounded-md text-white" style={{
                  background: brand.blue
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
                c: brand.lightBlue
              }, {
                icon: FileText,
                t: 'PDF: Guía Maestros',
                s: '32 páginas',
                c: brand.orange
              }, {
                icon: UploadCloud,
                t: 'Taller: Manualidades',
                s: '3 módulos',
                c: brand.rose
              }, {
                icon: BookOpen,
                t: 'Plan de Clase',
                s: 'Domingo',
                c: brand.blue
              }].map((m, i) => <div key={i} className="p-3 rounded-lg border border-slate-200 hover:bg-slate-50 flex items-center gap-3">
                    <div className={`size-10 rounded-md ${gradient(m.c, '#ffffff')} flex items-center justify-center`}>
                      <m.icon className="size-5" color={m.c} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-medium truncate">{m.t}</p>
                      <p className="text-xs text-slate-500">{m.s}</p>
                    </div>
                  </div>)}
              </div>
            </div>

            <div className={`${card}`}>
              <div className="p-4 border-b border-slate-200/70">
                <h3 className="font-semibold">Usuarios y Roles</h3>
                <p className="text-xs text-slate-500">
                  Padres, maestras y tutores
                </p>
              </div>
              <div className="p-4 space-y-3">
                {[{
                role: 'Padres',
                count: 680,
                color: brand.blue
              }, {
                role: 'Maestras',
                count: 55,
                color: brand.orange
              }, {
                role: 'Tutores',
                count: 32,
                color: brand.rose
              }].map((r, i) => <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Users className="size-5" color={r.color} />
                      <span className="text-sm">{r.role}</span>
                    </div>
                    <span className="text-sm font-semibold">{r.count}</span>
                  </div>)}
                <button className="w-full mt-2 px-3 py-2 text-sm rounded-md text-white" style={{
                background: brand.rose
              }}>
                  Crear usuario
                </button>
              </div>
            </div>
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className={`${card} col-span-2`}>
              <div className="p-4 border-b border-slate-200/70 flex items-center justify-between">
                <h3 className="font-semibold">Reportes</h3>
                <button className="px-3 py-1.5 text-sm rounded-md border border-slate-200">
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

            <div className={`${card}`}>
              <div className="p-4 border-b border-slate-200/70">
                <h3 className="font-semibold">Membresías y Pagos</h3>
                <p className="text-xs text-slate-500">
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
                <button className="w-full px-3 py-2 text-sm rounded-md text-white flex items-center justify-center gap-2" style={{
                background: brand.blue
              }}>
                  <CreditCard className="size-4" />
                  Gestionar pagos
                </button>
              </div>
            </div>
          </section>

          <footer className="text-xs text-slate-500 pt-2 pb-8">
            © {new Date().getFullYear()} Mastersteps. Construyendo pasos firmes en la fe.
          </footer>
        </main>
      </div>
    </div>;
};
function WhatsIcon(props: React.SVGProps<SVGSVGElement>) {
  return <MessageSquare {...props} />;
}