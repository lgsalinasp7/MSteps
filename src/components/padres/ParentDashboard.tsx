"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, Video, Download, Award, CheckCircle2, Clock, MessageCircle, Play, FileText, Star, Bell, Search, Home, User, Settings, BarChart3 } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import Link from 'next/link';
import { brand, gradients, components, utils } from '@/lib/design-system';
import { HeaderBar } from '@/components/shared/HeaderBar';
import { SidebarNav, NavItem } from '@/components/shared/SidebarNav';

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
  { icon: Video, title: 'Video: Los Talentos', duration: '8 min', type: 'video', color: brand.secondary },
  { icon: FileText, title: 'Guía: Actividades en Casa', pages: '4 páginas', type: 'pdf', color: brand.accent },
  { icon: Star, title: 'Trivia: Parábolas Bíblicas', questions: '10 preguntas', type: 'quiz', color: brand.danger }
];

const sidebarNavItems: NavItem[] = [
  { id: 'inicio', label: 'Inicio', icon: Home, href: '#inicio' },
  { id: 'clases', label: 'Clases', icon: Calendar, href: '#clases' },
  { id: 'progreso', label: 'Progreso', icon: BarChart3, href: '#progreso' },
  { id: 'materiales', label: 'Materiales', icon: Download, href: '#materiales' },
  { id: 'asistente', label: 'Asistente IA', icon: MessageCircle, href: '#asistente' },
  { id: 'configuracion', label: 'Configuración', icon: Settings, href: '#configuracion' },
];

export function ParentDashboard() {
  const { logout } = useAuth();
  const [active, setActive] = useState<string>('inicio');

  return (
    <div className="min-h-screen w-full bg-gray-50 text-gray-900">
      <HeaderBar title="Mastersteps • Padres" subtitle="Acompaña el crecimiento espiritual de tu hijo" />
      
      <div className="mx-auto max-w-7xl px-4 py-6 grid grid-cols-12 gap-6">
        <aside className="col-span-12 md:col-span-3 lg:col-span-2">
          <SidebarNav items={sidebarNavItems} />
        </aside>

        <main className="col-span-12 md:col-span-9 lg:col-span-10 space-y-6">
          {active === 'inicio' && (
            <>
              {/* Próxima Clase */}
              <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className={`${components.card.elevated} col-span-2 rounded-2xl border-0 overflow-hidden`}>
                  <div className="p-6 flex items-center justify-between border-b border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900">Próxima Clase Dominical</h3>
                    <Clock className="size-5 text-gray-400" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <div 
                        className="size-16 rounded-2xl flex items-center justify-center shadow-lg"
                        style={{ background: gradients.hero }}
                      >
                        <Play className="size-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-2xl font-bold text-gray-900 mb-2">{upcomingClass.title}</h4>
                        <p className="text-gray-600 mb-3 text-lg">{upcomingClass.topic}</p>
                        <p className="text-sm text-gray-500 mb-4">{upcomingClass.date}</p>
                        <motion.button 
                          className="px-6 py-3 rounded-xl text-white font-semibold shadow-lg"
                          style={{ background: gradients.hero }}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Conectarse a la clase
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Progreso del niño */}
                <div className={`${components.card.elevated} rounded-2xl border-0 overflow-hidden`}>
                  <div className="p-6 border-b border-gray-100">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-bold text-gray-900">Progreso de {childProgress.name}</h3>
                      <div 
                        className="px-2 py-1 rounded-full text-xs font-bold text-white"
                        style={{ background: brand.accent }}
                      >
                        🏆
                      </div>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Insignias obtenidas</span>
                      <span className="flex items-center gap-2 text-lg font-bold">
                        <Award className="size-5" style={{ color: brand.accent }} />
                        {childProgress.badges}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Clases vistas</span>
                      <span className="text-lg font-bold">{childProgress.classesViewed}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Tareas completadas</span>
                      <span className="flex items-center gap-2 text-lg font-bold">
                        <CheckCircle2 className="size-5" style={{ color: brand.danger }} />
                        {childProgress.tasksCompleted}
                      </span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Materiales para reforzar */}
              <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className={`${components.card.elevated} col-span-2 rounded-2xl border-0 overflow-hidden`}>
                  <div className="p-6 flex items-center justify-between border-b border-gray-100">
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl font-bold text-gray-900">Materiales para Reforzar en Casa</h3>
                      <div 
                        className="px-2 py-1 rounded-full text-xs font-bold text-white"
                        style={{ background: brand.accent }}
                      >
                        📚
                      </div>
                    </div>
                    <Download className="size-5 text-gray-400" />
                  </div>
                  <div className="p-6 grid gap-4">
                    {materials.map((material, i) => (
                      <motion.div 
                        key={i} 
                        className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 hover:shadow-md transition-all duration-200 cursor-pointer"
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        whileHover={{ y: -2 }}
                      >
                        <div 
                          className="size-12 rounded-xl flex items-center justify-center shadow-md"
                          style={{ background: gradients.hero }}
                        >
                          <material.icon className="size-6 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-lg font-semibold text-gray-900 truncate">{material.title}</p>
                          <p className="text-sm text-gray-500">{material.duration || material.pages || material.questions}</p>
                        </div>
                        <motion.button 
                          className="px-4 py-2 rounded-lg text-sm font-medium border border-gray-200 hover:bg-gray-50"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {material.type === 'video' ? 'Ver' : material.type === 'pdf' ? 'Descargar' : 'Jugar'}
                        </motion.button>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Asistente IA */}
                <div className={`${components.card.elevated} rounded-2xl border-0 overflow-hidden`}>
                  <div className="p-6 border-b border-gray-100">
                    <h3 className="text-lg font-bold text-gray-900">Asistente IA</h3>
                    <p className="text-sm text-gray-500">Preguntas sobre la fe</p>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="p-4 rounded-xl" style={{ background: gradients.card }}>
                      <p className="text-sm text-gray-600 mb-2">¿Cómo puedo ayudar a mi hijo a memorizar versículos?</p>
                      <button className="text-sm font-medium" style={{ color: brand.primary }}>
                        Ver respuesta →
                      </button>
                    </div>
                    <div className="p-4 rounded-xl" style={{ background: gradients.card }}>
                      <p className="text-sm text-gray-600 mb-2">Actividades para el tiempo en familia</p>
                      <button className="text-sm font-medium" style={{ color: brand.primary }}>
                        Explorar →
                      </button>
                    </div>
                    <motion.button 
                      className="w-full p-4 rounded-xl text-white font-semibold"
                      style={{ background: gradients.hero }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Hacer una pregunta
                    </motion.button>
                  </div>
                </div>
              </section>

              {/* Recordatorios */}
              <section className={`${components.card.elevated} rounded-2xl border-0 overflow-hidden`}>
                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-bold text-gray-900">Recordatorios de la Semana</h3>
                    <div 
                      className="px-2 py-1 rounded-full text-xs font-bold text-white"
                      style={{ background: brand.accent }}
                    >
                      ⏰
                    </div>
                  </div>
                </div>
                <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { day: 'Lunes', task: 'Revisar materiales de la clase', time: '7:00 PM' },
                    { day: 'Miércoles', task: 'Actividad en familia', time: '6:30 PM' },
                    { day: 'Viernes', task: 'Preparar para el domingo', time: '8:00 PM' }
                  ].map((reminder, i) => (
                    <motion.div 
                      key={i}
                      className="p-4 rounded-xl border border-gray-200 hover:shadow-md transition-all duration-200"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="size-8 rounded-lg bg-gray-100 flex items-center justify-center">
                          <Bell className="size-4 text-gray-600" />
                        </div>
                        <span className="font-semibold text-gray-900">{reminder.day}</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-1">{reminder.task}</p>
                      <p className="text-xs text-gray-500">{reminder.time}</p>
                    </motion.div>
                  ))}
                </div>
              </section>
            </>
          )}

          <footer className="text-xs text-gray-500 pt-8 pb-4 text-center">
            © {new Date().getFullYear()} Mastersteps • Padres. Construyendo pasos firmes en la fe.
          </footer>
        </main>
      </div>
    </div>
  );
}