"use client";
import React from 'react';
import { RequireRole } from '@/components/auth/RequireRole';

export const dynamic = 'force-dynamic';

export default function ProfilePage() {
  return (
    <RequireRole role="admin">
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-xl font-semibold mb-2">Perfil</h1>
        <p className="text-sm text-slate-600">Sección en construcción.</p>
      </div>
    </RequireRole>
  );
}


