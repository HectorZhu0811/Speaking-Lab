import React from 'react';
import { GraduationCap } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="bg-indigo-600 p-2 rounded-lg">
            <GraduationCap className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-slate-800 leading-none">IELTS Pick 2025</h1>
            <p className="text-xs text-slate-500 mt-1">Sep-Dec 2025 Question Bank</p>
          </div>
        </div>
        <div className="hidden sm:block text-xs font-medium text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
          Official Version
        </div>
      </div>
    </header>
  );
};

export default Header;