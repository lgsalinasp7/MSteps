import { SortableContainer } from "@/dnd-kit/SortableContainer";
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
  color: brand.blue,
  mpid: "1e995eeb-7077-4e3b-8abe-61be513ade7a"
}, {
  label: 'Iglesias activas',
  value: '25',
  icon: Church,
  color: brand.orange,
  mpid: "6e92020a-8bb0-478f-ace1-6b5c5837ea7b"
}, {
  label: 'Clases esta semana',
  value: '5',
  icon: BookOpen,
  color: brand.rose,
  mpid: "08cfadb4-d29d-4f2e-a8da-a1f5a0d2a8f6"
}, {
  label: 'Licencias congregacionales',
  value: '10',
  icon: Settings,
  color: brand.lightBlue,
  mpid: "6442ebaa-deac-4567-9bbd-f181c23ec6fe"
}] as any[];
const asistenciaData = [{
  name: 'Lun',
  valor: 120,
  mpid: "2be536e5-0871-4870-9180-d1a24d16a548"
}, {
  name: 'Mar',
  valor: 180,
  mpid: "44d42895-7c1b-43c5-9860-82cbf2772fb0"
}, {
  name: 'Mié',
  valor: 140,
  mpid: "48dad42a-160d-43d1-b16d-c769972e24cc"
}, {
  name: 'Jue',
  valor: 200,
  mpid: "8236830a-ddd8-4619-91ec-48fd1475db47"
}, {
  name: 'Vie',
  valor: 160,
  mpid: "2a817002-7d4e-409d-a769-ffb39db13d84"
}, {
  name: 'Sáb',
  valor: 220,
  mpid: "c3c94684-edcd-44c4-910d-ad56435daa24"
}, {
  name: 'Dom',
  valor: 260,
  mpid: "cdbe707c-edb2-4824-a678-eed132923bac"
}] as any[];
const participacionData = [{
  name: 'Iglesia A',
  niños: 80,
  maestros: 12,
  mpid: "d1b3f288-cdcf-42de-8c7b-a6fce11abb95"
}, {
  name: 'Iglesia B',
  niños: 65,
  maestros: 10,
  mpid: "7dcacfce-fdf3-4df2-acc0-e21c7dc7e5af"
}, {
  name: 'Iglesia C',
  niños: 95,
  maestros: 14,
  mpid: "beade570-9c44-40e4-b5a5-38af98b42597"
}, {
  name: 'Iglesia D',
  niños: 55,
  maestros: 9,
  mpid: "16934939-5f69-405d-9191-1b557bea14b8"
}] as any[];
const quickActions = [{
  icon: UploadCloud,
  label: 'Subir material',
  color: brand.blue,
  mpid: "54097bcb-0813-4ac4-adbd-bf2230c486c4"
}, {
  icon: Video,
  label: 'Nuevo video',
  color: brand.lightBlue,
  mpid: "2c0f53b4-f70d-44e6-b397-efaaa76ae536"
}, {
  icon: FileText,
  label: 'Añadir PDF',
  color: brand.orange,
  mpid: "1fe433c3-cb35-454f-87fc-7c11bd47a14f"
}, {
  icon: Calendar,
  label: 'Programar clase',
  color: brand.rose,
  mpid: "a60b6e78-49e0-49d3-8d2f-e4b7aa936911"
}] as any[];

// @component: MasterstepsAdminDashboard
export const MasterstepsAdminDashboard: React.FC = () => {
  // @return
  return <SortableContainer dndKitId="1281ac84-72b3-4045-a94e-80ce530ec47b" containerType="regular" prevTag="div" className="min-h-screen w-full bg-slate-50 text-slate-900" data-magicpath-id="0" data-magicpath-path="MasterstepsAdminDashboard.tsx">
      <SortableContainer dndKitId="77b4eff4-ad93-4cb4-b4ed-e0cd83d40798" containerType="regular" prevTag="header" className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur" style={{}} data-magicpath-id="1" data-magicpath-path="MasterstepsAdminDashboard.tsx">
        <SortableContainer dndKitId="685623c2-67e0-404c-a7d0-51c5feb13c67" containerType="regular" prevTag="div" className="mx-auto max-w-7xl px-4 py-3 flex items-center gap-3" data-magicpath-id="2" data-magicpath-path="MasterstepsAdminDashboard.tsx">
          <SortableContainer dndKitId="6d2aaba2-f2e6-4e56-8131-35fe9f4e6c6d" containerType="regular" prevTag="div" className={`size-9 rounded-md ${gradient(brand.blue, brand.lightBlue)} flex items-center justify-center`} data-magicpath-id="3" data-magicpath-path="MasterstepsAdminDashboard.tsx">
            <BookOpen className="size-5" color={brand.blue} data-magicpath-id="4" data-magicpath-path="MasterstepsAdminDashboard.tsx" />
          </SortableContainer>
          <SortableContainer dndKitId="0915095e-58be-4a1f-93a5-7ce7dc26486e" containerType="regular" prevTag="div" className="flex-1" data-magicpath-id="5" data-magicpath-path="MasterstepsAdminDashboard.tsx">
            <h1 className="text-lg font-semibold leading-tight" data-magicpath-id="6" data-magicpath-path="MasterstepsAdminDashboard.tsx">
              Mastersteps • Administrador
            </h1>
            <p className="text-xs text-slate-500" data-magicpath-id="7" data-magicpath-path="MasterstepsAdminDashboard.tsx">
              Gestión central de clases, contenidos y automatizaciones
            </p>
          </SortableContainer>
          <SortableContainer dndKitId="9558fdca-204a-4709-b0eb-cf6449ab9037" containerType="regular" prevTag="div" className="hidden md:flex items-center gap-2" data-magicpath-id="8" data-magicpath-path="MasterstepsAdminDashboard.tsx">
            <SortableContainer dndKitId="12bbc87e-5cf6-4628-9da9-7c61b1d5ca67" containerType="regular" prevTag="div" className="relative" data-magicpath-id="9" data-magicpath-path="MasterstepsAdminDashboard.tsx">
              <Search className="size-4 absolute left-2 top-1/2 -translate-y-1/2 text-slate-400" data-magicpath-id="10" data-magicpath-path="MasterstepsAdminDashboard.tsx" />
              <input placeholder="Buscar..." className="pl-8 pr-3 py-1.5 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#10a8f7] bg-white text-sm" data-magicpath-id="11" data-magicpath-path="MasterstepsAdminDashboard.tsx" />
            </SortableContainer>
            <SortableContainer dndKitId="a39b205b-81ee-4eec-95da-d4096cd0ee47" containerType="regular" prevTag="button" className="p-2 rounded-md border border-slate-200 hover:bg-slate-100" data-magicpath-id="12" data-magicpath-path="MasterstepsAdminDashboard.tsx">
              <Bell className="size-5 text-slate-600" data-magicpath-id="13" data-magicpath-path="MasterstepsAdminDashboard.tsx" />
            </SortableContainer>
            <div className="h-6 w-px bg-slate-200" data-magicpath-id="14" data-magicpath-path="MasterstepsAdminDashboard.tsx" />
            <SortableContainer dndKitId="aba8bdc2-54af-4b57-8ff4-02e26df71068" containerType="regular" prevTag="div" className="flex items-center gap-2" data-magicpath-id="15" data-magicpath-path="MasterstepsAdminDashboard.tsx">
              <SortableContainer dndKitId="6d22d4e9-ce32-4a4b-9e0e-493e8eb76ab0" containerType="regular" prevTag="div" className={`size-8 rounded-full ${gradient(brand.orange, brand.rose)} flex items-center justify-center`} data-magicpath-id="16" data-magicpath-path="MasterstepsAdminDashboard.tsx">
                <span className="text-sm font-semibold text-slate-800" data-magicpath-id="17" data-magicpath-path="MasterstepsAdminDashboard.tsx">AD</span>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      <SortableContainer dndKitId="ed356963-a122-46d2-85ac-a1ae81d52f4e" containerType="regular" prevTag="div" className="mx-auto max-w-7xl px-4 py-6 grid grid-cols-12 gap-6" data-magicpath-id="18" data-magicpath-path="MasterstepsAdminDashboard.tsx">
        <SortableContainer dndKitId="a568309e-a36a-4069-adc3-ad8a1d44bbbf" containerType="regular" prevTag="aside" className="col-span-12 md:col-span-3 lg:col-span-2" data-magicpath-id="19" data-magicpath-path="MasterstepsAdminDashboard.tsx">
          <SortableContainer dndKitId="c095b404-b9bd-43be-96f0-a2cd76a464da" containerType="regular" prevTag="nav" className={`${card}`} data-magicpath-id="20" data-magicpath-path="MasterstepsAdminDashboard.tsx">
            <SortableContainer dndKitId="651e4d8a-5015-4fdd-b253-7a5b141859ac" containerType="regular" prevTag="div" className="p-3 border-b border-slate-200/70" data-magicpath-id="21" data-magicpath-path="MasterstepsAdminDashboard.tsx">
              <span className="text-xs font-medium text-slate-500" data-magicpath-id="22" data-magicpath-path="MasterstepsAdminDashboard.tsx">
                Navegación
              </span>
            </SortableContainer>
            <SortableContainer dndKitId="8ee7c531-34dc-40e4-a094-d8bfd9f2c7cc" containerType="collection" prevTag="ul" className="p-2" data-magicpath-id="23" data-magicpath-path="MasterstepsAdminDashboard.tsx">
              {[{
              icon: BarChart3,
              label: 'Panel',
              active: true,
              mpid: "0d4e32ff-2c51-4710-995c-4c066b415ed3"
            }, {
              icon: UploadCloud,
              label: 'Contenidos',
              mpid: "5f922208-71eb-400c-aac7-028a6c0eee59"
            }, {
              icon: Calendar,
              label: 'Automatizaciones',
              mpid: "79e6912d-38df-4989-aff3-98e49935d221"
            }, {
              icon: Users,
              label: 'Usuarios',
              mpid: "06c4d768-3449-4130-b375-d876386136b9"
            }, {
              icon: BookOpen,
              label: 'Reportes',
              mpid: "f51e2f72-3bf6-40ea-b37c-b8d12da2f709"
            }, {
              icon: CreditCard,
              label: 'Membresías y Pagos',
              mpid: "2e86ff15-3acd-400d-a6dc-a1cc0aeafc96"
            }, {
              icon: Settings,
              label: 'Configuración',
              mpid: "792cb1e7-3b97-48be-94ea-8ffb72bcfc11"
            }].map((i, idx) => <li key={idx} data-magicpath-uuid={(i as any)["mpid"] ?? "unsafe"} data-magicpath-id="24" data-magicpath-path="MasterstepsAdminDashboard.tsx">
                  <button className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm hover:bg-slate-50 ${i.active ? 'bg-slate-50 border border-slate-200' : 'text-slate-700'}`} data-magicpath-uuid={(i as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:unknown" data-magicpath-id="25" data-magicpath-path="MasterstepsAdminDashboard.tsx">
                    <i.icon className="size-4" data-magicpath-uuid={(i as any)["mpid"] ?? "unsafe"} data-magicpath-id="26" data-magicpath-path="MasterstepsAdminDashboard.tsx" />
                    {i.label}
                  </button>
                </li>)}
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>

        <SortableContainer dndKitId="b6063857-53a1-4406-82b8-f46b9e4ec4e3" containerType="regular" prevTag="main" className="col-span-12 md:col-span-9 lg:col-span-10 space-y-6" data-magicpath-id="27" data-magicpath-path="MasterstepsAdminDashboard.tsx">
          <SortableContainer dndKitId="091e4509-6381-4604-9f2a-5244f311125d" containerType="collection" prevTag="section" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" data-magicpath-id="28" data-magicpath-path="MasterstepsAdminDashboard.tsx">
            {stats.map((s, i) => <motion.div data-magicpath-motion-tag="motion.div" key={i} className={`${card} p-4`} initial={{
            opacity: 0,
            y: 12
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: i * 0.05
          }} data-magicpath-uuid={(s as any)["mpid"] ?? "unsafe"} data-magicpath-id="29" data-magicpath-path="MasterstepsAdminDashboard.tsx">
                <div className="flex items-center justify-between" data-magicpath-uuid={(s as any)["mpid"] ?? "unsafe"} data-magicpath-id="30" data-magicpath-path="MasterstepsAdminDashboard.tsx">
                  <div className={`size-10 rounded-md ${gradient(s.color, brand.lightBlue)} flex items-center justify-center`} data-magicpath-uuid={(s as any)["mpid"] ?? "unsafe"} data-magicpath-id="31" data-magicpath-path="MasterstepsAdminDashboard.tsx">
                    <s.icon className="size-5" color={s.color} data-magicpath-uuid={(s as any)["mpid"] ?? "unsafe"} data-magicpath-id="32" data-magicpath-path="MasterstepsAdminDashboard.tsx" />
                  </div>
                  <CheckCircle2 className="size-5 text-emerald-500/80" data-magicpath-uuid={(s as any)["mpid"] ?? "unsafe"} data-magicpath-id="33" data-magicpath-path="MasterstepsAdminDashboard.tsx" />
                </div>
                <div className="mt-3" data-magicpath-uuid={(s as any)["mpid"] ?? "unsafe"} data-magicpath-id="34" data-magicpath-path="MasterstepsAdminDashboard.tsx">
                  <p className="text-xs text-slate-500" data-magicpath-uuid={(s as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:string" data-magicpath-id="35" data-magicpath-path="MasterstepsAdminDashboard.tsx">{s.label}</p>
                  <p className="text-2xl font-semibold" data-magicpath-uuid={(s as any)["mpid"] ?? "unsafe"} data-magicpath-field="value:string" data-magicpath-id="36" data-magicpath-path="MasterstepsAdminDashboard.tsx">{s.value}</p>
                </div>
              </motion.div>)}
          </SortableContainer>

          <SortableContainer dndKitId="7a743634-97cf-4a56-bfc8-14992bd4ab9e" containerType="regular" prevTag="section" className="grid grid-cols-1 lg:grid-cols-3 gap-6" data-magicpath-id="37" data-magicpath-path="MasterstepsAdminDashboard.tsx">
            <SortableContainer dndKitId="1126b2e8-af40-4e2f-988d-c9edbf05fec3" containerType="regular" prevTag="div" className={`${card} col-span-2`} data-magicpath-id="38" data-magicpath-path="MasterstepsAdminDashboard.tsx">
              <SortableContainer dndKitId="021d37b6-2714-4547-ad94-0484480f1022" containerType="regular" prevTag="div" className="p-4 flex items-center justify-between border-b border-slate-200/70" data-magicpath-id="39" data-magicpath-path="MasterstepsAdminDashboard.tsx">
                <h3 className="font-semibold" data-magicpath-id="40" data-magicpath-path="MasterstepsAdminDashboard.tsx">Asistencia semanal</h3>
                <span className="text-xs text-slate-500" data-magicpath-id="41" data-magicpath-path="MasterstepsAdminDashboard.tsx">Últimos 7 días</span>
              </SortableContainer>
              <SortableContainer dndKitId="4d42ecdf-a745-426d-b1a6-a5a483517665" containerType="regular" prevTag="div" className="p-2 h-64" data-magicpath-id="42" data-magicpath-path="MasterstepsAdminDashboard.tsx">
                <ResponsiveContainer width="100%" height="100%" data-magicpath-id="43" data-magicpath-path="MasterstepsAdminDashboard.tsx">
                  <AreaChart data={asistenciaData} data-magicpath-id="44" data-magicpath-path="MasterstepsAdminDashboard.tsx">
                    <defs data-magicpath-id="45" data-magicpath-path="MasterstepsAdminDashboard.tsx">
                      <linearGradient id="grad1" x1="0" x2="0" y1="0" y2="1" data-magicpath-id="46" data-magicpath-path="MasterstepsAdminDashboard.tsx">
                        <stop offset="0%" stopColor={brand.lightBlue} stopOpacity={0.6} />
                        <stop offset="100%" stopColor={brand.lightBlue} stopOpacity={0.05} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid stroke="#eef2f7" vertical={false} data-magicpath-id="47" data-magicpath-path="MasterstepsAdminDashboard.tsx" />
                    <XAxis dataKey="name" stroke="#94a3b8" data-magicpath-id="48" data-magicpath-path="MasterstepsAdminDashboard.tsx" />
                    <YAxis stroke="#94a3b8" data-magicpath-id="49" data-magicpath-path="MasterstepsAdminDashboard.tsx" />
                    <Tooltip data-magicpath-id="50" data-magicpath-path="MasterstepsAdminDashboard.tsx" />
                    <Area type="monotone" dataKey="valor" stroke={brand.lightBlue} fill="url(#grad1)" strokeWidth={2} data-magicpath-id="51" data-magicpath-path="MasterstepsAdminDashboard.tsx" />
                  </AreaChart>
                </ResponsiveContainer>
              </SortableContainer>
            </SortableContainer>

            <SortableContainer dndKitId="c4ed7f18-eceb-461a-bdfb-9d1451643e6d" containerType="regular" prevTag="div" className={`${card}`} data-magicpath-id="52" data-magicpath-path="MasterstepsAdminDashboard.tsx">
              <SortableContainer dndKitId="84dd19b4-1e48-463f-a39b-d55bff6e0a0b" containerType="regular" prevTag="div" className="p-4 flex items-center justify-between border-b border-slate-200/70" data-magicpath-id="53" data-magicpath-path="MasterstepsAdminDashboard.tsx">
                <h3 className="font-semibold" data-magicpath-id="54" data-magicpath-path="MasterstepsAdminDashboard.tsx">Acciones rápidas</h3>
                <Plus className="size-4 text-slate-500" data-magicpath-id="55" data-magicpath-path="MasterstepsAdminDashboard.tsx" />
              </SortableContainer>
              <SortableContainer dndKitId="63f11c12-91bc-4855-95f4-36dda0ece043" containerType="collection" prevTag="div" className="p-4 grid grid-cols-2 gap-3" data-magicpath-id="56" data-magicpath-path="MasterstepsAdminDashboard.tsx">
                {quickActions.map((a, i) => <button key={i} className={`flex items-center gap-2 p-3 rounded-lg border border-slate-200 hover:shadow-sm ${gradient(a.color, '#ffffff')}`} data-magicpath-uuid={(a as any)["mpid"] ?? "unsafe"} data-magicpath-id="57" data-magicpath-path="MasterstepsAdminDashboard.tsx">
                    <a.icon className="size-5" color={a.color} data-magicpath-uuid={(a as any)["mpid"] ?? "unsafe"} data-magicpath-id="58" data-magicpath-path="MasterstepsAdminDashboard.tsx" />
                    <span className="text-sm font-medium" data-magicpath-uuid={(a as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:string" data-magicpath-id="59" data-magicpath-path="MasterstepsAdminDashboard.tsx">{a.label}</span>
                  </button>)}
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="fc025e1b-d477-42b8-be61-eccae325f4ba" containerType="regular" prevTag="section" className="grid grid-cols-1 lg:grid-cols-3 gap-6" data-magicpath-id="60" data-magicpath-path="MasterstepsAdminDashboard.tsx">
            <SortableContainer dndKitId="97877993-c214-478c-8a08-f49ff8e4bab1" containerType="regular" prevTag="div" className={`${card} col-span-2`} data-magicpath-id="61" data-magicpath-path="MasterstepsAdminDashboard.tsx">
              <SortableContainer dndKitId="2b012eb7-5690-414d-b507-ab1d71a2dead" containerType="regular" prevTag="div" className="p-4 flex items-center justify-between border-b border-slate-200/70" data-magicpath-id="62" data-magicpath-path="MasterstepsAdminDashboard.tsx">
                <h3 className="font-semibold" data-magicpath-id="63" data-magicpath-path="MasterstepsAdminDashboard.tsx">Participación por iglesia</h3>
                <span className="text-xs text-slate-500" data-magicpath-id="64" data-magicpath-path="MasterstepsAdminDashboard.tsx">Niños vs. Maestros</span>
              </SortableContainer>
              <SortableContainer dndKitId="4c673cea-fa65-4842-985b-cc733392d2e2" containerType="regular" prevTag="div" className="p-2 h-64" data-magicpath-id="65" data-magicpath-path="MasterstepsAdminDashboard.tsx">
                <ResponsiveContainer width="100%" height="100%" data-magicpath-id="66" data-magicpath-path="MasterstepsAdminDashboard.tsx">
                  <BarChart data={participacionData} data-magicpath-id="67" data-magicpath-path="MasterstepsAdminDashboard.tsx">
                    <CartesianGrid stroke="#eef2f7" vertical={false} data-magicpath-id="68" data-magicpath-path="MasterstepsAdminDashboard.tsx" />
                    <XAxis dataKey="name" stroke="#94a3b8" data-magicpath-id="69" data-magicpath-path="MasterstepsAdminDashboard.tsx" />
                    <YAxis stroke="#94a3b8" data-magicpath-id="70" data-magicpath-path="MasterstepsAdminDashboard.tsx" />
                    <Tooltip data-magicpath-id="71" data-magicpath-path="MasterstepsAdminDashboard.tsx" />
                    <Bar dataKey="niños" fill={brand.blue} radius={[6, 6, 0, 0]} data-magicpath-id="72" data-magicpath-path="MasterstepsAdminDashboard.tsx" />
                    <Bar dataKey="maestros" fill={brand.orange} radius={[6, 6, 0, 0]} data-magicpath-id="73" data-magicpath-path="MasterstepsAdminDashboard.tsx" />
                  </BarChart>
                </ResponsiveContainer>
              </SortableContainer>
            </SortableContainer>

            <SortableContainer dndKitId="a3d45df7-02a9-4169-9e5c-59d62cef72e7" containerType="regular" prevTag="div" className={`${card}`} data-magicpath-id="74" data-magicpath-path="MasterstepsAdminDashboard.tsx">
              <SortableContainer dndKitId="26c4d5ba-66e4-4045-aea6-f0903970dc8e" containerType="regular" prevTag="div" className="p-4 border-b border-slate-200/70" data-magicpath-id="75" data-magicpath-path="MasterstepsAdminDashboard.tsx">
                <h3 className="font-semibold" data-magicpath-id="76" data-magicpath-path="MasterstepsAdminDashboard.tsx">Automatizaciones</h3>
                <p className="text-xs text-slate-500" data-magicpath-id="77" data-magicpath-path="MasterstepsAdminDashboard.tsx">
                  Programar recordatorios y enlaces
                </p>
              </SortableContainer>
              <SortableContainer dndKitId="4c2bb9ec-e700-410d-9302-9f92b70d0f3f" containerType="collection" prevTag="div" className="p-4 space-y-3" data-magicpath-id="78" data-magicpath-path="MasterstepsAdminDashboard.tsx">
                {[{
                icon: WhatsIcon,
                title: 'WhatsApp: Recordatorio clase',
                time: 'Sáb 9:00 AM',
                color: brand.rose,
                mpid: "e344c72d-96f8-45a8-a0b0-9f102f616c6d"
              }, {
                icon: Mail,
                title: 'Email: Enviar materiales',
                time: 'Vie 7:00 PM',
                color: brand.blue,
                mpid: "ad6d5256-f8da-4f8f-bf92-dfe65c22003a"
              }, {
                icon: Calendar,
                title: 'Calendario: Clase semanal',
                time: 'Dom 10:00 AM',
                color: brand.orange,
                mpid: "d36c4ac4-6e04-48cc-bdc5-afe1866e1985"
              }].map((item, i) => <div key={i} className="flex items-center justify-between p-3 rounded-lg border border-slate-200 hover:bg-slate-50" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="79" data-magicpath-path="MasterstepsAdminDashboard.tsx">
                    <div className="flex items-center gap-3" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="80" data-magicpath-path="MasterstepsAdminDashboard.tsx">
                      <div className={`size-9 rounded-md ${gradient(item.color, '#ffffff')} flex items-center justify-center`} data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="81" data-magicpath-path="MasterstepsAdminDashboard.tsx">
                        <item.icon className="size-4" color={item.color} data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="82" data-magicpath-path="MasterstepsAdminDashboard.tsx" />
                      </div>
                      <div data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="83" data-magicpath-path="MasterstepsAdminDashboard.tsx">
                        <p className="text-sm font-medium" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="84" data-magicpath-path="MasterstepsAdminDashboard.tsx">{item.title}</p>
                        <p className="text-xs text-slate-500" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-field="time:unknown" data-magicpath-id="85" data-magicpath-path="MasterstepsAdminDashboard.tsx">{item.time}</p>
                      </div>
                    </div>
                    <button className="text-xs text-slate-600 hover:text-slate-900 underline" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="86" data-magicpath-path="MasterstepsAdminDashboard.tsx">
                      Editar
                    </button>
                  </div>)}
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="56b2a0e7-fdf1-4fe0-ba03-9c65d4a0ef1f" containerType="regular" prevTag="section" className="grid grid-cols-1 lg:grid-cols-3 gap-6" data-magicpath-id="87" data-magicpath-path="MasterstepsAdminDashboard.tsx">
            <SortableContainer dndKitId="9a29080b-823f-4f42-a54d-08daa3e2e5d9" containerType="regular" prevTag="div" className={`${card} col-span-2`} data-magicpath-id="88" data-magicpath-path="MasterstepsAdminDashboard.tsx">
              <SortableContainer dndKitId="8164b8ae-5f0f-4131-9811-713642497c7f" containerType="regular" prevTag="div" className="p-4 border-b border-slate-200/70 flex items-center justify-between" data-magicpath-id="89" data-magicpath-path="MasterstepsAdminDashboard.tsx">
                <h3 className="font-semibold" data-magicpath-id="90" data-magicpath-path="MasterstepsAdminDashboard.tsx">Gestión de contenidos</h3>
                <SortableContainer dndKitId="2d359966-1c59-453e-95c8-180e2cc36a1a" containerType="regular" prevTag="div" className="flex items-center gap-2" data-magicpath-id="91" data-magicpath-path="MasterstepsAdminDashboard.tsx">
                  <button className="px-3 py-1.5 text-sm rounded-md border border-slate-200" data-magicpath-id="92" data-magicpath-path="MasterstepsAdminDashboard.tsx">
                    Nuevo
                  </button>
                  <button className="px-3 py-1.5 text-sm rounded-md text-white" style={{
                  background: brand.blue
                }} data-magicpath-id="93" data-magicpath-path="MasterstepsAdminDashboard.tsx">
                    Subir
                  </button>
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="3cf9fdd9-d6f6-4c49-bbf2-e00a6adf5c97" containerType="collection" prevTag="div" className="p-4 grid sm:grid-cols-2 gap-3" data-magicpath-id="94" data-magicpath-path="MasterstepsAdminDashboard.tsx">
                {[{
                icon: Video,
                t: 'Serie: Parábolas',
                s: '8 videos',
                c: brand.lightBlue,
                mpid: "dbceabf1-ec0a-4d50-801e-46a24094e707"
              }, {
                icon: FileText,
                t: 'PDF: Guía Maestros',
                s: '32 páginas',
                c: brand.orange,
                mpid: "0754924f-46a2-4084-aa00-4b8421e94dc4"
              }, {
                icon: UploadCloud,
                t: 'Taller: Manualidades',
                s: '3 módulos',
                c: brand.rose,
                mpid: "26e00731-44f1-46c0-8f9d-44728a19449b"
              }, {
                icon: BookOpen,
                t: 'Plan de Clase',
                s: 'Domingo',
                c: brand.blue,
                mpid: "371289b4-36a5-44e1-b95e-c4bb9f46e22c"
              }].map((m, i) => <div key={i} className="p-3 rounded-lg border border-slate-200 hover:bg-slate-50 flex items-center gap-3" data-magicpath-uuid={(m as any)["mpid"] ?? "unsafe"} data-magicpath-id="95" data-magicpath-path="MasterstepsAdminDashboard.tsx">
                    <div className={`size-10 rounded-md ${gradient(m.c, '#ffffff')} flex items-center justify-center`} data-magicpath-uuid={(m as any)["mpid"] ?? "unsafe"} data-magicpath-id="96" data-magicpath-path="MasterstepsAdminDashboard.tsx">
                      <m.icon className="size-5" color={m.c} data-magicpath-uuid={(m as any)["mpid"] ?? "unsafe"} data-magicpath-id="97" data-magicpath-path="MasterstepsAdminDashboard.tsx" />
                    </div>
                    <div className="min-w-0" data-magicpath-uuid={(m as any)["mpid"] ?? "unsafe"} data-magicpath-id="98" data-magicpath-path="MasterstepsAdminDashboard.tsx">
                      <p className="text-sm font-medium truncate" data-magicpath-uuid={(m as any)["mpid"] ?? "unsafe"} data-magicpath-field="t:unknown" data-magicpath-id="99" data-magicpath-path="MasterstepsAdminDashboard.tsx">{m.t}</p>
                      <p className="text-xs text-slate-500" data-magicpath-uuid={(m as any)["mpid"] ?? "unsafe"} data-magicpath-field="s:unknown" data-magicpath-id="100" data-magicpath-path="MasterstepsAdminDashboard.tsx">{m.s}</p>
                    </div>
                  </div>)}
              </SortableContainer>
            </SortableContainer>

            <SortableContainer dndKitId="64d1d672-00b8-41c9-ad03-e5e9412defd6" containerType="regular" prevTag="div" className={`${card}`} data-magicpath-id="101" data-magicpath-path="MasterstepsAdminDashboard.tsx">
              <SortableContainer dndKitId="1c50feaf-bb74-462f-86ce-941276e4af42" containerType="regular" prevTag="div" className="p-4 border-b border-slate-200/70" data-magicpath-id="102" data-magicpath-path="MasterstepsAdminDashboard.tsx">
                <h3 className="font-semibold" data-magicpath-id="103" data-magicpath-path="MasterstepsAdminDashboard.tsx">Usuarios y Roles</h3>
                <p className="text-xs text-slate-500" data-magicpath-id="104" data-magicpath-path="MasterstepsAdminDashboard.tsx">
                  Padres, maestras y tutores
                </p>
              </SortableContainer>
              <SortableContainer dndKitId="c398d5f4-2188-4a37-9f0a-d56167263624" containerType="collection" prevTag="div" className="p-4 space-y-3" data-magicpath-id="105" data-magicpath-path="MasterstepsAdminDashboard.tsx">
                {[{
                role: 'Padres',
                count: 680,
                color: brand.blue,
                mpid: "99fc30d4-22b8-4d15-aae9-84f65014b20f"
              }, {
                role: 'Maestras',
                count: 55,
                color: brand.orange,
                mpid: "eb387103-7092-4a08-a3ac-30cdb30bfb74"
              }, {
                role: 'Tutores',
                count: 32,
                color: brand.rose,
                mpid: "8f4a64c1-91ed-4a3b-9a33-d0ab057b39f5"
              }].map((r, i) => <div key={i} className="flex items-center justify-between" data-magicpath-uuid={(r as any)["mpid"] ?? "unsafe"} data-magicpath-id="106" data-magicpath-path="MasterstepsAdminDashboard.tsx">
                    <div className="flex items-center gap-3" data-magicpath-uuid={(r as any)["mpid"] ?? "unsafe"} data-magicpath-id="107" data-magicpath-path="MasterstepsAdminDashboard.tsx">
                      <Users className="size-5" color={r.color} data-magicpath-uuid={(r as any)["mpid"] ?? "unsafe"} data-magicpath-id="108" data-magicpath-path="MasterstepsAdminDashboard.tsx" />
                      <span className="text-sm" data-magicpath-uuid={(r as any)["mpid"] ?? "unsafe"} data-magicpath-field="role:unknown" data-magicpath-id="109" data-magicpath-path="MasterstepsAdminDashboard.tsx">{r.role}</span>
                    </div>
                    <span className="text-sm font-semibold" data-magicpath-uuid={(r as any)["mpid"] ?? "unsafe"} data-magicpath-field="count:unknown" data-magicpath-id="110" data-magicpath-path="MasterstepsAdminDashboard.tsx">{r.count}</span>
                  </div>)}
                <button className="w-full mt-2 px-3 py-2 text-sm rounded-md text-white" style={{
                background: brand.rose
              }} data-magicpath-id="111" data-magicpath-path="MasterstepsAdminDashboard.tsx">
                  Crear usuario
                </button>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="08fcf1e4-39f3-477c-ba30-5dafbfa564b2" containerType="regular" prevTag="section" className="grid grid-cols-1 lg:grid-cols-3 gap-6" data-magicpath-id="112" data-magicpath-path="MasterstepsAdminDashboard.tsx">
            <SortableContainer dndKitId="84abb31b-1ec1-48d0-b1df-fe58255dc88f" containerType="regular" prevTag="div" className={`${card} col-span-2`} data-magicpath-id="113" data-magicpath-path="MasterstepsAdminDashboard.tsx">
              <SortableContainer dndKitId="9de322b9-bdc1-4d38-8f9e-de52898de7bb" containerType="regular" prevTag="div" className="p-4 border-b border-slate-200/70 flex items-center justify-between" data-magicpath-id="114" data-magicpath-path="MasterstepsAdminDashboard.tsx">
                <h3 className="font-semibold" data-magicpath-id="115" data-magicpath-path="MasterstepsAdminDashboard.tsx">Reportes</h3>
                <button className="px-3 py-1.5 text-sm rounded-md border border-slate-200" data-magicpath-id="116" data-magicpath-path="MasterstepsAdminDashboard.tsx">
                  Exportar
                </button>
              </SortableContainer>
              <SortableContainer dndKitId="9b6d0b94-d92b-4c85-a5f1-5f2179df9c07" containerType="collection" prevTag="div" className="p-4 grid sm:grid-cols-3 gap-3" data-magicpath-id="117" data-magicpath-path="MasterstepsAdminDashboard.tsx">
                {[{
                k: 'Asistencia por iglesia',
                v: '92%',
                mpid: "86dbaa39-774a-4c6e-b47a-115e59c38cd5"
              }, {
                k: 'Participación de niños',
                v: '78%',
                mpid: "78f4f773-188b-4ba6-a233-2ce540cd8805"
              }, {
                k: 'Desempeño de maestros',
                v: '8.7/10',
                mpid: "3e7a2364-970f-4a93-9b41-8855d4645477"
              }].map((r, i) => <div key={i} className="p-3 rounded-lg border border-slate-200" data-magicpath-uuid={(r as any)["mpid"] ?? "unsafe"} data-magicpath-id="118" data-magicpath-path="MasterstepsAdminDashboard.tsx">
                    <p className="text-xs text-slate-500" data-magicpath-uuid={(r as any)["mpid"] ?? "unsafe"} data-magicpath-field="k:unknown" data-magicpath-id="119" data-magicpath-path="MasterstepsAdminDashboard.tsx">{r.k}</p>
                    <p className="text-xl font-semibold mt-1" data-magicpath-uuid={(r as any)["mpid"] ?? "unsafe"} data-magicpath-field="v:unknown" data-magicpath-id="120" data-magicpath-path="MasterstepsAdminDashboard.tsx">{r.v}</p>
                  </div>)}
              </SortableContainer>
            </SortableContainer>

            <SortableContainer dndKitId="10cc4b0a-aff5-4a9f-9807-f9327d65431c" containerType="regular" prevTag="div" className={`${card}`} data-magicpath-id="121" data-magicpath-path="MasterstepsAdminDashboard.tsx">
              <SortableContainer dndKitId="96a6410b-180e-43d0-8d4a-efd0317d5fe6" containerType="regular" prevTag="div" className="p-4 border-b border-slate-200/70" data-magicpath-id="122" data-magicpath-path="MasterstepsAdminDashboard.tsx">
                <h3 className="font-semibold" data-magicpath-id="123" data-magicpath-path="MasterstepsAdminDashboard.tsx">Membresías y Pagos</h3>
                <p className="text-xs text-slate-500" data-magicpath-id="124" data-magicpath-path="MasterstepsAdminDashboard.tsx">
                  Control de planes y licencias
                </p>
              </SortableContainer>
              <SortableContainer dndKitId="e7deb4df-c54c-4373-8db1-b154bda996e2" containerType="regular" prevTag="div" className="p-4 space-y-3" data-magicpath-id="125" data-magicpath-path="MasterstepsAdminDashboard.tsx">
                <SortableContainer dndKitId="748c1a1f-cbfc-46d7-bb22-ace464fc7cb1" containerType="regular" prevTag="div" className="flex items-center justify-between" data-magicpath-id="126" data-magicpath-path="MasterstepsAdminDashboard.tsx">
                  <span className="text-sm" data-magicpath-id="127" data-magicpath-path="MasterstepsAdminDashboard.tsx">Plan actual</span>
                  <span className="text-sm font-semibold" data-magicpath-id="128" data-magicpath-path="MasterstepsAdminDashboard.tsx">Pro Congregacional</span>
                </SortableContainer>
                <SortableContainer dndKitId="e53755ad-e27d-4aac-b61f-b45568c669b7" containerType="regular" prevTag="div" className="flex items-center justify-between" data-magicpath-id="129" data-magicpath-path="MasterstepsAdminDashboard.tsx">
                  <span className="text-sm" data-magicpath-id="130" data-magicpath-path="MasterstepsAdminDashboard.tsx">Licencias</span>
                  <span className="text-sm font-semibold" data-magicpath-id="131" data-magicpath-path="MasterstepsAdminDashboard.tsx">10 activas</span>
                </SortableContainer>
                <SortableContainer dndKitId="a53232b0-9c6a-423d-a7ef-05c107be6a70" containerType="regular" prevTag="button" className="w-full px-3 py-2 text-sm rounded-md text-white flex items-center justify-center gap-2" style={{
                background: brand.blue
              }} data-magicpath-id="132" data-magicpath-path="MasterstepsAdminDashboard.tsx">
                  <CreditCard className="size-4" data-magicpath-id="133" data-magicpath-path="MasterstepsAdminDashboard.tsx" />
                  Gestionar pagos
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <footer className="text-xs text-slate-500 pt-2 pb-8" data-magicpath-id="134" data-magicpath-path="MasterstepsAdminDashboard.tsx">
            © {new Date().getFullYear()} Mastersteps. Construyendo pasos firmes en la fe.
          </footer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};
function WhatsIcon(props: React.SVGProps<SVGSVGElement>) {
  return <MessageSquare {...props} data-magicpath-id="135" data-magicpath-path="MasterstepsAdminDashboard.tsx" />;
}