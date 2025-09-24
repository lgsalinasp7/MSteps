"use client";
import React from 'react';
import { RequireRole } from '@/components/auth/RequireRole';
import { TeacherDashboard } from '@/components/maestros/TeacherDashboard';

export const dynamic = 'force-dynamic';

export default function MaestrosPage() {
  return (
    <RequireRole role="teacher">
      <TeacherDashboard />
    </RequireRole>
  );
}


