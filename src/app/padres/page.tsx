"use client";
import React from 'react';

export const dynamic = 'force-dynamic';
import { RequireRole } from '@/components/auth/RequireRole';
import { ParentDashboard } from '@/components/padres/ParentDashboard';

export default function PadresPage() {
  return (
    <RequireRole role="parent">
      <ParentDashboard />
    </RequireRole>
  );
}
