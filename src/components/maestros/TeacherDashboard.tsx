"use client";
import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Play, Download, FileText, Calendar, Users, CheckCircle2, Bell, Search, ClipboardList, Pencil, Send, Sparkles, Lightbulb, BrainCircuit, Video, NotebookPen, LayoutGrid, GraduationCap, ListChecks, Wand2, BellRing, Settings } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import Link from 'next/link';
import { brand, gradients, components, utils } from '@/lib/design-system';

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

const sampleAgenda = [
  { when: 'Miércoles 5:00 PM', title: 'Video de capacitación', icon: Video, url: '#' },
  { when: 'Miércoles 5:30 PM', title: 'Notas clave del tema', icon: NotebookPen, url: '#' },
  { when: 'Miércoles 6:00 PM', title: 'Actividad sugerida: "Espejo de Identidad"', icon: Lightbulb, url: '#' }
];

const suggestions = [
  { type: 'Dinámica', title: 'Círculo de afirmaciones', detail: 'Cada niño dice algo positivo de otro.' },
  { type: 'Trivia', title: 'Quién soy en Cristo', detail: '5 preguntas rápidas; usa tarjetas de colores.' },
  { type: 'Taller', title: 'Escudo de identidad', detail: 'Dibuja símbolos que representen su fe.' }
];

const workshops = [
  { title: 'Taller creativo de manualidades', date: 'Próx. Jue 7:00 PM', link: '#' },
  { title: 'Reunión de maestras mensual', date: 'Próx. Vie 6:30 PM', link: '#' },
  { title: 'Capacitación: Juegos con propósito', date: 'Próx. Sáb 10:00 AM', link: '#' }
];

export function TeacherDashboard() {
  const { logout } = useAuth();
  const [kids, setKids] = useState<Kid[]>(sampleKids);
  const presentCount = useMemo(() => kids.filter(k => k.present).length, [kids]);
  const [active, setActive] = useState<string>('panel');
  const [menuOpen, setMenuOpen] = useState(false);

  const sidebar = [
    { id: 'panel', label: 'Panel', icon: LayoutGrid },
    { id: 'clase', label: 'Clase del domingo', icon: BookOpen },
    { id: 'agenda', label: 'Agenda miércoles', icon: Calendar },
    { id: 'asistencia', label: 'Lista y asistencia', icon: ListChecks },
    { id: 'herramientas', label: 'Herramientas (IA)', icon: Wand2 },
    { id: 'notificaciones', label: 'Notificaciones', icon: BellRing },
    { id: 'recursos', label: 'Materiales y guías', icon: GraduationCap },
    { id: 'ajustes', label: 'Ajustes', icon: Settings }
  ] as const;

  const togglePresent = (id: string) => setKids(prev => prev.map(k => k.id === id ? { ...k, present: !k.present } : k));
  const updateNote = (id: string, note: string) => setKids(prev => prev.map(k => k.id === id ? { ...k, note } : k));

  return (
    <div className="min-h-screen w-full bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center gap-3">
          <div className={`size-9 rounded-md ${gradient(brand.blue, brand.lightBlue)} grid place-items-center`}>
            <BookOpen className="size-5" color={brand.blue} />
          </div>
          <div className="flex-1 min-w-0">
            <h1 className="text-lg font-semibold truncate">Maestra • Escuela Dominical</h1>
            <p className="text-xs text-slate-500 truncate">"Mi identidad en Cristo" • Grupo 6–8 años</p>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <div className="relative">
              <Search className="size-4 absolute left-2 top-1/2 -translate-y-1/2 text-slate-400" />
              <input placeholder="Buscar..." className="pl-8 pr-3 py-1.5 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#10a8f7] bg-white text-sm" />
            </div>
            <button className="p-2 rounded-md border border-slate-200 hover:bg-slate-100" aria-label="Notificaciones">
              <Bell className="size-5 text-slate-600" />
            </button>
            <div className="h-6 w-px bg-slate-200" />
            <div className="relative">
              <button onClick={() => setMenuOpen(!menuOpen)} className="flex items-center gap-2 px-2 py-1 rounded-md border border-slate-200 hover:bg-slate-50">
                <div className={`size-8 rounded-full ${gradient(brand.orange, brand.rose)} flex items-center justify-center`}>
                  <span className="text-sm font-semibold text-slate-800">MA</span>
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
            <div className="p-3 border-b border-slate-200">
              <p className="text-xs font-medium text-slate-500">Navegación</p>
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
          {active === 'panel' && (
            <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { k: 'Niños en grupo', v: kids.length, icon: Users, c: brand.blue },
                { k: 'Asistencia hoy', v: presentCount, icon: CheckCircle2, c: brand.rose },
                { k: 'Talleres pendientes', v: 3, icon: Calendar, c: brand.orange }
              ].map((s, i) => (
                <motion.div 
                  key={i} 
                  className={`${card} p-4`} 
                  initial={{ opacity: 0, y: 8 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ delay: i * 0.05 }}
                >
                  <div className="flex items-center justify-between">
                    <div className={`size-10 rounded-md ${gradient(s.c, '#ffffff')} grid place-items-center`}>
                      <s.icon className="size-5" color={s.c} />
                    </div>
                  </div>
                  <div className="mt-3">
                    <p className="text-xs text-slate-500">{s.k}</p>
                    <p className="text-2xl font-semibold">{s.v}</p>
                  </div>
                </motion.div>
              ))}
            </section>
          )}

          {active === 'clase' && (
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className={card}>
                <div className="p-4 border-b border-slate-200 flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">Clase del Domingo</h3>
                    <p className="text-xs text-slate-500">Tema: Mi identidad en Cristo</p>
                  </div>
                  <Users className="size-4 text-slate-500" />
                </div>
                <div className="p-4 space-y-4">
                  <div className={`aspect-video w-full rounded-lg ${gradient(brand.blue, brand.lightBlue)} grid place-items-center`}>
                    <button className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/90 border border-slate-200">
                      <Play className="size-4" />
                      <span className="text-sm font-medium">Reproducir video (12 min)</span>
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <a href="#" className="p-3 rounded-lg border border-slate-200 hover:bg-slate-50 flex items-center gap-2">
                      <Download className="size-4 text-sky-700" />
                      <span className="text-sm">PDF Actividades</span>
                    </a>
                    <a href="#" className="p-3 rounded-lg border border-slate-200 hover:bg-slate-50 flex items-center gap-2">
                      <FileText className="size-4 text-amber-600" />
                      <span className="text-sm">Guía de enseñanza</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className={card}>
                <div className="p-4 border-b border-slate-200 flex items-center justify-between">
                  <h3 className="font-semibold">Recursos complementarios</h3>
                  <GraduationCap className="size-4 text-slate-500" />
                </div>
                <ul className="p-3 space-y-3">
                  {[
                    { t: 'Audio devocional', sub: '5 min', href: '#' },
                    { t: 'Diapositivas', sub: '6 láminas', href: '#' }
                  ].map((r, i) => (
                    <li key={i} className="p-3 rounded-lg border border-slate-200 hover:bg-slate-50">
                      <p className="text-sm font-medium">{r.t}</p>
                      <a href={r.href} className="mt-1 inline-flex items-center gap-1 text-xs text-sky-700 hover:underline">
                        <Download className="size-3" /> Descargar
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )}

          {active === 'agenda' && (
            <section className={card}>
              <div className="p-4 border-b border-slate-200 flex items-center justify-between">
                <h3 className="font-semibold">Agenda de preparación (Miércoles)</h3>
                <ClipboardList className="size-4 text-slate-500" />
              </div>
              <ul className="p-3 space-y-3">
                {sampleAgenda.map((a, i) => (
                  <li key={i} className="p-3 rounded-lg border border-slate-200 hover:bg-slate-50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <a.icon className="size-4 text-sky-700" />
                        <p className="text-sm font-medium">{a.title}</p>
                      </div>
                      <span className="text-xs text-slate-500">{a.when}</span>
                    </div>
                    <a href={a.url} className="mt-1 inline-flex items-center gap-1 text-xs text-sky-700 hover:underline">
                      <Send className="size-3" /> Abrir recurso
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {active === 'asistencia' && (
            <section className={card}>
              <div className="p-4 border-b border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Users className="size-4 text-slate-500" />
                  <h3 className="font-semibold">Lista del grupo (6–8 años)</h3>
                </div>
                <span className="text-xs text-slate-500">Asistencia: {presentCount}/{kids.length}</span>
              </div>
              <div className="p-3 grid grid-cols-1 md:grid-cols-2 gap-3">
                {kids.map(k => (
                  <div key={k.id} className="p-3 rounded-lg border border-slate-200 flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <div className="min-w-0">
                        <p className="text-sm font-medium truncate">{k.name}</p>
                        <p className="text-xs text-slate-500">Edad: {k.age}</p>
                      </div>
                      <button 
                        onClick={() => togglePresent(k.id)} 
                        className={`px-2 py-1 text-xs rounded-md border ${k.present ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'hover:bg-slate-50'}`}
                      >
                        {k.present ? 'Presente' : 'Marcar'}
                      </button>
                    </div>
                    <label className="text-xs text-slate-500 flex items-center gap-1">
                      <Pencil className="size-3" /> Observaciones
                    </label>
                    <input 
                      value={k.note ?? ''} 
                      onChange={e => updateNote(k.id, e.target.value)} 
                      placeholder="Ej: tímido hoy, necesita apoyo en lectura" 
                      className="text-sm px-2 py-1.5 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#10a8f7]" 
                    />
                  </div>
                ))}
              </div>
            </section>
          )}

          {active === 'herramientas' && (
            <section className={card}>
              <div className="p-4 border-b border-slate-200 flex items-center justify-between">
                <h3 className="font-semibold">Herramientas • Generador con IA</h3>
                <Wand2 className="size-4 text-amber-600" />
              </div>
              <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-3">
                {suggestions.map((s, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 8 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ delay: i * 0.05 }} 
                    className="p-3 rounded-lg border border-slate-200"
                  >
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      {s.type === 'Dinámica' ? <Lightbulb className="size-3.5" /> : <BrainCircuit className="size-3.5" />}
                      {s.type}
                    </div>
                    <p className="text-sm font-medium mt-1">{s.title}</p>
                    <p className="text-xs text-slate-600">{s.detail}</p>
                    <button className="mt-2 px-2 py-1 text-xs rounded-md border border-slate-200 hover:bg-slate-50">Generar con IA</button>
                  </motion.div>
                ))}
              </div>
            </section>
          )}

          {active === 'notificaciones' && (
            <section className={card}>
              <div className="p-4 border-b border-slate-200 flex items-center justify-between">
                <h3 className="font-semibold">Notificaciones</h3>
                <BellRing className="size-4 text-amber-600" />
              </div>
              <ul className="p-3 space-y-3">
                {workshops.map((w, i) => (
                  <li key={i} className="p-3 rounded-lg border border-slate-200 hover:bg-slate-50">
                    <p className="text-sm font-medium">{w.title}</p>
                    <p className="text-xs text-slate-500">{w.date}</p>
                    <a href={w.link} className="mt-1 inline-flex items-center gap-1 text-xs text-sky-700 hover:underline">
                      <Calendar className="size-3" /> Ver detalle
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {active === 'recursos' && (
            <section className={card}>
              <div className="p-4 border-b border-slate-200 flex items-center justify-between">
                <h3 className="font-semibold">Materiales y guías</h3>
                <GraduationCap className="size-4 text-slate-500" />
              </div>
              <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { t: 'PDF Actividades', sub: '12 páginas', icon: FileText },
                  { t: 'Guía de enseñanza', sub: '8 secciones', icon: NotebookPen }
                ].map((m, i) => (
                  <div key={i} className="p-3 rounded-lg border border-slate-200 hover:bg-slate-50 flex items-center gap-3">
                    <div className={`size-10 rounded-md ${gradient(brand.lightBlue, '#ffffff')} grid place-items-center`}>
                      <m.icon className="size-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-medium truncate">{m.t}</p>
                      <p className="text-xs text-slate-500">{m.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {active === 'ajustes' && (
            <section className={card}>
              <div className="p-4 border-b border-slate-200">
                <h3 className="font-semibold">Ajustes</h3>
                <p className="text-xs text-slate-500">Preferencias personales y del grupo</p>
              </div>
              <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <label className="text-sm">
                  Nombre del grupo
                  <input className="mt-1 block w-full text-sm px-2 py-1.5 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#10a8f7]" placeholder="6–8 años" />
                </label>
                <label className="text-sm">
                  Hora de recordatorio
                  <input type="time" className="mt-1 block w-full text-sm px-2 py-1.5 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#10a8f7]" />
                </label>
              </div>
            </section>
          )}

          <footer className="text-xs text-slate-500 pt-2 pb-8">
            © {new Date().getFullYear()} Mastersteps • Maestras. Con amor y propósito.
          </footer>
        </main>
      </div>
    </div>
  );
}
