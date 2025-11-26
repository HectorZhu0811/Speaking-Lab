
import React from 'react';
import { CardData } from '../types';

interface FlipCardProps {
  data: CardData;
  index: number;
  onClick: () => void;
  showTitle: boolean;
}

const FlipCard: React.FC<FlipCardProps> = ({ data, index, onClick, showTitle }) => {
  return (
    <div 
      className="group w-full h-80 md:h-96 perspective-1000 cursor-pointer select-none"
      onClick={onClick}
    >
      <div className="relative w-full h-full transform transition-transform duration-300 group-hover:-translate-y-2 group-active:scale-95">
        
        {/* Card Visual */}
        <div className={`absolute inset-0 rounded-3xl shadow-xl shadow-slate-200/50 overflow-hidden flex flex-col items-center justify-between p-6 text-center text-white ${data.visuals.gradient} border-4 border-white ring-1 ring-slate-900/5`}>
          
          {/* Pattern Overlay */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
          
          {/* Type Badge */}
          <div className="relative z-20 w-full flex justify-end">
            <span className="px-3 py-1.5 bg-black/20 backdrop-blur-md rounded-lg text-xs font-bold text-white/90 border border-white/10 shadow-sm uppercase tracking-wider">
              {data.type}
            </span>
          </div>

          {/* Main Visual Content */}
          <div className="relative z-10 flex flex-col items-center justify-center flex-1 gap-6 w-full px-2">
             <span className="text-7xl md:text-8xl drop-shadow-2xl filter transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
               {data.visuals.emoji}
             </span>
             
             {/* Title - Only show if showTitle is true (Practice Mode) */}
             {showTitle && (
               <h3 className="text-xl md:text-2xl font-bold leading-tight drop-shadow-md line-clamp-3 animate-in fade-in zoom-in duration-300">
                 {data.title}
               </h3>
             )}
          </div>

          {/* Hover Hint */}
          <div className="relative z-10 h-8">
            <div className="opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
              <span className="px-6 py-2 bg-white/25 backdrop-blur-md rounded-full text-sm font-bold text-white shadow-lg border border-white/40 whitespace-nowrap">
                Tap to Open
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FlipCard;
