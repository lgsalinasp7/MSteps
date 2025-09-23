"use client";
import React from 'react';
import { RequireAdmin } from '@/components/auth/RequireAdmin';

export const dynamic = 'force-dynamic';

export default function SettingsPage() {
  return (
    <RequireAdmin>
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-xl font-semibold mb-2">Ajustes</h1>
        <p className="text-sm text-slate-600">Sección en construcción.</p>
      </div>
    </RequireAdmin>
  );
}


