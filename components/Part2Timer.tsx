import React, { useState, useEffect } from 'react';
import { Play, RotateCcw, Mic, BrainCircuit } from 'lucide-react';

type TimerMode = 'idle' | 'prep' | 'talk';

const Part2Timer: React.FC = () => {
  const [mode, setMode] = useState<TimerMode>('idle');
  const [timeLeft, setTimeLeft] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
    }

    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  const startPrep = () => {
    setMode('prep');
    setTimeLeft(60); // 1 minute
    setIsActive(true);
  };

  const startTalk = () => {
    setMode('talk');
    setTimeLeft(120); // 2 minutes
    setIsActive(true);
  };

  const reset = () => {
    setIsActive(false);
    setMode('idle');
    setTimeLeft(0);
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  const getProgressColor = () => {
    if (mode === 'idle') return 'bg-slate-200';
    const total = mode === 'prep' ? 60 : 120;
    const percentage = timeLeft / total;
    if (percentage < 0.2) return 'bg-red-500';
    if (percentage < 0.5) return 'bg-amber-500';
    return mode === 'prep' ? 'bg-blue-500' : 'bg-emerald-500';
  };

  return (
    <div className="bg-white rounded-xl border-2 border-slate-100 p-4 shadow-sm w-full">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider flex items-center gap-2">
          Part 2 Timer
        </h4>
        <button 
          onClick={reset}
          className="text-slate-400 hover:text-slate-600 transition-colors p-1"
          title="Reset Timer"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>

      <div className="flex flex-col items-center justify-center py-2 mb-6 relative">
         {/* Timer Display */}
         <div className={`text-5xl font-mono font-bold tracking-tighter mb-2 ${timeLeft < 10 && isActive ? 'text-red-500 animate-pulse' : 'text-slate-800'}`}>
           {mode === 'idle' ? '0:00' : formatTime(timeLeft)}
         </div>
         
         {/* Status Badge */}
         <div className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${
           mode === 'prep' ? 'bg-blue-100 text-blue-700' : 
           mode === 'talk' ? 'bg-emerald-100 text-emerald-700' : 
           'bg-slate-100 text-slate-500'
         }`}>
           {mode === 'prep' ? 'Preparation Time' : mode === 'talk' ? 'Speaking Time' : 'Ready to Start'}
         </div>

         {/* Progress Bar */}
         {mode !== 'idle' && (
           <div className="absolute -bottom-2 w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
             <div 
               className={`h-full transition-all duration-1000 ease-linear ${getProgressColor()}`} 
               style={{ width: `${(timeLeft / (mode === 'prep' ? 60 : 120)) * 100}%` }}
             />
           </div>
         )}
      </div>

      <div className="grid grid-cols-2 gap-3">
        <button
          onClick={startPrep}
          disabled={isActive}
          className={`flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-bold text-sm transition-all ${
            mode === 'prep' && isActive
              ? 'bg-blue-600 text-white ring-2 ring-blue-200'
              : 'bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200'
          } disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          <BrainCircuit className="w-4 h-4" />
          <span>1 Min Prep</span>
        </button>

        <button
          onClick={startTalk}
          disabled={isActive && mode === 'talk'} // Allow switching from Prep to Talk immediately
          className={`flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-bold text-sm transition-all ${
            mode === 'talk' && isActive
              ? 'bg-emerald-600 text-white ring-2 ring-emerald-200'
              : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200'
          } disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          <Mic className="w-4 h-4" />
          <span>2 Min Talk</span>
        </button>
      </div>
    </div>
  );
};

export default Part2Timer;