"use client";
import React from 'react';

export const dynamic = 'force-dynamic';
import { RequireRole } from '@/components/auth/RequireRole';
import { MasterstepsAdminDashboard } from '@/components/generated/MasterstepsAdminDashboard';

export default function DashboardPage() {
  return (
    <RequireRole role="admin">
      <MasterstepsAdminDashboard />
    </RequireRole>
  );
}


