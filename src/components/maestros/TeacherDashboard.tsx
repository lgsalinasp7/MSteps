"use client";
import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Play, Download, FileText, Calendar, Users, CheckCircle2, Search, ClipboardList, Pencil, Send, Lightbulb, BrainCircuit, Video, NotebookPen, LayoutGrid, GraduationCap, ListChecks, Wand2, BellRing, Settings, Plus } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { brand, gradients, components, utils } from '@/lib/design-system';
import { UnifiedDashboardLayout } from '@/components/shared/UnifiedDashboardLayout';
import { NavItem } from '@/components/shared/SidebarNav';

type Kid = {
  id: string;
  name: string;
  age: number;
  present: boolean;
  note?: string;
};

const sampleKids: Kid[] = Array.from({ length: 15 }).map((_, i) => ({
  id: `k${i + 1}`,
  name: ['Ana', 'Luis', 'María', 'Pedro', 'Sofía', 'Diego', 'Lucía', 'Carlos', 'Valentina', 'Mateo', 'Camila', 'Andrés', 'Isabella', 'Julián', 'Daniela'][i],
  age: 6 + Math.floor(Math.random() * 3),
  present: false
}));

const sampleAgenda = [{
  when: 'Miércoles 5:00 PM',
  title: 'Video de capacitación',
  icon: Video,
  url: '#'
}, {
  when: 'Miércoles 5:30 PM',
  title: 'Notas clave del tema',
  icon: NotebookPen,
  url: '#'
}, {
  when: 'Miércoles 6:00 PM',
  title: 'Actividad sugerida: "Espejo de Identidad"',
  icon: Lightbulb,
  url: '#'
}];

const suggestions = [{
  type: 'Dinámica',
  title: 'Círculo de afirmaciones',
  detail: 'Cada niño dice algo positivo de otro.'
}, {
  type: 'Trivia',
  title: 'Quién soy en Cristo',
  detail: '5 preguntas rápidas; usa tarjetas de colores.'
}, {
  type: 'Taller',
  title: 'Escudo de identidad',
  detail: 'Dibuja símbolos que representen su fe.'
}];

const workshops = [{
  title: 'Taller creativo de manualidades',
  date: 'Próx. Jue 7:00 PM',
  link: '#'
}, {
  title: 'Reunión de maestras mensual',
  date: 'Próx. Vie 6:30 PM',
  link: '#'
}, {
  title: 'Capacitación: Juegos con propósito',
  date: 'Próx. Sáb 10:00 AM',
  link: '#'
}];

export const TeacherDashboard: React.FC = () => {
  const { state } = useAuth();
  const [kids, setKids] = useState<Kid[]>(sampleKids);
  const presentCount = useMemo(() => kids.filter(k => k.present).length, [kids]);
  const [active, setActive] = useState<string>('panel');

  const sidebarItems: NavItem[] = [
    { label: 'Dashboard', icon: LayoutGrid, active: active === 'panel' },
    { label: 'Mis Clases', icon: BookOpen, active: active === 'clase' },
    { label: 'Nueva Clase', icon: Calendar, active: active === 'agenda' },
    { label: 'Lista y Asistencia', icon: ListChecks, active: active === 'asistencia' },
    { label: 'Herramientas IA', icon: Wand2, active: active === 'herramientas' },
    { label: 'Notificaciones', icon: BellRing, active: active === 'notificaciones', badge: 3 },
    { label: 'Materiales', icon: GraduationCap, active: active === 'recursos' },
    { label: 'Configuración', icon: Settings, active: active === 'ajustes' },
  ];

  const togglePresent = (id: string) => setKids(prev => prev.map(k => k.id === id ? { ...k, present: !k.present } : k));
  const updateNote = (id: string, note: string) => setKids(prev => prev.map(k => k.id === id ? { ...k, note } : k));

  // Header Actions
  const headerActions = (
    <>
      <button className="px-4 py-2 bg-white border border-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-all duration-200 flex items-center gap-2">
        <Download className="size-4" />
        Exportar Lista
      </button>
      <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-200 shadow-lg flex items-center gap-2">
        <Plus className="size-4" />
        Nueva Actividad
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
          placeholder="Buscar estudiantes, actividades..."
          className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
        />
      </div>
      <select className="px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-orange-500">
        <option>Todos los Grupos</option>
        <option>6-8 años</option>
        <option>9-11 años</option>
        <option>12-14 años</option>
      </select>
      <select className="px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-orange-500">
        <option>Esta Semana</option>
        <option>Este Mes</option>
        <option>Todo el Tiempo</option>
      </select>
    </>
  );

  return (
    <UnifiedDashboardLayout
      sidebarItems={sidebarItems}
      title={`Bienvenida, ${state.user?.name || 'Maestra'}`}
      subtitle="Dashboard de Maestros - Gestiona tus clases y estudiantes de manera efectiva"
      headerActions={headerActions}
      filters={filters}
    >
      {active === 'panel' && (
        <>
          {/* Tarjetas de estadísticas */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
            {[
              {
                title: "Estudiantes Activos",
                value: kids.length,
                change: "+2",
                changeType: "positive",
                icon: "👥",
                color: "from-orange-500 to-orange-600",
                description: "En tu grupo principal"
              },
              {
                title: "Asistencia Hoy", 
                value: presentCount,
                change: `${Math.round((presentCount / kids.length) * 100)}%`,
                changeType: "positive",
                icon: "✅",
                color: "from-green-500 to-green-600",
                description: "Estudiantes presentes"
              },
              {
                title: "Clases Completadas",
                value: "12",
                change: "+1",
                changeType: "positive", 
                icon: "📚",
                color: "from-blue-500 to-blue-600",
                description: "Este mes"
              },
              {
                title: "Talleres Pendientes",
                value: "3",
                change: "Próximamente",
                changeType: "neutral",
                icon: "🎨",
                color: "from-purple-500 to-purple-600",
                description: "Esta semana"
              }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`size-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-white text-xl shadow-md`}>
                    {stat.icon}
                  </div>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    stat.changeType === 'positive' ? 'bg-green-100 text-green-700' : 
                    stat.changeType === 'negative' ? 'bg-red-100 text-red-700' :
                    'bg-gray-100 text-gray-700'
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

          {/* Sección de clases y actividades */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Próxima Clase */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Próxima Clase</h3>
                  <p className="text-sm text-gray-600">Domingo, 10:00 AM</p>
                </div>
                <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs font-medium rounded-full">
                  En 2 días
                </span>
              </div>
              <div className="aspect-video w-full rounded-xl bg-gradient-to-br from-orange-100 to-blue-100 flex items-center justify-center mb-4">
                <motion.button 
                  className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/90 shadow-lg hover:shadow-xl transition-all duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play className="size-5 text-orange-600" />
                  <span className="text-base font-semibold text-gray-900">Mi identidad en Cristo (12 min)</span>
                </motion.button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <button className="p-3 rounded-xl border border-gray-200 hover:shadow-md transition-all duration-200 flex items-center gap-2 text-sm font-medium">
                  <Download className="size-4 text-blue-600" />
                  Material PDF
                </button>
                <button className="p-3 rounded-xl border border-gray-200 hover:shadow-md transition-all duration-200 flex items-center gap-2 text-sm font-medium">
                  <FileText className="size-4 text-green-600" />
                  Guía de Enseñanza
                </button>
              </div>
            </div>

            {/* Herramientas IA */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Herramientas IA</h3>
                  <p className="text-sm text-gray-600">Actividades sugeridas para hoy</p>
                </div>
                <Wand2 className="size-5 text-purple-600" />
              </div>
              <div className="space-y-3">
                {suggestions.map((s, i) => (
                  <div key={i} className="p-4 rounded-xl border border-gray-200 hover:shadow-md transition-all duration-200">
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                      {s.type === 'Dinámica' ? <Lightbulb className="size-4 text-orange-500" /> : <BrainCircuit className="size-4 text-purple-500" />}
                      {s.type}
                    </div>
                    <p className="text-sm font-semibold text-gray-900 mb-1">{s.title}</p>
                    <p className="text-xs text-gray-600">{s.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Lista de estudiantes resumida */}
          <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-bold text-gray-900">Estudiantes Recientes</h3>
                <p className="text-sm text-gray-600">Últimas interacciones y progreso</p>
              </div>
              <button 
                onClick={() => setActive('asistencia')}
                className="px-4 py-2 bg-orange-100 text-orange-700 text-sm font-medium rounded-lg hover:bg-orange-200 transition-colors"
              >
                Ver Lista Completa
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {kids.slice(0, 6).map(k => (
                <div key={k.id} className="p-4 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <p className="text-sm font-medium text-gray-900">{k.name}</p>
                      <p className="text-xs text-gray-500">Edad: {k.age}</p>
                    </div>
                    <div className={`size-3 rounded-full ${k.present ? 'bg-green-400' : 'bg-gray-300'}`}></div>
                  </div>
                  <p className="text-xs text-gray-600">Última actividad: Hace 2 días</p>
                </div>
              ))}
            </div>
          </section>
        </>
      )}

      {active === 'asistencia' && (
        <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900">Lista de Asistencia</h3>
              <p className="text-sm text-gray-600">Grupo: 6-8 años • Asistencia: {presentCount}/{kids.length}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {kids.map(k => (
              <div key={k.id} className="p-4 rounded-xl border border-gray-200 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-900">{k.name}</p>
                    <p className="text-xs text-gray-500">Edad: {k.age}</p>
                  </div>
                  <button 
                    onClick={() => togglePresent(k.id)} 
                    className={`px-3 py-1 text-xs rounded-full border transition-colors ${
                      k.present ? 'bg-green-100 text-green-700 border-green-200' : 'hover:bg-gray-50 text-gray-700 border-gray-200'
                    }`}
                  >
                    {k.present ? 'Presente' : 'Marcar'}
                  </button>
                </div>
                <div>
                  <label className="text-xs text-gray-500 flex items-center gap-1 mb-1">
                    <Pencil className="size-3" /> Observaciones
                  </label>
                  <input 
                    value={k.note ?? ''} 
                    onChange={e => updateNote(k.id, e.target.value)} 
                    placeholder="Ej: participativo hoy, necesita apoyo en lectura"
                    className="w-full text-xs px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Otros contenidos según el estado activo */}
      {active !== 'panel' && active !== 'asistencia' && (
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 text-center">
          <div className="text-6xl mb-4">🚧</div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Sección en Construcción</h3>
          <p className="text-gray-600">Esta funcionalidad estará disponible próximamente.</p>
        </div>
      )}
    </UnifiedDashboardLayout>
  );
};