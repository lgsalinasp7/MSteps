"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, Video, Download, Award, CheckCircle2, Clock, MessageCircle, Play, FileText, Star, Bell, Home, Settings, BarChart3, Search, Plus } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { brand, gradients, components, utils } from '@/lib/design-system';
import { UnifiedDashboardLayout } from '@/components/shared/UnifiedDashboardLayout';
import { NavItem } from '@/components/shared/SidebarNav';

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

export function ParentDashboard() {
  const { state } = useAuth();
  const [active, setActive] = useState<string>('inicio');

  const sidebarItems: NavItem[] = [
    { label: 'Dashboard', icon: Home, active: active === 'inicio' },
    { label: 'Clases', icon: Calendar, active: active === 'clases' },
    { label: 'Progreso', icon: BarChart3, active: active === 'progreso', badge: childProgress.badges },
    { label: 'Materiales', icon: Download, active: active === 'materiales' },
    { label: 'Asistente IA', icon: MessageCircle, active: active === 'asistente' },
    { label: 'Configuración', icon: Settings, active: active === 'configuracion' },
  ];

  // Header Actions
  const headerActions = (
    <>
      <button className="px-4 py-2 bg-white border border-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-all duration-200 flex items-center gap-2">
        <Download className="size-4" />
        Descargar Progreso
      </button>
      <button className="px-6 py-3 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg flex items-center gap-2" style={{ backgroundColor: '#0B317D' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#083063'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#0B317D'}>
        <MessageCircle className="size-4" />
        Contactar Maestra
      </button>
    </>
  );

  // Filters
  const filters = (
    <>
      <div className="flex-1 relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 size-5" />
        <input 
          type="text"
          placeholder="Buscar clases, materiales, actividades..."
          className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:border-transparent"
          onFocus={(e) => { e.target.style.borderColor = '#0B317D'; e.target.style.boxShadow = '0 0 0 2px #0B317D40'; }}
          onBlur={(e) => { e.target.style.borderColor = '#d1d5db'; e.target.style.boxShadow = 'none'; }}
        />
      </div>
      <select className="px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2" onFocus={(e) => { e.target.style.borderColor = '#0B317D'; e.target.style.boxShadow = '0 0 0 2px #0B317D40'; }} onBlur={(e) => { e.target.style.borderColor = '#d1d5db'; e.target.style.boxShadow = 'none'; }}>
        <option>Todas las Clases</option>
        <option>Completadas</option>
        <option>Pendientes</option>
        <option>Favoritas</option>
      </select>
      <select className="px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2" onFocus={(e) => { e.target.style.borderColor = '#0B317D'; e.target.style.boxShadow = '0 0 0 2px #0B317D40'; }} onBlur={(e) => { e.target.style.borderColor = '#d1d5db'; e.target.style.boxShadow = 'none'; }}>
        <option>Este Mes</option>
        <option>Últimos 3 Meses</option>
        <option>Todo el Tiempo</option>
      </select>
    </>
  );

  return (
    <UnifiedDashboardLayout
      sidebarItems={sidebarItems}
      title={`Bienvenido, ${state.user?.name || 'Padre/Madre'}`}
      subtitle={`Dashboard de Padres - Acompaña el crecimiento espiritual de ${childProgress.name}`}
      headerActions={headerActions}
      filters={filters}
    >
      {active === 'inicio' && (
        <>
          {/* Tarjetas de estadísticas del progreso */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              {
                title: "Insignias Obtenidas",
                value: childProgress.badges,
                change: "+2 esta semana",
                changeType: "positive",
                icon: "🏆",
                color: "from-yellow-500 to-yellow-600",
                description: "Logros desbloqueados"
              },
              {
                title: "Clases Completadas", 
                value: childProgress.classesViewed,
                change: "92% progreso",
                changeType: "positive",
                icon: "📚",
                color: "from-blue-500 to-blue-600",
                description: "Este trimestre"
              },
              {
                title: "Tareas Realizadas",
                value: childProgress.tasksCompleted,
                change: "+3 esta semana",
                changeType: "positive", 
                icon: "✅",
                color: "from-blue-500 to-blue-600",
                description: "Actividades completadas"
              },
              {
                title: "Tiempo de Estudio",
                value: "24h",
                change: "+4h esta semana",
                changeType: "positive",
                icon: "⏰",
                color: "from-orange-500 to-orange-600",
                description: "Horas invertidas"
              }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`size-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-white text-xl shadow-md`}>
                    {stat.icon}
                  </div>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    stat.changeType === 'positive' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700'
                  }`}>
                    {stat.change}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
                <p className="text-sm font-medium text-gray-900 mb-1">{stat.title}</p>
                <p className="text-xs text-gray-500">{stat.description}</p>
              </motion.div>
            ))}
          </section>

          {/* Próxima clase y progreso */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Próxima Clase */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Próxima Clase Dominical</h3>
                  <p className="text-sm text-gray-600">{upcomingClass.date}</p>
                </div>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                  En 2 días
                </span>
              </div>
              <div className="aspect-video w-full rounded-xl bg-gradient-to-br from-blue-100 to-orange-100 flex items-center justify-center mb-4">
                <motion.button 
                  className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/90 shadow-lg hover:shadow-xl transition-all duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play className="size-5 text-blue-600" />
                  <span className="text-base font-semibold text-gray-900">{upcomingClass.title}</span>
                </motion.button>
              </div>
              <p className="text-sm text-gray-600 mb-4">{upcomingClass.topic}</p>
              <button className="w-full px-4 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-200">
                Conectarse a la Clase
              </button>
            </div>

            {/* Progreso del Niño */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Progreso de {childProgress.name}</h3>
                  <p className="text-sm text-gray-600">Rendimiento académico y espiritual</p>
                </div>
                <Award className="size-5 text-yellow-600" />
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Asistencia a Clases</span>
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: '92%', backgroundColor: '#0B317D' }}></div>
                    </div>
                    <span className="text-sm font-bold" style={{ color: '#0B317D' }}>92%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Participación</span>
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 rounded-full" style={{ width: '88%' }}></div>
                    </div>
                    <span className="text-sm font-bold text-blue-600">88%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Tareas Completadas</span>
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: '95%', backgroundColor: '#FFB33C' }}></div>
                    </div>
                    <span className="text-sm font-bold" style={{ color: '#FFB33C' }}>95%</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-xs text-gray-500 mb-2">Últimas insignias obtenidas:</p>
                  <div className="flex flex-wrap gap-2">
                    {childProgress.recentBadges.map((badge, i) => (
                      <span key={i} className="px-3 py-1 text-xs rounded-full bg-yellow-100 text-yellow-700 font-medium">
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Materiales y Asistente IA */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Materiales para Reforzar */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Materiales para Casa</h3>
                  <p className="text-sm text-gray-600">Recursos para reforzar el aprendizaje</p>
                </div>
                <Download className="size-5 text-gray-400" />
              </div>
              <div className="space-y-4">
                {materials.map((material, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 hover:shadow-md transition-all duration-200 cursor-pointer">
                    <div className="size-12 rounded-xl bg-gradient-to-br from-blue-100 to-orange-100 flex items-center justify-center shadow-md">
                      <material.icon className="size-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-gray-900">{material.title}</p>
                      <p className="text-xs text-gray-600">{material.duration || material.pages || material.questions}</p>
                    </div>
                    <button className="px-3 py-1 text-xs font-medium rounded-lg bg-blue-100 text-blue-700 hover:bg-blue-200 transition-colors">
                      {material.type === 'video' ? 'Ver' : material.type === 'pdf' ? 'Descargar' : 'Jugar'}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Asistente IA */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Asistente IA</h3>
                  <p className="text-sm text-gray-600">Consejos personalizados para el hogar</p>
                </div>
                <MessageCircle className="size-5" style={{ color: '#0B317D' }} />
              </div>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-blue-50 border border-blue-200">
                  <div className="flex items-start gap-3">
                    <div className="size-8 rounded-full flex items-center justify-center text-white font-bold text-xs" style={{ backgroundColor: '#0B317D' }}>IA</div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-700">"¿Cómo puedo ayudar a {childProgress.name} a memorizar versículos bíblicos de manera divertida?"</p>
                      <button className="text-xs mt-2 font-medium hover:opacity-80" style={{ color: '#0B317D' }}>Ver respuesta completa →</button>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    "Actividades para el tiempo en familia",
                    "Cómo reforzar los valores aprendidos",
                    "Ideas para devocionales familiares"
                  ].map((suggestion, i) => (
                    <button key={i} className="w-full p-3 text-left rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                      <p className="text-sm text-gray-700">{suggestion}</p>
                    </button>
                  ))}
                </div>
                <button className="w-full px-4 py-3 text-white font-semibold rounded-xl transition-all duration-200" style={{ backgroundColor: '#0B317D' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#083063'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#0B317D'}>
                  Hacer una Pregunta
                </button>
              </div>
            </div>
          </section>

          {/* Actividades recientes */}
          <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-bold text-gray-900">Actividades Recientes</h3>
                <p className="text-sm text-gray-600">Últimas interacciones y logros de {childProgress.name}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { activity: "Completó la trivia de parábolas", time: "Hace 2 horas", score: "9/10", type: "quiz" },
                { activity: "Vio el video 'Los Talentos'", time: "Ayer", duration: "8 min", type: "video" },
                { activity: "Obtuvo insignia 'Buen Participante'", time: "Hace 2 días", badge: "🏆", type: "achievement" },
                { activity: "Participó en clase dominical", time: "Hace 3 días", participation: "Alta", type: "class" },
                { activity: "Completó actividad en casa", time: "Hace 4 días", task: "Dibujo de identidad", type: "homework" },
                { activity: "Memorizó versículo Juan 3:16", time: "Hace 5 días", verse: "✓", type: "memorization" }
              ].map((item, i) => (
                <div key={i} className="p-4 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start justify-between mb-2">
                    <div className={`size-8 rounded-lg flex items-center justify-center text-sm ${
                      item.type === 'achievement' ? 'bg-yellow-100 text-yellow-700' :
                      item.type === 'quiz' ? 'bg-blue-100 text-blue-700' :
                      item.type === 'video' ? 'bg-blue-100 text-blue-700' :
                      item.type === 'class' ? 'bg-orange-100 text-orange-700' :
                      item.type === 'homework' ? 'bg-orange-100 text-orange-700' :
                      'bg-indigo-100 text-indigo-700'
                    }`}>
                      {item.type === 'achievement' ? '🏆' :
                       item.type === 'quiz' ? '📝' :
                       item.type === 'video' ? '📹' :
                       item.type === 'class' ? '👥' :
                       item.type === 'homework' ? '📝' : '📖'}
                    </div>
                    <span className="text-xs text-gray-500">{item.time}</span>
                  </div>
                  <p className="text-sm font-medium text-gray-900 mb-1">{item.activity}</p>
                  <p className="text-xs text-gray-600">
                    {item.score || item.duration || item.badge || item.participation || item.task || item.verse}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </>
      )}

      {/* Otros contenidos según el estado activo */}
      {active !== 'inicio' && (
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 text-center">
          <div className="text-6xl mb-4">🚧</div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Sección en Construcción</h3>
          <p className="text-gray-600">Esta funcionalidad estará disponible próximamente.</p>
        </div>
      )}
    </UnifiedDashboardLayout>
  );
}