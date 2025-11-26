
import React, { useState, useCallback, useEffect } from 'react';
import Header from './components/Header';
import FlipCard from './components/FlipCard';
import FocusModal from './components/FocusModal';
import GlobalTimer from './components/GlobalTimer';
import { PART1_TOPICS, PART23_TOPICS } from './data';
import { PartType, CardData, TopicPart23, ContentItem, AppMode } from './types';
import { RefreshCw, Layers, Mic2, MessageCircle, Dices, BookOpen, GraduationCap, PlayCircle } from 'lucide-react';

// Visual assets
const GRADIENTS = [
  'bg-gradient-to-br from-orange-400 to-rose-500 shadow-orange-200',
  'bg-gradient-to-br from-blue-400 to-indigo-600 shadow-blue-200',
  'bg-gradient-to-br from-emerald-400 to-teal-600 shadow-emerald-200',
  'bg-gradient-to-br from-violet-500 to-purple-600 shadow-violet-200',
  'bg-gradient-to-br from-pink-400 to-fuchsia-600 shadow-pink-200',
  'bg-gradient-to-br from-amber-400 to-orange-500 shadow-amber-200',
  'bg-gradient-to-br from-cyan-400 to-blue-500 shadow-cyan-200',
  'bg-gradient-to-br from-rose-400 to-red-500 shadow-rose-200',
  'bg-gradient-to-br from-fuchsia-500 to-pink-600 shadow-fuchsia-200',
];

const EMOJIS = [
  '🌟', '🍀', '🎨', '🎲', '🎯', '🎪', '🎭', '🎢', 
  '🎡', '🎠', '🌈', '🔥', '✨', '💡', '🎈', '🎁',
  '🧩', '🎹', '🎷', '🎸', '🚀', '🛸', '🦁', '🐼',
  '🐯', '🦊', '🦄', '🦋', '🌻', '🌍', '🌙', '⭐'
];

const getRandomIndices = (total: number, count: number) => {
  const indices = new Set<number>();
  while (indices.size < Math.min(count, total)) {
    indices.add(Math.floor(Math.random() * total));
  }
  return Array.from(indices);
};

const getRandomVisuals = () => ({
  gradient: GRADIENTS[Math.floor(Math.random() * GRADIENTS.length)],
  emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)]
});

const App: React.FC = () => {
  const [mode, setMode] = useState<AppMode>('mock');
  const [selectedPart, setSelectedPart] = useState<PartType>(PartType.PART1);
  const [currentCards, setCurrentCards] = useState<CardData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [activeCard, setActiveCard] = useState<CardData | null>(null);
  
  // Exam State
  const [examStarted, setExamStarted] = useState(false);

  const generateCards = useCallback(() => {
    setIsLoading(true);
    setActiveCard(null);

    // Small delay for visual effect
    setTimeout(() => {
      let newCards: CardData[] = [];

      if (mode === 'full-exam') {
        // Full Exam: 3 Part 1 Topics + 1 Part 2 Topic (inc Part 3)
        const p1Indices = getRandomIndices(PART1_TOPICS.length, 3);
        const p1Cards = p1Indices.map(idx => {
          const topic = PART1_TOPICS[idx];
          return {
            id: topic.id,
            title: topic.title,
            content: topic.questions.map(q => ({ type: 'question', text: q.text })), // No sample answers
            type: PartType.PART1,
            visuals: getRandomVisuals(),
            vocabulary: [] // No vocab in exam mode
          } as CardData;
        });

        const p2Index = getRandomIndices(PART23_TOPICS.length, 1)[0];
        const topic = PART23_TOPICS[p2Index];
        const content: ContentItem[] = [];
        
        // Add Part 2 Prompt
        content.push({
          type: 'prompt',
          text: topic.part2.prompt,
          bullets: topic.part2.bullets,
        });
        
        // Divider
        content.push({ type: 'divider', text: '' });

        // Add Part 3 Questions
        topic.part3.questions.forEach(q => {
          content.push({
            type: 'question',
            text: q.text,
          });
        });

        const p2Card: CardData = {
          id: topic.id,
          title: topic.title,
          content: content,
          type: PartType.PART2,
          category: topic.category,
          visuals: getRandomVisuals(),
          vocabulary: [] // No vocab in exam mode
        };

        newCards = [...p1Cards, p2Card];

      } else if (selectedPart === PartType.PART1) {
        let indices: number[] = [];
        if (mode === 'mock') {
          indices = getRandomIndices(PART1_TOPICS.length, 3);
        } else {
          // Practice mode: load all topics
          indices = Array.from({ length: PART1_TOPICS.length }, (_, i) => i);
        }
        
        newCards = indices.map(idx => {
          const topic = PART1_TOPICS[idx];
          const content: ContentItem[] = topic.questions.map(q => ({
            type: 'question',
            text: q.text,
            sampleAnswer: q.sampleAnswer
          }));

          return {
            id: topic.id,
            title: topic.title,
            content: content,
            type: PartType.PART1,
            visuals: getRandomVisuals(),
            vocabulary: topic.vocabulary || []
          };
        });
      } else {
        let indices: number[] = [];
        if (mode === 'mock') {
          indices = getRandomIndices(PART23_TOPICS.length, 3);
        } else {
          // Practice mode: load all topics
          indices = Array.from({ length: PART23_TOPICS.length }, (_, i) => i);
        }

        newCards = indices.map(idx => {
          const topic: TopicPart23 = PART23_TOPICS[idx];
          let content: ContentItem[] = [];

          if (selectedPart === PartType.PART2) {
             // Construct rich content: Prompt -> Divider -> Part 3 Questions
             content.push({
               type: 'prompt',
               text: topic.part2.prompt,
               bullets: topic.part2.bullets,
               sampleStructure: topic.part2.sampleStructure
             });
             
             content.push({ type: 'divider', text: '' });

             topic.part3.questions.forEach(q => {
               content.push({
                 type: 'question',
                 text: q.text,
                 sampleAnswer: q.sampleAnswer
               });
             });

          } else {
             // Just Part 3 Questions
             content = topic.part3.questions.map(q => ({
               type: 'question',
               text: q.text,
               sampleAnswer: q.sampleAnswer
             }));
          }

          return {
            id: topic.id,
            title: topic.title,
            content: content,
            type: selectedPart,
            category: topic.category,
            visuals: getRandomVisuals(),
            vocabulary: topic.vocabulary || []
          };
        });
      }

      setCurrentCards(newCards);
      setIsLoading(false);
    }, 300);
  }, [selectedPart, mode]);

  // Initial load or reset
  useEffect(() => {
    if (mode === 'full-exam') {
      setExamStarted(false);
      setCurrentCards([]);
    } else {
      generateCards();
    }
  }, [selectedPart, mode, generateCards]);

  const startExam = () => {
    setExamStarted(true);
    generateCards();
  };

  const TabButton = ({ part, icon: Icon }: { part: PartType; icon: any }) => (
    <button
      onClick={() => setSelectedPart(part)}
      className={`flex items-center space-x-2 px-5 py-3 rounded-xl text-sm font-bold transition-all duration-200 border-2 ${
        selectedPart === part
          ? 'bg-slate-800 text-white border-slate-800 shadow-lg transform -translate-y-0.5'
          : 'bg-white text-slate-500 border-transparent hover:bg-slate-100 hover:text-slate-700'
      }`}
    >
      <Icon className="w-4 h-4" />
      <span>{part}</span>
    </button>
  );

  const ModeButton = ({ m, icon: Icon, label }: { m: AppMode; icon: any; label: string }) => (
    <button
      onClick={() => {
        setMode(m);
        // If switching to full-exam, we don't use part selector, but resetting state helps clarity
        if (m === 'full-exam') setSelectedPart(PartType.PART1); 
      }}
      className={`flex-1 flex items-center justify-center space-x-2 py-3 rounded-xl text-sm font-bold transition-all duration-200 ${
        mode === m
          ? 'bg-indigo-600 text-white shadow-md'
          : 'bg-transparent text-slate-500 hover:bg-slate-100'
      }`}
    >
      <Icon className="w-4 h-4" />
      <span>{label}</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans pb-12 selection:bg-indigo-100 selection:text-indigo-900">
      <Header />
      
      {/* Global Exam Timer */}
      {mode === 'full-exam' && (
        <GlobalTimer 
          running={examStarted} 
          minimized={activeCard !== null} 
        />
      )}

      <main className="max-w-6xl mx-auto px-4 mt-8">
        
        {/* Top Bar: Mode Switcher and Controls */}
        <div className="flex flex-col gap-6 mb-10">
          
          {/* Mode Switcher */}
          <div className="self-center bg-white p-1.5 rounded-2xl border border-slate-200 shadow-sm w-full max-w-lg flex overflow-x-auto">
            <ModeButton m="mock" icon={Dices} label="Partial Mock" />
            <ModeButton m="full-exam" icon={GraduationCap} label="Full Mock Exam" />
            <ModeButton m="practice" icon={BookOpen} label="Practice All" />
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            
            {/* Part Selectors - Hide in Full Exam Mode */}
            {mode !== 'full-exam' ? (
              <div className="flex space-x-2 bg-white p-1.5 rounded-2xl border border-slate-200 shadow-sm self-start md:self-auto overflow-x-auto max-w-full">
                <TabButton part={PartType.PART1} icon={MessageCircle} />
                <TabButton part={PartType.PART2} icon={Layers} />
                <TabButton part={PartType.PART3} icon={Mic2} />
              </div>
            ) : (
               <div className="text-lg font-bold text-slate-700 flex items-center gap-2">
                 <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-lg text-sm">Exam Mode</span>
                 <span>3x Part 1 + 1x Part 2/3</span>
               </div>
            )}

            {/* Draw Button (For Mock & Full Exam) */}
            {mode !== 'practice' && mode !== 'full-exam' && (
              <button
                onClick={generateCards}
                disabled={isLoading}
                className="group flex items-center justify-center space-x-2 bg-slate-900 hover:bg-slate-800 text-white px-8 py-3.5 rounded-2xl font-bold shadow-lg shadow-slate-200 transition-all active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed ml-auto md:ml-0 w-full md:w-auto"
              >
                <RefreshCw className={`w-5 h-5 ${isLoading ? 'animate-spin' : 'group-hover:rotate-180 transition-transform duration-500'}`} />
                <span>Shuffle Topics</span>
              </button>
            )}
             
             {/* Count badge for Practice mode */}
             {mode === 'practice' && (
               <div className="flex items-center space-x-2 text-slate-400 text-sm font-medium px-4 ml-auto">
                 <span>Showing all {currentCards.length} topics</span>
               </div>
             )}
          </div>
        </div>

        {/* Full Exam Start Screen */}
        {mode === 'full-exam' && !examStarted && (
          <div className="flex flex-col items-center justify-center min-h-[400px] bg-white rounded-3xl border border-slate-200 shadow-sm p-8 text-center animate-in zoom-in-95 duration-300">
             <div className="bg-indigo-50 p-6 rounded-full mb-6">
                <GraduationCap className="w-16 h-16 text-indigo-600" />
             </div>
             <h2 className="text-3xl font-bold text-slate-800 mb-4">Full Mock Exam</h2>
             <p className="text-slate-500 max-w-md mb-10 text-lg">
               You will be presented with 3 random Part 1 topics and 1 Part 2 topic (with follow-up Part 3 questions). 
               A global timer will track your total session time.
             </p>
             <button 
               onClick={startExam}
               className="flex items-center gap-3 bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-4 rounded-2xl font-bold text-xl shadow-xl shadow-indigo-200 hover:scale-105 active:scale-95 transition-all"
             >
               <PlayCircle className="w-6 h-6" />
               Start Exam
             </button>
          </div>
        )}

        {/* Cards Grid */}
        {((mode === 'full-exam' && examStarted) || mode !== 'full-exam') && (
          <div className={`grid gap-6 md:gap-10 ${mode === 'practice' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : 'grid-cols-1 md:grid-cols-3'}`}>
            {currentCards.map((card, index) => (
              <div 
                key={`${card.id}-${index}-${selectedPart}-${mode}`} 
                className={`transition-all duration-500 ${isLoading ? 'opacity-0 translate-y-8 scale-95' : 'opacity-100 translate-y-0 scale-100'}`}
                style={{ transitionDelay: `${Math.min(index * 50, 1000)}ms` }}
              >
                <FlipCard 
                  data={card} 
                  onClick={() => setActiveCard(card)}
                  showTitle={mode === 'practice'} 
                />
              </div>
            ))}
          </div>
        )}

      </main>

      {/* Focus Modal */}
      {activeCard && (
        <FocusModal 
          data={activeCard} 
          onClose={() => setActiveCard(null)} 
          hideSamples={mode === 'full-exam'}
        />
      )}
    </div>
  );
};

export default App;
