import React, { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useAuthTranslations, useCommonTranslations } from '@/hooks/useTranslations';
import { LanguageSelector } from '@/components/shared/LanguageSelector';
import { Lock, Mail } from 'lucide-react';
import Image from 'next/image';

export default function Login({ onLoginSuccess }: { onLoginSuccess?: () => void }) {
  const { login } = useAuth();
  const t = useAuthTranslations();
  const common = useCommonTranslations();
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
      setError(t('usernameRequired'));
      return;
    }
    
    if (!password.trim()) {
      setError(t('passwordRequired'));
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
      setError((err as Error).message || t('loginError'));
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
      
      {/* Language Selector */}
      <div className="absolute top-4 right-4 z-20">
        <LanguageSelector />
      </div>
      
      <div className="w-full max-w-lg relative z-10">
        {/* Header with prominent logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-32 h-32 rounded-2xl shadow-2xl mb-4" style={{ backgroundColor: '#0B317D' }}>
            <Image 
              src="/logo.png" 
              alt="Mastersteps Logo" 
              width={80} 
              height={80} 
              className="object-contain"
            />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Mastersteps</h1>
          <p className="text-blue-100 text-lg">{t('platformTitle')}</p>
        </div>
        
        <div className="rounded-2xl bg-white/95 backdrop-blur-sm shadow-2xl border border-white/20 overflow-hidden relative z-20">
          <div className="p-8">
            <div className="text-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">{t('selectRole')}</h2>
                  <div className="flex gap-3 justify-center">
                    <button 
                      type="button" 
                      onClick={(e) => {
                        e.preventDefault();
                        setRole('admin');
                      }} 
                      className={`px-4 py-2 text-sm rounded-lg font-medium transition-all duration-200 ${
                        role==='admin'
                          ?'text-white shadow-lg' 
                          :'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                      style={role === 'admin' ? { backgroundColor: '#0B317D' } : {}}
                    >
                      👑 {t('admin')}
                    </button>
                    <button 
                      type="button" 
                      onClick={(e) => {
                        e.preventDefault();
                        setRole('teacher');
                      }} 
                      className={`px-4 py-2 text-sm rounded-lg font-medium transition-all duration-200 ${
                        role==='teacher'
                          ?'text-white shadow-lg' 
                          :'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                      style={role === 'teacher' ? { backgroundColor: '#FFB33C' } : {}}
                    >
                      📚 {t('teacher')}
                    </button>
                    <button 
                      type="button" 
                      onClick={(e) => {
                        e.preventDefault();
                        setRole('parent');
                      }} 
                      className={`px-4 py-2 text-sm rounded-lg font-medium transition-all duration-200 ${
                        role==='parent'
                          ?'text-white shadow-lg' 
                          :'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                      style={role === 'parent' ? { backgroundColor: '#f04770' } : {}}
                    >
                      👨‍👩‍👧‍👦 {t('parent')}
                    </button>
                  </div>
            </div>
            
            <form className="space-y-6" onSubmit={onSubmit}>
              {error ? (
                <div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg p-3">{error}</div>
              ) : null}
              
              <div>
                <label htmlFor="username" className="block text-sm font-medium mb-2 text-gray-700">{t('username')}</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 size-4 pointer-events-none" />
                      <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        onInput={(e) => setUsername((e.target as HTMLInputElement).value)}
                        placeholder="admin@empresa.com"
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:border-transparent bg-white text-sm text-gray-900"
                        onFocus={(e) => {
                          e.target.style.borderColor = '#0B317D';
                          e.target.style.boxShadow = `0 0 0 2px #0B317D40`;
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = '#d1d5db';
                          e.target.style.boxShadow = 'none';
                        }}
                    required
                    autoComplete="username"
                    name="username"
                    id="username"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium mb-2 text-gray-700">{t('password')}</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 size-4 pointer-events-none" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onInput={(e) => setPassword((e.target as HTMLInputElement).value)}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:border-transparent bg-white text-sm text-gray-900"
                    onFocus={(e) => {
                      e.target.style.borderColor = '#0B317D';
                      e.target.style.boxShadow = `0 0 0 2px #0B317D40`;
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#d1d5db';
                      e.target.style.boxShadow = 'none';
                    }}
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
                className="w-full px-6 py-3 text-sm font-semibold rounded-lg text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl"
                style={{ 
                  backgroundColor: '#0B317D',
                  backgroundImage: `linear-gradient(135deg, #0B317D, #0B317D)`
                }}
                onMouseEnter={(e) => {
                  if (!loading && username.trim() && password.trim()) {
                    e.currentTarget.style.backgroundColor = '#083063';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#0B317D';
                }}
              >
                {loading ? `${t('loginButton')}...` : `🚀 ${t('loginButton')}`}
              </button>
              
              <p className="text-xs text-gray-500 text-center">
                {t('selectRole')} y completa tus credenciales para acceder
              </p>
            </form>
        </div>
      </div>
      </div>
    </div>
  );
}
