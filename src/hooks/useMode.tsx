import { useEffect, useState } from 'react';

export type Mode = 'fullstack' | 'datascientist';

const STORAGE_KEY = 'portfolio_mode';

export default function useMode() {
  const [mode, setMode] = useState<Mode>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw === 'datascientist') return 'datascientist';
    } catch (e) {
      // ignore
    }
    return 'fullstack';
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, mode);
    } catch (e) {
      // ignore
    }
  }, [mode]);

  return { mode, setMode } as const;
}
