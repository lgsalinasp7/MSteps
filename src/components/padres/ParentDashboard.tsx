"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, Video, Download, Award, CheckCircle2, Clock, MessageCircle, Play, FileText, Star, Bell, Search, Home, User, Settings, BarChart3 } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import Link from 'next/link';

const brand = {
  blue: '#0e5fac',
  orange: '#f9b43e',
  rose: '#d04a5c',
  lightBlue: '#10a8f7'
};

const card = 'rounded-xl bg-white shadow-sm border border-slate-200/70 overflow-hidden';
const gradient = (from: string, to: string) => `bg-[linear-gradient(135deg,${from}20,${to}20)]`;

const childProgress = {
  name: 'Sofía',
  badges: 5,
  classesViewed: 12,
  tasksCompleted: 8,
  recentBadges: ['Buen Participante', 'Memoriza Versículos', 'Asistencia Perfecta']
};

const upcomingClass = {
  title: 'Mi mundo creativo',
  date: 'Domingo, 10:00 AM',
  topic: 'Descubriendo los dones que Dios me dio',
  link: 'https://meet.mastersteps.com/clase-creativa'
};

const materials = [
  { icon: Video, title: 'Video: Los Talentos', duration: '8 min', type: 'video', color: brand.lightBlue },
  { icon: FileText, title: 'Guía: Actividades en Casa', pages: '4 páginas', type: 'pdf', color: brand.orange },
  { icon: Star, title: 'Trivia: Parábolas Bíblicas', questions: '10 preguntas', type: 'quiz', color: brand.rose }
];

export function ParentDashboard() {
  const { logout } = useAuth();
  const [active, setActive] = useState<string>('inicio');
  const [menuOpen, setMenuOpen] = useState(false);

  const sidebar = [
    { id: 'inicio', label: 'Inicio', icon: Home },
    { id: 'clases', label: 'Clases', icon: Calendar },
    { id: 'progreso', label: 'Progreso', icon: BarChart3 },
    { id: 'materiales', label: 'Materiales', icon: Download },
    { id: 'asistente', label: 'Asistente IA', icon: MessageCircle },
    { id: 'configuracion', label: 'Configuración', icon: Settings }
  ] as const;

  return (
    <div className="min-h-screen w-full bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center gap-3">
          <div className={`size-9 rounded-md ${gradient(brand.blue, brand.lightBlue)} flex items-center justify-center`}>
            <BookOpen className="size-5" color={brand.blue} />
          </div>
          <div className="flex-1">
            <h1 className="text-lg font-semibold leading-tight">Mastersteps • Panel de Padres</h1>
            <p className="text-xs text-slate-500">Acompañando el crecimiento espiritual de tu familia</p>
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
            <div className="relative">
              <button onClick={() => setMenuOpen(!menuOpen)} className="flex items-center gap-2 px-2 py-1 rounded-md border border-slate-200 hover:bg-slate-50">
                <div className={`size-8 rounded-full ${gradient(brand.orange, brand.rose)} flex items-center justify-center`}>
                  <span className="text-sm font-semibold text-slate-800">MF</span>
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

      <div className="mx-auto max-w-7xl px-4 py-6 grid grid-cols-12 gap-6">
        <aside className="col-span-12 md:col-span-3 lg:col-span-2">
          <nav className={card}>
            <div className="p-3 border-b border-slate-200/70">
              <span className="text-xs font-medium text-slate-500">Navegación</span>
            </div>
            <ul className="p-2">
              {sidebar.map(item => (
                <li key={item.id}>
                  <button 
                    onClick={() => setActive(item.id)} 
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm hover:bg-slate-50 ${active === item.id ? 'bg-slate-50 border border-slate-200' : 'text-slate-700'}`}
                  >
                    <item.icon className="size-4" />
                    <span className="flex-1 truncate">{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <main className="col-span-12 md:col-span-9 lg:col-span-10 space-y-6">
          {active === 'inicio' && (
            <>
              <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className={`${card} col-span-2`}>
                  <div className="p-4 flex items-center justify-between border-b border-slate-200/70">
                    <h3 className="font-semibold">Próxima Clase Dominical</h3>
                    <Clock className="size-4 text-slate-500" />
                  </div>
                  <div className="p-4">
                    <div className="flex items-start gap-4">
                      <div className={`size-12 rounded-lg ${gradient(brand.blue, brand.lightBlue)} flex items-center justify-center`}>
                        <Play className="size-6" color={brand.blue} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg">{upcomingClass.title}</h4>
                        <p className="text-slate-600 mb-2">{upcomingClass.topic}</p>
                        <p className="text-sm text-slate-500 mb-3">{upcomingClass.date}</p>
                        <button className="px-4 py-2 rounded-lg text-white text-sm font-medium" style={{ background: brand.blue }}>
                          Conectarse a la clase
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={card}>
                  <div className="p-4 border-b border-slate-200/70">
                    <h3 className="font-semibold">Progreso de {childProgress.name}</h3>
                  </div>
                  <div className="p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">Insignias obtenidas</span>
                      <span className="flex items-center gap-1 text-sm font-semibold">
                        <Award className="size-4" color={brand.orange} />
                        {childProgress.badges}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">Clases vistas</span>
                      <span className="text-sm font-semibold">{childProgress.classesViewed}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">Tareas completadas</span>
                      <span className="flex items-center gap-1 text-sm font-semibold">
                        <CheckCircle2 className="size-4" color={brand.rose} />
                        {childProgress.tasksCompleted}
                      </span>
                    </div>
                  </div>
                </div>
              </section>

              <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className={`${card} col-span-2`}>
                  <div className="p-4 flex items-center justify-between border-b border-slate-200/70">
                    <h3 className="font-semibold">Materiales para Reforzar en Casa</h3>
                    <Download className="size-4 text-slate-500" />
                  </div>
                  <div className="p-4 grid gap-3">
                    {materials.map((material, i) => (
                      <motion.div 
                        key={i} 
                        className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 hover:bg-slate-50 cursor-pointer" 
                        initial={{ opacity: 0, y: 12 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ delay: i * 0.05 }}
                      >
                        <div className={`size-10 rounded-md ${gradient(material.color, '#ffffff')} flex items-center justify-center`}>
                          <material.icon className="size-5" color={material.color} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium truncate">{material.title}</p>
                          <p className="text-xs text-slate-500">{material.duration || material.pages || material.questions}</p>
                        </div>
                        <button className="px-3 py-1.5 text-xs rounded-md border border-slate-200 hover:bg-slate-100">
                          {material.type === 'video' ? 'Ver' : material.type === 'pdf' ? 'Descargar' : 'Jugar'}
                        </button>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className={card}>
                  <div className="p-4 border-b border-slate-200/70">
                    <h3 className="font-semibold">Asistente IA</h3>
                    <p className="text-xs text-slate-500">Pregunta sobre crianza y fe</p>
                  </div>
                  <div className="p-4">
                    <div className="space-y-3 mb-3">
                      <div className="text-xs text-slate-500 bg-slate-50 p-2 rounded-lg">
                        "¿Cómo puedo ayudar a mi hijo a memorizar versículos?"
                      </div>
                      <div className="text-xs bg-blue-50 p-2 rounded-lg">
                        Te sugiero crear rutinas divertidas como canciones o juegos de memoria...
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <input placeholder="Escribe tu pregunta..." className="flex-1 px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                      <button className="px-3 py-2 rounded-lg text-white text-sm" style={{ background: brand.lightBlue }}>
                        <MessageCircle className="size-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </section>

              <section className={card}>
                <div className="p-4 border-b border-slate-200/70">
                  <h3 className="font-semibold">Recordatorios de la Semana</h3>
                </div>
                <div className="p-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {[
                    { day: 'Lunes', activity: 'Repasar versículo semanal', time: '7:00 PM' },
                    { day: 'Miércoles', activity: 'Actividad familiar', time: '6:30 PM' },
                    { day: 'Viernes', activity: 'Última clase: "Sopa de letras bíblica"', time: '4:00 PM' },
                    { day: 'Domingo', activity: 'Clase dominical', time: '10:00 AM' }
                  ].map((reminder, i) => (
                    <div key={i} className="p-3 rounded-lg border border-slate-200">
                      <p className="text-xs font-medium text-slate-500 uppercase">{reminder.day}</p>
                      <p className="text-sm font-medium mt-1">{reminder.activity}</p>
                      <p className="text-xs text-slate-500 mt-1">{reminder.time}</p>
                    </div>
                  ))}
                </div>
              </section>
            </>
          )}

          {active === 'clases' && (
            <section className={card}>
              <div className="p-4 border-b border-slate-200/70">
                <h3 className="font-semibold">Clases Programadas</h3>
              </div>
              <div className="p-4">
                <p className="text-sm text-slate-600">Contenido de clases próximamente...</p>
              </div>
            </section>
          )}

          {active === 'progreso' && (
            <section className={card}>
              <div className="p-4 border-b border-slate-200/70">
                <h3 className="font-semibold">Progreso Detallado</h3>
              </div>
              <div className="p-4">
                <p className="text-sm text-slate-600">Gráficos de progreso próximamente...</p>
              </div>
            </section>
          )}

          {active === 'materiales' && (
            <section className={card}>
              <div className="p-4 border-b border-slate-200/70">
                <h3 className="font-semibold">Biblioteca de Materiales</h3>
              </div>
              <div className="p-4">
                <p className="text-sm text-slate-600">Catálogo completo próximamente...</p>
              </div>
            </section>
          )}

          {active === 'asistente' && (
            <section className={card}>
              <div className="p-4 border-b border-slate-200/70">
                <h3 className="font-semibold">Asistente IA para Padres</h3>
              </div>
              <div className="p-4">
                <p className="text-sm text-slate-600">Chat con IA próximamente...</p>
              </div>
            </section>
          )}

          {active === 'configuracion' && (
            <section className={card}>
              <div className="p-4 border-b border-slate-200/70">
                <h3 className="font-semibold">Configuración</h3>
              </div>
              <div className="p-4">
                <p className="text-sm text-slate-600">Ajustes próximamente...</p>
              </div>
            </section>
          )}

          <footer className="text-xs text-slate-500 pt-2 pb-8">
            © {new Date().getFullYear()} Mastersteps • Padres. Acompañando el crecimiento espiritual.
          </footer>
        </main>
      </div>
    </div>
  );
}
