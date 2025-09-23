"use client";
import React from 'react';
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

export function AttendanceArea({ data, color }: { data: { name: string; valor: number }[]; color: string }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data}>
        <defs>
          <linearGradient id="grad1" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity={0.6} />
            <stop offset="100%" stopColor={color} stopOpacity={0.05} />
          </linearGradient>
        </defs>
        <CartesianGrid stroke="#eef2f7" vertical={false} />
        <XAxis dataKey="name" stroke="#94a3b8" />
        <YAxis stroke="#94a3b8" />
        <Tooltip />
        <Area type="monotone" dataKey="valor" stroke={color} fill="url(#grad1)" strokeWidth={2} />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export function ParticipationBars({ data, colorA, colorB }: { data: { name: string; niños: number; maestros: number }[]; colorA: string; colorB: string }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data}>
        <CartesianGrid stroke="#eef2f7" vertical={false} />
        <XAxis dataKey="name" stroke="#94a3b8" />
        <YAxis stroke="#94a3b8" />
        <Tooltip />
        <Bar dataKey="niños" fill={colorA} radius={[6, 6, 0, 0]} />
        <Bar dataKey="maestros" fill={colorB} radius={[6, 6, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}


