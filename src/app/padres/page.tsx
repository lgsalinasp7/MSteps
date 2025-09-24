"use client";
import React from 'react';
import { RequireRole } from '@/components/auth/RequireRole';
import { ParentDashboard } from '@/components/padres/ParentDashboard';

export const dynamic = 'force-dynamic';

export default function PadresPage() {
  return (
    <RequireRole role="parent">
      <ParentDashboard />
    </RequireRole>
  );
}
