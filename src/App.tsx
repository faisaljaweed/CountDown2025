import React from 'react';
import CountdownTimer from './components/CountdownTimer';
import { Sparkles } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-black flex flex-col items-center justify-center p-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 flex items-center justify-center gap-3">
          <Sparkles className="w-8 h-8 md:w-12 md:h-12" />
          New Year 2025
          <Sparkles className="w-8 h-8 md:w-12 md:h-12" />
        </h1>
        <p className="text-lg md:text-xl text-white/80">Counting down to a new beginning</p>
      </div>

      <CountdownTimer />

      <div className="mt-12 text-center">
        <p className="text-white/60 text-sm md:text-base">
          Let's welcome the new year together!
        </p>
      </div>
    </div>
  );
}

export default App;