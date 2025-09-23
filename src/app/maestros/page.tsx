"use client";
import React from 'react';

export const dynamic = 'force-dynamic';
import { RequireRole } from '@/components/auth/RequireRole';
import { TeacherDashboard } from '@/components/maestros/TeacherDashboard';

export default function MaestrosPage() {
  return (
    <RequireRole role="teacher">
      <TeacherDashboard />
    </RequireRole>
  );
}


