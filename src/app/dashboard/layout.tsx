import React from 'react';
import { RequireRole } from '@/components/auth/RequireRole';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <RequireRole role="admin">
      <div className="min-h-screen w-full bg-slate-50">
        {children}
      </div>
    </RequireRole>
  );
}


