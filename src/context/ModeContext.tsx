import React, { createContext, useContext, useEffect, useState } from 'react';

export type Mode = 'fullstack' | 'datascientist';

const STORAGE_KEY = 'portfolio_mode';

type ContextShape = {
  mode: Mode;
  setMode: (m: Mode) => void;
};

const ModeContext = createContext<ContextShape | undefined>(undefined);

export function ModeProvider({ children }: { children: React.ReactNode }) {
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
  // debug log to observe mode changes
  console.debug('ModeProvider: mode ->', mode);
      // Update document-level CSS variables and a mode class so the UI can adapt
      try {
        const root = document.documentElement;
        if (mode === 'datascientist') {
          root.classList.add('mode-datascientist');
          root.classList.remove('mode-fullstack');
          // switch primary hue to a lighter green so it's not too dark
          // increased lightness from ~11% to ~35% for better visibility
          root.style.setProperty('--primary', '142 47.4% 35%');
          root.style.setProperty('--primary-foreground', '140 40% 98%');
          // adjust sidebar primary to a slightly lighter accent
          root.style.setProperty('--sidebar-primary', '142 47.4% 44%');
          // muted accent (neutral text) slightly green-tinted for datascientist
          root.style.setProperty('--muted-accent', '150 8% 46%');
          root.style.setProperty('--muted-accent-light', '150 8% 70%');
        } else {
          root.classList.add('mode-fullstack');
          root.classList.remove('mode-datascientist');
          // default primary hue (blue)
          // use Tailwind's blue-600 equivalent so the blue isn't too dark
          // approx HSL for #2563eb (bg-blue-600): 221.2 83.3% 53.4%
          root.style.setProperty('--primary', '221.2 83.3% 53.4%');
          root.style.setProperty('--primary-foreground', '210 40% 98%');
          root.style.setProperty('--sidebar-primary', '221.2 76.3% 48%');
          // muted accent defaults (slate-like)
          root.style.setProperty('--muted-accent', '215.4 16.3% 46.9%');
          root.style.setProperty('--muted-accent-light', '215.4 16.3% 76%');
        }
      } catch (e) {
        // ignore DOM write errors
      }
    } catch (e) {
      // ignore
    }
  }, [mode]);

  return (
    <ModeContext.Provider value={{ mode, setMode }}>
      {children}
    </ModeContext.Provider>
  );
}

export function useMode() {
  const ctx = useContext(ModeContext);
  if (!ctx) {
    throw new Error('useMode must be used within a ModeProvider');
  }
  return ctx;
}
