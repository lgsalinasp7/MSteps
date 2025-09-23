import React from 'react';
import { motion } from 'framer-motion';
import { Church, Users, BookOpen, Calendar, UploadCloud, FileText, Video, Settings, BarChart3, CreditCard, Bell, Mail, MessageSquare, Plus, Search, CheckCircle2 } from 'lucide-react';
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
const brand = {
  blue: '#0e5fac',
  orange: '#f9b43e',
  rose: '#d04a5c',
  lightBlue: '#10a8f7'
};
const card = 'rounded-xl bg-white shadow-sm border border-slate-200/70 overflow-hidden';
const gradient = (from: string, to: string) => `bg-[linear-gradient(135deg,${from}20,${to}20)]`;
const stats = [{
  label: 'Niños inscritos',
  value: '1,200',
  icon: Users,
  color: brand.blue
}, {
  label: 'Iglesias activas',
  value: '25',
  icon: Church,
  color: brand.orange
}, {
  label: 'Clases esta semana',
  value: '5',
  icon: BookOpen,
  color: brand.rose
}, {
  label: 'Licencias congregacionales',
  value: '10',
  icon: Settings,
  color: brand.lightBlue
}] as any[];
const asistenciaData = [{
  name: 'Lun',
  valor: 120
}, {
  name: 'Mar',
  valor: 180
}, {
  name: 'Mié',
  valor: 140
}, {
  name: 'Jue',
  valor: 200
}, {
  name: 'Vie',
  valor: 160
}, {
  name: 'Sáb',
  valor: 220
}, {
  name: 'Dom',
  valor: 260
}] as any[];
const participacionData = [{
  name: 'Iglesia A',
  niños: 80,
  maestros: 12
}, {
  name: 'Iglesia B',
  niños: 65,
  maestros: 10
}, {
  name: 'Iglesia C',
  niños: 95,
  maestros: 14
}, {
  name: 'Iglesia D',
  niños: 55,
  maestros: 9
}] as any[];
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
  // @return
  return <div className="min-h-screen w-full bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur" style={{}}>
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center gap-3">
          <div className={`size-9 rounded-md ${gradient(brand.blue, brand.lightBlue)} flex items-center justify-center`}>
            <BookOpen className="size-5" color={brand.blue} />
          </div>
          <div className="flex-1">
            <h1 className="text-lg font-semibold leading-tight">
              Mastersteps • Administrador
            </h1>
            <p className="text-xs text-slate-500">
              Gestión central de clases, contenidos y automatizaciones
            </p>
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
            <div className="flex items-center gap-2">
              <div className={`size-8 rounded-full ${gradient(brand.orange, brand.rose)} flex items-center justify-center`}>
                <span className="text-sm font-semibold text-slate-800">AD</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-6 grid grid-cols-12 gap-6">
        <aside className="col-span-12 md:col-span-3 lg:col-span-2">
          <nav className={`${card}`}>
            <div className="p-3 border-b border-slate-200/70">
              <span className="text-xs font-medium text-slate-500">
                Navegación
              </span>
            </div>
            <ul className="p-2">
              {[{
              icon: BarChart3,
              label: 'Panel',
              active: true
            }, {
              icon: UploadCloud,
              label: 'Contenidos'
            }, {
              icon: Calendar,
              label: 'Automatizaciones'
            }, {
              icon: Users,
              label: 'Usuarios'
            }, {
              icon: BookOpen,
              label: 'Reportes'
            }, {
              icon: CreditCard,
              label: 'Membresías y Pagos'
            }, {
              icon: Settings,
              label: 'Configuración'
            }].map((i, idx) => <li key={idx}>
                  <button className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm hover:bg-slate-50 ${i.active ? 'bg-slate-50 border border-slate-200' : 'text-slate-700'}`}>
                    <i.icon className="size-4" />
                    {i.label}
                  </button>
                </li>)}
            </ul>
          </nav>
        </aside>

        <main className="col-span-12 md:col-span-9 lg:col-span-10 space-y-6">
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((s, i) => <motion.div key={i} className={`${card} p-4`} initial={{
            opacity: 0,
            y: 12
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: i * 0.05
          }}>
                <div className="flex items-center justify-between">
                  <div className={`size-10 rounded-md ${gradient(s.color, brand.lightBlue)} flex items-center justify-center`}>
                    <s.icon className="size-5" color={s.color} />
                  </div>
                  <CheckCircle2 className="size-5 text-emerald-500/80" />
                </div>
                <div className="mt-3">
                  <p className="text-xs text-slate-500">{s.label}</p>
                  <p className="text-2xl font-semibold">{s.value}</p>
                </div>
              </motion.div>)}
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className={`${card} col-span-2`}>
              <div className="p-4 flex items-center justify-between border-b border-slate-200/70">
                <h3 className="font-semibold">Asistencia semanal</h3>
                <span className="text-xs text-slate-500">Últimos 7 días</span>
              </div>
              <div className="p-2 h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={asistenciaData}>
                    <defs>
                      <linearGradient id="grad1" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor={brand.lightBlue} stopOpacity={0.6} />
                        <stop offset="100%" stopColor={brand.lightBlue} stopOpacity={0.05} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid stroke="#eef2f7" vertical={false} />
                    <XAxis dataKey="name" stroke="#94a3b8" />
                    <YAxis stroke="#94a3b8" />
                    <Tooltip />
                    <Area type="monotone" dataKey="valor" stroke={brand.lightBlue} fill="url(#grad1)" strokeWidth={2} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
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
              <div className="p-2 h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={participacionData}>
                    <CartesianGrid stroke="#eef2f7" vertical={false} />
                    <XAxis dataKey="name" stroke="#94a3b8" />
                    <YAxis stroke="#94a3b8" />
                    <Tooltip />
                    <Bar dataKey="niños" fill={brand.blue} radius={[6, 6, 0, 0]} />
                    <Bar dataKey="maestros" fill={brand.orange} radius={[6, 6, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
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