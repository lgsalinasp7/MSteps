import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 text-slate-900 px-4">
      <div className="max-w-md text-center">
        <h1 className="text-2xl font-semibold mb-2">Página no encontrada</h1>
        <p className="text-sm text-slate-600 mb-4">La ruta que intentas visitar no existe.</p>
        <div className="flex items-center justify-center gap-2">
          <Link href="/login" className="px-3 py-2 text-sm rounded-md border border-slate-200">Ir a Login</Link>
          <Link href="/" className="px-3 py-2 text-sm rounded-md text-white bg-blue-600">Volver al inicio</Link>
        </div>
      </div>
    </div>
  );
}


