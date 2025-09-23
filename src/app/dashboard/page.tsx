"use client";
import React from 'react';

export const dynamic = 'force-dynamic';
import { RequireAdmin } from '@/components/auth/RequireAdmin';
import { MasterstepsAdminDashboard } from '@/components/generated/MasterstepsAdminDashboard';

export default function DashboardPage() {
  return (
    <RequireAdmin>
      <MasterstepsAdminDashboard />
    </RequireAdmin>
  );
}


