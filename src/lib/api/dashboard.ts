export async function fetchDashboardStats() {
  const res = await fetch('/api/dashboard/stats', { cache: 'no-store' });
  if (!res.ok) throw new Error('Error obteniendo estadísticas');
  return (await res.json()) as { stats: { label: string; value: string }[] };
}

export async function fetchAttendance() {
  const res = await fetch('/api/dashboard/attendance', { cache: 'no-store' });
  if (!res.ok) throw new Error('Error obteniendo asistencia');
  return (await res.json()) as { asistencia: { name: string; valor: number }[] };
}

export async function fetchParticipation() {
  const res = await fetch('/api/dashboard/participation', { cache: 'no-store' });
  if (!res.ok) throw new Error('Error obteniendo participación');
  return (await res.json()) as { participacion: { name: string; niños: number; maestros: number }[] };
}


