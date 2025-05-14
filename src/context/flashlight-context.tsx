'use client';

import { createContext, useContext, useState } from 'react';

type FlashlightContextType = {
  enabled: boolean;
  toggle: () => void;
};

const FlashlightContext = createContext<FlashlightContextType | undefined>(undefined);

export const FlashlightProvider = ({ children }: { children: React.ReactNode }) => {
  const [enabled, setEnabled] = useState(true);
  const toggle = () => setEnabled((prev) => !prev);

  return (
    <FlashlightContext.Provider value={{ enabled, toggle }}>
      {children}
    </FlashlightContext.Provider>
  );
};

export const useFlashlight = () => {
  const context = useContext(FlashlightContext);
  if (!context) throw new Error('useFlashlight must be used within FlashlightProvider');
  return context;
};
