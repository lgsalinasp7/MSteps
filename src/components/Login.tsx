import React, { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { BookOpen, Lock, Mail } from 'lucide-react';

export default function Login() {
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState<'admin' | 'teacher' | 'parent'>('admin');
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      await login({ username, password, preferredRole: role });
    } catch (err) {
      setError((err as Error).message || 'Error al iniciar sesión');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen w-full bg-slate-50 text-slate-900 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="rounded-xl bg-white shadow-sm border border-slate-200/70 overflow-hidden">
          <div className="p-6 border-b border-slate-200/70 flex items-center gap-3">
            <div className="size-10 rounded-md bg-[linear-gradient(135deg,#0e5fac20,#10a8f720)] flex items-center justify-center">
              <BookOpen className="size-5" color="#0e5fac" />
            </div>
            <div>
              <h1 className="text-lg font-semibold leading-tight">Mastersteps • Acceso</h1>
              <p className="text-xs text-slate-500">Solo administradores</p>
            </div>
          </div>
          <div className="px-6 pt-0 pb-2">
            <div className="flex gap-2">
              <button type="button" onClick={() => setRole('admin')} className={`px-3 py-1.5 text-xs rounded-md border ${role==='admin'?'bg-slate-100 border-slate-300':'border-slate-200'}`}>Admin</button>
              <button type="button" onClick={() => setRole('teacher')} className={`px-3 py-1.5 text-xs rounded-md border ${role==='teacher'?'bg-slate-100 border-slate-300':'border-slate-200'}`}>Maestro</button>
              <button type="button" onClick={() => setRole('parent')} className={`px-3 py-1.5 text-xs rounded-md border ${role==='parent'?'bg-slate-100 border-slate-300':'border-slate-200'}`}>Padre</button>
            </div>
          </div>
          <form className="p-6 space-y-4" onSubmit={onSubmit}>
            {error ? (
              <div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-md p-2">{error}</div>
            ) : null}
            <div>
              <label className="block text-sm mb-1 text-slate-700">Usuario</label>
              <div className="relative">
                <Mail className="size-4 absolute left-2 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="admin@empresa"
                  className="w-full pl-8 pr-3 py-2 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#10a8f7] bg-white text-sm"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm mb-1 text-slate-700">Contraseña</label>
              <div className="relative">
                <Lock className="size-4 absolute left-2 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-8 pr-3 py-2 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#10a8f7] bg-white text-sm"
                />
              </div>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full px-3 py-2 text-sm rounded-md text-white disabled:opacity-50"
              style={{ background: '#0e5fac' }}
            >
              {loading ? 'Ingresando…' : 'Ingresar'}
            </button>
            <p className="text-xs text-slate-500">
              Consejo: usa las pestañas para seleccionar tu rol (Admin, Maestro, Padre).
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}


