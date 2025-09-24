import React, { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Lock, Mail } from 'lucide-react';
import Image from 'next/image';

export default function Login({ onLoginSuccess }: { onLoginSuccess?: () => void }) {
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState<'admin' | 'teacher' | 'parent'>('admin');
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    e.stopPropagation();
    
    // Validaciones estrictas
    if (!username.trim()) {
      setError('Por favor ingresa tu usuario');
      return;
    }
    
    if (!password.trim()) {
      setError('Por favor ingresa tu contraseña');
      return;
    }
    
    if (loading) return; // Prevenir doble envío
    
    setError(null);
    setLoading(true);
    
    try {
      await login({ username: username.trim(), password: password.trim(), preferredRole: role });
      // Llamar al callback después de login exitoso
      onLoginSuccess?.();
    } catch (err) {
      setError((err as Error).message || 'Error al iniciar sesión');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen w-full text-white flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background image sin overlay */}
      <div className="absolute inset-0 -z-10">
        <Image src="/fondo-login.png" alt="Fondo login" fill priority className="object-cover" />
      </div>
      
      <div className="w-full max-w-lg relative z-10">
        {/* Header with prominent logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-white rounded-2xl shadow-2xl mb-4">
            <Image 
              src="/logo.png" 
              alt="Mastersteps Logo" 
              width={64} 
              height={64} 
              className="object-contain"
            />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Mastersteps</h1>
          <p className="text-blue-100 text-lg">Plataforma de Gestión Educativa</p>
        </div>
        
        <div className="rounded-2xl bg-white/95 backdrop-blur-sm shadow-2xl border border-white/20 overflow-hidden relative z-20">
          <div className="p-8">
            <div className="text-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Selecciona tu Rol</h2>
                  <div className="flex gap-3 justify-center">
                    <button 
                      type="button" 
                      onClick={(e) => {
                        e.preventDefault();
                        setRole('admin');
                      }} 
                      className={`px-4 py-2 text-sm rounded-lg font-medium transition-all duration-200 ${
                        role==='admin'
                          ?'bg-blue-600 text-white shadow-lg' 
                          :'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      👑 Admin
                    </button>
                    <button 
                      type="button" 
                      onClick={(e) => {
                        e.preventDefault();
                        setRole('teacher');
                      }} 
                      className={`px-4 py-2 text-sm rounded-lg font-medium transition-all duration-200 ${
                        role==='teacher'
                          ?'bg-orange-500 text-white shadow-lg' 
                          :'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      📚 Maestro
                    </button>
                    <button 
                      type="button" 
                      onClick={(e) => {
                        e.preventDefault();
                        setRole('parent');
                      }} 
                      className={`px-4 py-2 text-sm rounded-lg font-medium transition-all duration-200 ${
                        role==='parent'
                          ?'bg-green-500 text-white shadow-lg' 
                          :'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      👨‍👩‍👧‍👦 Padre
                    </button>
                  </div>
            </div>
            
            <form className="space-y-6" onSubmit={onSubmit}>
              {error ? (
                <div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg p-3">{error}</div>
              ) : null}
              
              <div>
                <label htmlFor="username" className="block text-sm font-medium mb-2 text-gray-700">Usuario</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 size-4 pointer-events-none" />
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    onInput={(e) => setUsername((e.target as HTMLInputElement).value)}
                    placeholder="admin@empresa.com"
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-sm text-gray-900"
                    required
                    autoComplete="username"
                    name="username"
                    id="username"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium mb-2 text-gray-700">Contraseña</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 size-4 pointer-events-none" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onInput={(e) => setPassword((e.target as HTMLInputElement).value)}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-sm text-gray-900"
                    required
                    autoComplete="current-password"
                    name="password"
                    id="password"
                  />
                </div>
              </div>
              
              <button
                type="submit"
                disabled={loading || !username.trim() || !password.trim()}
                className="w-full px-6 py-3 text-sm font-semibold rounded-lg text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                {loading ? 'Ingresando…' : '🚀 Ingresar al Sistema'}
              </button>
              
              <p className="text-xs text-gray-500 text-center">
                Selecciona tu rol y completa tus credenciales para acceder
              </p>
            </form>
        </div>
      </div>
      </div>
    </div>
  );
}
