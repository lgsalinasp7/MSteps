"use client";
import { useEffect, useState } from 'react';
import { fetchAttendance, fetchDashboardStats, fetchParticipation } from '@/lib/api/dashboard';

export function useDashboardData() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [stats, setStats] = useState<{ label: string; value: string }[]>([]);
  const [asistencia, setAsistencia] = useState<{ name: string; valor: number }[]>([]);
  const [participacion, setParticipacion] = useState<{ name: string; niños: number; maestros: number }[]>([]);

  useEffect(() => {
    let cancelled = false;
    async function run() {
      setLoading(true);
      setError(null);
      try {
        const [s, a, p] = await Promise.all([
          fetchDashboardStats(),
          fetchAttendance(),
          fetchParticipation(),
        ]);
        if (cancelled) return;
        setStats(s.stats);
        setAsistencia(a.asistencia);
        setParticipacion(p.participacion);
      } catch (err) {
        if (!cancelled) setError((err as Error).message);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    run();
    return () => { cancelled = true; };
  }, []);

  return { loading, error, stats, asistencia, participacion };
}


