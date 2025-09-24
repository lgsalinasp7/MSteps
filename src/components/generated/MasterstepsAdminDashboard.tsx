import React, { useState, useRef, useEffect, useMemo } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useDashboardData } from '@/hooks/useDashboardData';
import { motion } from 'framer-motion';
import { Church, Users, BookOpen, Calendar, UploadCloud, FileText, Video, Settings, BarChart3, CreditCard, Bell, Mail, MessageSquare, Plus, Search, CheckCircle2, TrendingUp, LayoutGrid, List } from 'lucide-react';
import { UnifiedDashboardLayout } from '@/components/shared/UnifiedDashboardLayout';
import { NavItem } from '@/components/shared/SidebarNav';
import { AttendanceArea, ParticipationBars } from '@/components/shared/Charts';
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { brand, gradients, components, utils } from '@/lib/design-system';
import { useDashboardTranslations, useCommonTranslations, useErrorTranslations, useTranslations } from '@/hooks/useTranslations';

// @component: MasterstepsAdminDashboard
export const MasterstepsAdminDashboard: React.FC = () => {
  const { state } = useAuth();
  const { loading, error, stats, asistencia, participacion } = useDashboardData();
  const t = useDashboardTranslations();
  const common = useCommonTranslations();
  const errorT = useErrorTranslations();
  const nav = useTranslations('navigation');
  const filtersT = useTranslations('filters');

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

  if (loading) {
    const { DashboardSkeleton } = require('@/components/shared/Skeleton');
    return <DashboardSkeleton />;
  }
  if (error) return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 via-blue-300 to-orange-300">
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-red-200 text-center max-w-md">
        <div className="text-red-500 text-6xl mb-4">⚠️</div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{errorT('generic')}</h3>
        <p className="text-gray-600 mb-4">{errorT('loadingData')}</p>
        <p className="text-sm text-red-600 bg-red-50 p-3 rounded-lg">{error}</p>
        <button 
          onClick={() => window.location.reload()} 
          className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-medium"
        >
          {errorT('tryAgain')}
        </button>
          </div>
          </div>
  );

  const sidebarItems: NavItem[] = [
    { icon: BarChart3, label: nav('dashboard'), active: true },
    { icon: UploadCloud, label: nav('materials') },
    { icon: Calendar, label: nav('analytics') },
    { icon: Users, label: nav('users') },
    { icon: BookOpen, label: nav('reports') },
    { icon: CreditCard, label: nav('billing') },
    { icon: Settings, label: nav('settings') },
    { icon: MessageSquare, label: nav('aiTools') },
  ];

  // Header Actions
  const headerActions = (
    <>
      <button className="px-3 sm:px-4 py-2 bg-white border border-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-all duration-200 flex items-center gap-2 text-sm">
        <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        <span className="hidden sm:inline">{common('export')} Reporte</span>
        <span className="sm:hidden">{common('export')}</span>
      </button>
      <button className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-200 shadow-lg flex items-center gap-2 text-sm">
        <span className="text-lg">+</span>
        <span className="hidden sm:inline">Nueva {nav('schools')}</span>
        <span className="sm:hidden">Nueva</span>
      </button>
    </>
  );

  // Filters
  const filters = (
    <>
      <div className="flex-1 relative min-w-0">
        <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 size-4 sm:size-5" />
        <input
          type="text"
          placeholder="Buscar iglesias, usuarios, reportes..."
          className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2 sm:py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
        />
      </div>
      <select className="px-3 sm:px-4 py-2 sm:py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm min-w-0 flex-shrink-0">
        <option>{filtersT('all')} las {nav('schools')}</option>
        <option>{filtersT('active')}</option>
        <option>{filtersT('inactive')}</option>
        <option>{filtersT('recent')}</option>
      </select>
      <select className="px-3 sm:px-4 py-2 sm:py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm min-w-0 flex-shrink-0">
        <option>{filtersT('thisMonth')}</option>
        <option>{filtersT('lastThreeMonths')}</option>
        <option>{filtersT('thisYear')}</option>
        <option>{common('allTime')}</option>
      </select>
    </>
  );

  return (
    <UnifiedDashboardLayout
      sidebarItems={sidebarItems}
      title={`${common('welcome')}, ${state.user?.name || t('admin.title')}`}
      subtitle={t('admin.title')}
      headerActions={headerActions}
      filters={filters}
    >
      {/* Tarjetas de resumen administrativo */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
        {[
          {
            title: t('admin.totalStudents'),
            value: "2,847",
            change: "+12%",
            changeType: "positive",
            icon: "👥",
            color: "from-blue-500 to-blue-600",
            description: t('admin.studentsDescription')
          },
          {
            title: t('admin.activeChurches'), 
            value: "45",
            change: "+3",
            changeType: "positive",
            icon: "⛪",
            color: "from-green-500 to-green-600",
            description: t('admin.churchesDescription')
          },
          {
            title: t('admin.activeCourses'),
            value: "128",
            change: "+8",
            changeType: "positive", 
            icon: "📚",
            color: "from-orange-500 to-orange-600",
            description: t('admin.coursesDescription')
          },
          {
            title: t('admin.teachers'),
            value: "167",
            change: "+5%",
            changeType: "positive",
            icon: "🎓",
            color: "from-purple-500 to-purple-600",
            description: t('admin.teachersDescription')
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
              <div className={`size-10 sm:size-12 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-white text-lg sm:text-xl shadow-md`}>
                {stat.icon}
              </div>
              <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                stat.changeType === 'positive' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
              }`}>
                {stat.change}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
            <p className="text-xs sm:text-sm font-medium text-gray-900 mb-1 line-clamp-1">{stat.title}</p>
            <p className="text-xs text-gray-500 line-clamp-1">{stat.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Sección de gráficos y reportes */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
        {/* Gráfico de Asistencia */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900">Asistencia Semanal</h3>
              <p className="text-xs sm:text-sm text-gray-600">Participación de estudiantes</p>
            </div>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
              Últimos 7 días
            </span>
          </div>
          <div className="h-48 sm:h-64 bg-gradient-to-br from-blue-50 to-orange-50 rounded-xl flex items-center justify-center">
            <AttendanceArea data={asistencia} color={brand.secondary} />
          </div>
        </div>

        {/* Iglesias Más Activas */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-bold text-gray-900">Iglesias Más Activas</h3>
              <p className="text-sm text-gray-600">Ranking por participación</p>
            </div>
            <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
              Este mes
            </span>
          </div>
          <div className="space-y-4">
            {[
              { name: "Iglesia Central", students: 245, growth: "+15%" },
              { name: "Iglesia El Redentor", students: 198, growth: "+8%" },
              { name: "Iglesia Nueva Vida", students: 167, growth: "+12%" },
              { name: "Iglesia Betania", students: 134, growth: "+5%" },
              { name: "Iglesia Emanuel", students: 98, growth: "+18%" }
            ].map((iglesia, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50">
                <div className="flex items-center gap-3">
                  <div className="size-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-sm font-bold">
                    {i + 1}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{iglesia.name}</p>
                    <p className="text-xs text-gray-500">{iglesia.students} estudiantes</p>
                </div>
                </div>
                <span className="text-xs font-medium text-green-600">{iglesia.growth}</span>
              </div>
            ))}
          </div>
              </div>
            </div>

      {/* Sección de gestión rápida */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
        {/* Acciones Administrativas */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="size-10 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white">
              ⚡
            </div>
            <h3 className="text-base sm:text-lg font-bold text-gray-900">Acciones Rápidas</h3>
          </div>
          <div className="space-y-3">
            {[
              { icon: "⛪", label: "Registrar Nueva Iglesia", color: "from-blue-500 to-blue-600" },
              { icon: "👨‍🏫", label: "Aprobar Maestro", color: "from-green-500 to-green-600" },
              { icon: "📊", label: "Generar Reporte", color: "from-purple-500 to-purple-600" },
              { icon: "📧", label: "Enviar Comunicado", color: "from-orange-500 to-orange-600" }
            ].map((accion, i) => (
              <button
                key={i}
                className="w-full flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 text-left"
              >
                <div className={`size-8 rounded-xl bg-gradient-to-br ${accion.color} flex items-center justify-center text-white text-sm`}>
                  {accion.icon}
              </div>
                <span className="text-xs sm:text-sm font-medium text-gray-900 line-clamp-2">{accion.label}</span>
              </button>
            ))}
              </div>
            </div>

        {/* Actividad Reciente */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="size-10 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white">
              🔔
            </div>
            <h3 className="text-lg font-bold text-gray-900">Actividad Reciente</h3>
          </div>
          <div className="space-y-3">
            {[
              { action: "Nueva iglesia registrada", time: "Hace 2 horas", type: "success" },
              { action: "Maestro María aprobada", time: "Hace 4 horas", type: "info" },
              { action: "Reporte mensual generado", time: "Hace 6 horas", type: "neutral" },
              { action: "45 nuevos estudiantes", time: "Ayer", type: "success" }
            ].map((actividad, i) => (
              <div key={i} className="flex items-start gap-3 p-2">
                <div className={`size-2 rounded-full mt-2 ${
                  actividad.type === 'success' ? 'bg-green-400' :
                  actividad.type === 'info' ? 'bg-blue-400' : 'bg-gray-400'
                }`}></div>
                <div>
                  <p className="text-sm text-gray-900">{actividad.action}</p>
                  <p className="text-xs text-gray-500">{actividad.time}</p>
                </div>
              </div>
            ))}
              </div>
            </div>

        {/* Estadísticas del Sistema */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="size-10 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white">
              📈
            </div>
            <h3 className="text-lg font-bold text-gray-900">Estadísticas</h3>
              </div>
          <div className="space-y-4">
            {[
              { label: "Tasa de Retención", value: "92%", trend: "+3%" },
              { label: "Satisfacción Padres", value: "4.8/5", trend: "+0.2" },
              { label: "Clases Completadas", value: "1,247", trend: "+18%" },
              { label: "Horas de Contenido", value: "2,890h", trend: "+25%" }
            ].map((stat, i) => (
              <div key={i} className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900">{stat.label}</p>
                  <p className="text-xs text-gray-500">{stat.trend} vs mes anterior</p>
                </div>
                <span className="text-lg font-bold text-gray-900">{stat.value}</span>
              </div>
            ))}
              </div>
            </div>
      </div>
    </UnifiedDashboardLayout>
  );
};