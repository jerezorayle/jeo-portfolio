'use client';

import { useEffect, useState } from 'react';
import { useFlashlight } from '@/context/flashlight-context';

export default function CursorGlow() {
  const { enabled } = useFlashlight();
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveHandler = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', moveHandler);
    return () => window.removeEventListener('mousemove', moveHandler);
  }, []);

  if (!enabled) return null;

  return (
    <div
      className="pointer-events-none fixed z-[-1] h-100 w-100 -translate-x-1/2 -translate-y-1/2 rounded-full bg-zinc-50 opacity-25 blur-[140px] transition-transform duration-75"
      style={{ left: `${pos.x}px`, top: `${pos.y}px` }}
    />
  );
}
