import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  const stats = [
    { label: 'Niños inscritos', value: '1,200' },
    { label: 'Iglesias activas', value: '25' },
    { label: 'Clases esta semana', value: '5' },
    { label: 'Licencias congregacionales', value: '10' },
  ];
  return NextResponse.json({ stats });
}


