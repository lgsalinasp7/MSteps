import React from 'react';
import { RequireAdmin } from '@/components/auth/RequireAdmin';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <RequireAdmin>
      <div className="min-h-screen w-full bg-slate-50">
        {children}
      </div>
    </RequireAdmin>
  );
}


