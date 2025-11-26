
export enum PartType {
  PART1 = 'Part 1',
  PART2 = 'Part 2',
  PART3 = 'Part 3'
}

export interface VocabularyItem {
  term: string;
  translation: string;
}

export interface QuestionItem {
  text: string;
  sampleAnswer?: string;
}

export interface Part2StructureItem {
  cue: string;
  keywords: VocabularyItem[];
}

export interface TopicPart1 {
  id: string;
  title: string;
  questions: QuestionItem[];
  vocabulary: VocabularyItem[];
}

export interface TopicPart23 {
  id: string;
  title: string;
  category: string; // e.g., People, Event, Place, Object
  part2: {
    prompt: string;
    bullets: string[];
    sampleStructure?: Part2StructureItem[];
  };
  part3: {
    questions: QuestionItem[];
  };
  vocabulary: VocabularyItem[];
}

export type ContentItem = {
  type: 'question' | 'prompt' | 'divider';
  text: string;
  bullets?: string[];
  sampleAnswer?: string; // For Part 1 & 3
  sampleStructure?: Part2StructureItem[]; // For Part 2
};

export type CardData = {
  id: string;
  title: string;
  content: ContentItem[]; 
  type: PartType;
  category?: string;
  visuals: {
    gradient: string;
    emoji: string;
  };
  vocabulary: VocabularyItem[];
};

export type AppMode = 'mock' | 'practice' | 'full-exam';
