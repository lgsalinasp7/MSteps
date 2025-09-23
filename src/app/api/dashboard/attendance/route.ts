import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  const asistencia = [
    { name: 'Lun', valor: 120 },
    { name: 'Mar', valor: 180 },
    { name: 'Mié', valor: 140 },
    { name: 'Jue', valor: 200 },
    { name: 'Vie', valor: 160 },
    { name: 'Sáb', valor: 220 },
    { name: 'Dom', valor: 260 },
  ];
  return NextResponse.json({ asistencia });
}


