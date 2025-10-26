import { useMode } from '@/context/ModeContext';

export default function ModeSwitch() {
  const { mode, setMode } = useMode();

  return (
    <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 rounded-md p-1">
      <button
        aria-label="Full Stack mode"
        type="button"
        onClick={() => {
          // debug log to help trace clicks
          console.debug('ModeSwitch: setting mode -> fullstack');
          setMode('fullstack');
        }}
        className={`px-3 py-1 rounded-md text-sm ${mode === 'fullstack' ? 'text-white' : 'text-slate-600 dark:text-slate-300'}`}
        style={mode === 'fullstack' ? { backgroundColor: 'hsl(var(--primary))' } : undefined}
      >
        Full Stack Web Developer
      </button>
      <button
        aria-label="Data Scientist mode"
        type="button"
        onClick={() => {
          console.debug('ModeSwitch: setting mode -> datascientist');
          setMode('datascientist');
        }}
        className={`px-3 py-1 rounded-md text-sm ${mode === 'datascientist' ? 'text-white' : 'text-slate-600 dark:text-slate-300'}`}
        style={mode === 'datascientist' ? { backgroundColor: 'hsl(var(--primary))' } : undefined}
      >
        Data Scientist
      </button>
    </div>
  );
}
