import React from 'react';
import { X } from 'lucide-react';
import { useGame } from '../context/GameContext';

interface HowToPlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const HowToPlay: React.FC<HowToPlayProps> = ({ isOpen, onClose }) => {
  const { settings } = useGame();
  
  if (!isOpen) return null;

  const getExampleTileClass = (status: 'correct' | 'present' | 'absent') => {
    const baseClasses = "w-12 h-12 flex items-center justify-center text-xl font-bold rounded-xl shadow-tile transition-all transform hover:scale-105";
    
    if (settings.colorBlindMode) {
      switch (status) {
        case 'correct': return `${baseClasses} bg-orange-400 text-white`;
        case 'present': return `${baseClasses} bg-blue-400 text-white`;
        case 'absent': return `${baseClasses} bg-gray-500 text-white`;
      }
    } else {
      switch (status) {
        case 'correct': return `${baseClasses} bg-emerald-400 text-white`;
        case 'present': return `${baseClasses} bg-amber-400 text-white`;
        case 'absent': return `${baseClasses} bg-gray-300 text-white`;
      }
    }
  };

  const ExampleTile = ({ letter, status, repeatCount = 0 }: { letter: string, status: 'correct' | 'present' | 'absent', repeatCount?: number }) => (
    <div className={`${getExampleTileClass(status)} relative animate-pop-in`}>
      {repeatCount > 1 && settings.letterHints && (
        <div className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center bg-primary-500 text-white text-xs font-bold rounded-full">
          {repeatCount}
        </div>
      )}
      {letter}
    </div>
  );

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-lg w-full mx-4 animate-slide-up shadow-xl">
        <div className="relative mb-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">How to Play</h2>
          <button
            onClick={onClose}
            className="absolute right-0 top-0 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full text-gray-500 dark:text-gray-400 transition-colors"
            aria-label="Close how to play"
          >
            <X size={24} />
          </button>
        </div>

        <div className="space-y-8">
          <p className="text-center text-gray-600 dark:text-gray-300">
            Guess the word in 6 tries. After each guess, the tiles will show how close your guess was.
          </p>

          <div className="space-y-6">
            <div>
              <div className="flex justify-center gap-1 mb-4">
                <ExampleTile letter="W" status="correct" />
                <ExampleTile letter="O" status="present" repeatCount={2} />
                <ExampleTile letter="R" status="absent" />
                <ExampleTile letter="D" status="present" />
                <ExampleTile letter="S" status="absent" />
              </div>
              <p className="text-sm text-center text-gray-600 dark:text-gray-300">
                When Letter Hints are enabled, a number appears for repeated letters
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                <div className="flex items-center gap-3 mb-2">
                  <ExampleTile letter="W" status="correct" />
                  <p className="text-gray-900 dark:text-white">
                    <span className="font-semibold">W</span> is in the word and in the correct spot
                  </p>
                </div>
              </div>

              <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                <div className="flex items-center gap-3 mb-2">
                  <ExampleTile letter="O" status="present" />
                  <p className="text-gray-900 dark:text-white">
                    <span className="font-semibold">O</span> is in the word but in the wrong spot
                  </p>
                </div>
              </div>

              <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                <div className="flex items-center gap-3">
                  <ExampleTile letter="R" status="absent" />
                  <p className="text-gray-900 dark:text-white">
                    <span className="font-semibold">R</span> is not in the word
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-sm text-gray-600 dark:text-gray-300">
            A new word will be available each time you play!
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowToPlay;