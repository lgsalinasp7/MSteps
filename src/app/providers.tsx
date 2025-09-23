"use client";
import React from 'react';
import { AuthProvider } from '@/hooks/useAuth';
import { RootDnd } from '@/dnd-kit/RootDnd';
import { DragStateProvider } from '@/dnd-kit/DragStateContext';
import { MoveProvider } from '@/dnd-kit/MoveContext';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <MoveProvider>
        <DragStateProvider>
          <RootDnd>
            {children}
          </RootDnd>
        </DragStateProvider>
      </MoveProvider>
    </AuthProvider>
  );
}


