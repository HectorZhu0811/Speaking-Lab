import React, { useState } from 'react';
import { CardData, PartType, ContentItem } from '../types';
import { X, RotateCcw, ArrowRight, Lightbulb, Sparkles, Eye, EyeOff, MessageCircle, ListChecks } from 'lucide-react';
import Part2Timer from './Part2Timer';

interface FocusModalProps {
  data: CardData;
  onClose: () => void;
  hideSamples?: boolean;
}

const FocusModal: React.FC<FocusModalProps> = ({ data, onClose, hideSamples = false }) => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [showSample, setShowSample] = useState(false); // Toggle for interactive mode sample
  const [visibleSamples, setVisibleSamples] = useState<number[]>([]); // Toggle set for static mode samples

  // Part 1 and Part 3 (when standalone) are interactive Q&A sessions
  const isInteractive = data.type === PartType.PART1 || (data.type === PartType.PART3 && !data.content.some(c => c.type === 'prompt'));

  const handleNext = () => {
    if (questionIndex < data.content.length - 1) {
      setQuestionIndex(prev => prev + 1);
      setShowSample(false); // Reset sample visibility for next question
    }
  };

  const toggleStaticSample = (index: number) => {
    setVisibleSamples(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-slate-900/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white w-full max-w-3xl rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-full animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className={`p-6 md:p-8 ${data.visuals.gradient} text-white flex justify-between items-start shrink-0 shadow-md z-10`}>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3 opacity-90 flex-wrap">
               <span className="bg-black/20 px-3 py-1 rounded-full text-xs font-bold tracking-wide backdrop-blur-md border border-white/20 uppercase">
                 {data.type}
               </span>
               {data.category && (
                 <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-bold tracking-wide backdrop-blur-md border border-white/20 uppercase">
                   {data.category}
                 </span>
               )}
            </div>
            <h2 className="text-2xl md:text-3xl font-bold leading-tight pr-4 drop-shadow-sm">{data.title}</h2>
          </div>
          <button 
            onClick={onClose}
            className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors backdrop-blur-md border border-white/10 shadow-lg ml-2"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Content Scrollable Area */}
        <div className="overflow-y-auto flex-1 bg-slate-50 scrollbar-thin">
          
          <div className="p-6 md:p-10 min-h-[300px] flex flex-col">
            
            {isInteractive ? (
              // Interactive Mode (One question at a time)
              <div className="flex-1 flex flex-col justify-center items-center text-center mb-12">
                <div className="mb-8">
                  <span className="text-indigo-600 font-bold tracking-widest text-xs uppercase bg-indigo-100 px-4 py-1.5 rounded-full">
                    Question {questionIndex + 1} of {data.content.length}
                  </span>
                </div>

                <div className="space-y-8 max-w-xl flex-1 flex flex-col items-center w-full">
                  <p className="text-2xl md:text-3xl font-medium text-slate-800 leading-tight animate-in slide-in-from-bottom-4 duration-500 key={questionIndex}">
                    {data.content[questionIndex].text}
                  </p>

                  {/* Interactive Sample Answer Toggle - Hidden in Full Exam */}
                  {!hideSamples && data.content[questionIndex].sampleAnswer && (
                    <div className="w-full max-w-lg">
                      <button 
                        onClick={() => setShowSample(!showSample)}
                        className="flex items-center gap-2 mx-auto text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors mb-4"
                      >
                        {showSample ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        {showSample ? 'Hide Sample Answer' : 'Show Sample Answer'}
                      </button>
                      
                      {showSample && (
                        <div className="bg-amber-50 border border-amber-100 rounded-xl p-6 text-left text-slate-700 leading-relaxed shadow-sm animate-in fade-in slide-in-from-top-2 duration-300">
                          <div className="flex items-start gap-3">
                            <MessageCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                            <p>{data.content[questionIndex].sampleAnswer}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
                
                <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center pt-12 mt-auto">
                   {questionIndex < data.content.length - 1 ? (
                     <button 
                       onClick={handleNext}
                       className="w-full sm:w-auto flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all shadow-xl shadow-indigo-200 active:scale-95 transform hover:-translate-y-1"
                     >
                       <span>Next Question</span>
                       <ArrowRight className="w-5 h-5" />
                     </button>
                   ) : (
                     <button 
                       onClick={onClose}
                       className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 px-8 py-4 rounded-2xl font-bold text-lg transition-all shadow-md border border-slate-200 active:scale-95"
                     >
                       <RotateCcw className="w-5 h-5" />
                       <span>Close Topic</span>
                     </button>
                   )}
                </div>
              </div>
            ) : (
              // Standard Mode (Part 2 Full View with Part 3 list)
              <div className="space-y-6 max-w-3xl mx-auto w-full mb-12">
                 {data.content.map((item, idx) => {
                   
                   if (item.type === 'divider') {
                     return (
                       <div key={`divider-${idx}`} className="py-8">
                         <div className="h-px bg-indigo-200 w-full mb-8 relative overflow-visible">
                            <div className="absolute left-1/2 -top-3 -translate-x-1/2 bg-slate-50 px-4 text-indigo-400">
                              ✻
                            </div>
                         </div>
                         <h3 className="text-xl font-bold text-indigo-900 mb-6 flex items-center gap-3 bg-indigo-50 p-4 rounded-xl border border-indigo-100">
                           <div className="bg-indigo-600 p-1.5 rounded-lg">
                              <Lightbulb className="w-4 h-4 text-white" />
                           </div>
                           Part 3 Follow-up Questions
                         </h3>
                       </div>
                     );
                   }

                   // Part 2 Prompt
                   if (item.type === 'prompt') {
                     return (
                        <div key={idx}>
                           {/* Part 2 Timer (Exam Mode Only) */}
                           {hideSamples && (
                             <div className="mb-6">
                               <Part2Timer />
                             </div>
                           )}

                           <div className="bg-white p-6 md:p-8 rounded-2xl border-l-4 border-indigo-500 shadow-sm mb-8">
                             <span className="text-indigo-500 font-bold text-xs uppercase tracking-wider mb-3 block">Topic Cue Card</span>
                             <p className="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed mb-6">
                               {item.text}
                             </p>
                             {item.bullets && (
                               <ul className="space-y-2 mb-6 text-slate-600 list-disc pl-5">
                                 {item.bullets.map((bullet, bIdx) => (
                                   <li key={bIdx}>{bullet}</li>
                                 ))}
                               </ul>
                             )}
                             
                             {/* Sample Structure for Part 2 - Hidden in Full Exam */}
                             {!hideSamples && item.sampleStructure && (
                               <div className="mt-6 pt-6 border-t border-slate-100">
                                 <button 
                                   onClick={() => toggleStaticSample(idx)}
                                   className="flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors"
                                 >
                                   {visibleSamples.includes(idx) ? <EyeOff className="w-4 h-4" /> : <ListChecks className="w-4 h-4" />}
                                   {visibleSamples.includes(idx) ? 'Hide Sample Structure' : 'Show Sample Structure'}
                                 </button>
                                 
                                 {visibleSamples.includes(idx) && (
                                   <div className="mt-4 bg-gradient-to-br from-indigo-50 to-white border border-indigo-100 rounded-xl p-5 shadow-sm animate-in fade-in slide-in-from-top-2 duration-200">
                                      <div className="flex items-center gap-2 mb-4 text-indigo-700">
                                         <Sparkles className="w-4 h-4" />
                                         <h5 className="font-bold text-sm uppercase tracking-wide">Sample Structure & Keywords</h5>
                                      </div>
                                      <div className="space-y-4">
                                        {item.sampleStructure.map((struct, sIdx) => (
                                          <div key={sIdx} className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4 p-3 rounded-lg bg-white/50 border border-indigo-50/50">
                                            <div className="sm:w-1/3 text-xs font-bold text-slate-500 uppercase tracking-tight pt-1">
                                              {struct.cue}
                                            </div>
                                            <div className="sm:w-2/3 flex flex-wrap gap-2">
                                              {struct.keywords.map((kw, kIdx) => (
                                                <span key={kIdx} className="inline-flex items-center px-2 py-1 rounded-md text-sm bg-indigo-50 text-indigo-900 border border-indigo-100 hover:bg-indigo-100 transition-colors cursor-default">
                                                  <span className="font-semibold">{kw.term}</span>
                                                  <span className="mx-1.5 w-px h-3 bg-indigo-300"></span>
                                                  <span className="text-slate-500 text-xs">{kw.translation}</span>
                                                </span>
                                              ))}
                                            </div>
                                          </div>
                                        ))}
                                      </div>
                                   </div>
                                 )}
                               </div>
                             )}
                          </div>
                        </div>
                     );
                   }
                   
                   // Part 3 Question List Item
                   return (
                     <div key={idx} className="group bg-white rounded-xl p-5 border border-slate-100 hover:shadow-md transition-shadow">
                       <div className="flex items-start gap-4">
                         <span className="mt-1.5 w-6 h-6 flex items-center justify-center bg-slate-100 text-slate-500 rounded-full text-xs font-bold shrink-0 group-hover:bg-indigo-100 group-hover:text-indigo-600 transition-colors">
                           ?
                         </span>
                         <div className="flex-1">
                            <p className="text-lg text-slate-700 font-medium leading-relaxed mb-2">{item.text}</p>
                            
                            {/* Sample Answer - Hidden in Full Exam */}
                            {!hideSamples && item.sampleAnswer && (
                              <div>
                                <button 
                                   onClick={() => toggleStaticSample(idx)}
                                   className="text-xs font-semibold text-slate-400 hover:text-indigo-600 transition-colors flex items-center gap-1 mt-2"
                                 >
                                   {visibleSamples.includes(idx) ? 'Hide Answer' : 'Show Answer'}
                                 </button>
                                 {visibleSamples.includes(idx) && (
                                   <p className="mt-3 text-slate-600 bg-slate-50 p-3 rounded-lg text-sm leading-relaxed border border-slate-100 animate-in fade-in duration-200">
                                     <span className="font-semibold text-slate-400 block text-xs uppercase mb-1">Sample:</span>
                                     {item.sampleAnswer}
                                   </p>
                                 )}
                              </div>
                            )}
                         </div>
                       </div>
                     </div>
                   );
                 })}
              </div>
            )}

            {/* Vocabulary Section - Hidden in Full Exam */}
            {!hideSamples && data.vocabulary && data.vocabulary.length > 0 && (
              <div className="mt-auto pt-8 border-t border-slate-200">
                 <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                    <div className="flex items-center gap-2 mb-4 text-indigo-600">
                       <Sparkles className="w-5 h-5" />
                       <h4 className="font-bold text-sm uppercase tracking-wider">Topic Related Expressions</h4>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                       {data.vocabulary.map((item, idx) => (
                         <div key={idx} className="flex items-center justify-between px-4 py-2 bg-slate-50 rounded-lg border border-slate-100 hover:border-indigo-100 hover:bg-indigo-50/50 transition-colors">
                           <span className="font-semibold text-slate-700">{item.term}</span>
                           <span className="text-slate-500 text-sm">{item.translation}</span>
                         </div>
                       ))}
                    </div>
                 </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default FocusModal;