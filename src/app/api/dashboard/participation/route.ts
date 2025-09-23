import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  const participacion = [
    { name: 'Iglesia A', niños: 80, maestros: 12 },
    { name: 'Iglesia B', niños: 65, maestros: 10 },
    { name: 'Iglesia C', niños: 95, maestros: 14 },
    { name: 'Iglesia D', niños: 55, maestros: 9 },
  ];
  return NextResponse.json({ participacion });
}


