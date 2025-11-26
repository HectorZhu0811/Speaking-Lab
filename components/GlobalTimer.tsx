
import React, { useState, useEffect, useRef } from 'react';
import { Clock } from 'lucide-react';

interface GlobalTimerProps {
  running: boolean;
  minimized: boolean;
}

const GlobalTimer: React.FC<GlobalTimerProps> = ({ running, minimized }) => {
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Handle timer logic
  useEffect(() => {
    if (running) {
      // Reset timer when starting
      if (seconds === 0) {
        setSeconds(0);
      }
      
      intervalRef.current = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      setSeconds(0); // Reset on stop
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [running]);

  const formatTime = (totalSeconds: number) => {
    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;
    
    if (h > 0) {
      return `${h}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    }
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div 
      className={`fixed z-[60] transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] flex items-center gap-3 rounded-full shadow-lg border backdrop-blur-md
        ${minimized 
          ? 'top-4 left-4 px-4 py-2 bg-white/10 border-white/20 text-white' 
          : 'top-[80px] left-1/2 -translate-x-1/2 px-6 py-3 bg-slate-900 border-slate-800 text-white'
        }
      `}
    >
      <div className={`p-1.5 rounded-full transition-colors ${minimized ? 'bg-white/20' : 'bg-indigo-500/20'}`}>
        <Clock className={`w-4 h-4 ${minimized ? 'text-white' : 'text-indigo-400'}`} />
      </div>
      <div className="flex flex-col">
        <span className={`text-[10px] uppercase tracking-wider font-bold leading-none mb-0.5 transition-colors ${minimized ? 'text-white/70' : 'text-slate-400'}`}>
          Total Time
        </span>
        <span className="font-mono text-xl font-bold leading-none tracking-tight">
          {formatTime(seconds)}
        </span>
      </div>
    </div>
  );
};

export default GlobalTimer;
