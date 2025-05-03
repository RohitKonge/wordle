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
    const baseClasses = "w-12 h-12 flex items-center justify-center text-2xl font-bold rounded text-white";
    if (settings.colorBlindMode) {
      switch (status) {
        case 'correct': return `${baseClasses} bg-orange-600`;
        case 'present': return `${baseClasses} bg-blue-500`;
        case 'absent': return `${baseClasses} bg-gray-700`;
      }
    } else {
      switch (status) {
        case 'correct': return `${baseClasses} bg-green-500`;
        case 'present': return `${baseClasses} bg-yellow-500`;
        case 'absent': return `${baseClasses} bg-gray-400`;
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full mx-4 animate-slide-up relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full text-gray-900 dark:text-gray-100"
        >
          <X size={20} />
        </button>
        
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-900 dark:text-white">How to play</h2>
        
        <p className="text-center mb-6 text-gray-900 dark:text-gray-100">
          You have to guess the hidden word in 6 tries and the color of the letters
          changes to show how close you are.
        </p>

        <p className="mb-4 text-gray-900 dark:text-gray-100">To start the game, just enter any word, for example:</p>

        <div className="grid grid-cols-5 gap-1 mb-4">
          <div className={getExampleTileClass('absent')}>T</div>
          <div className={getExampleTileClass('present')}>A</div>
          <div className={getExampleTileClass('absent')}>B</div>
          <div className={getExampleTileClass('present')}>L</div>
          <div className={getExampleTileClass('correct')}>E</div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg mb-6">
          <div className="flex items-center gap-2 mb-2 text-gray-900 dark:text-gray-100">
            <span className="font-mono">T, B</span> aren't in the target word at all.
          </div>
          <div className="flex items-center gap-2 mb-2 text-gray-900 dark:text-gray-100">
            <span className="font-mono">A, L</span> is in the word but in the wrong spot.
          </div>
          <div className="flex items-center gap-2 text-gray-900 dark:text-gray-100">
            <span className="font-mono">E</span> is in the word and in the correct spot.
          </div>
        </div>

        <p className="mb-4 text-gray-900 dark:text-gray-100">Another try to find matching letters in the target word.</p>

        <div className="grid grid-cols-5 gap-1 mb-4">
          <div className={getExampleTileClass('correct')}>F</div>
          <div className={getExampleTileClass('correct')}>L</div>
          <div className={getExampleTileClass('correct')}>A</div>
          <div className={getExampleTileClass('absent')}>S</div>
          <div className={getExampleTileClass('absent')}>H</div>
        </div>

        <p className="text-center mb-4 text-gray-900 dark:text-gray-100">So close!</p>

        <div className="grid grid-cols-5 gap-1 mb-4">
          <div className={getExampleTileClass('correct')}>F</div>
          <div className={getExampleTileClass('correct')}>L</div>
          <div className={getExampleTileClass('correct')}>A</div>
          <div className={getExampleTileClass('correct')}>M</div>
          <div className={getExampleTileClass('correct')}>E</div>
        </div>

        <p className="text-center font-bold text-gray-900 dark:text-gray-100">Got it! 🎉</p>
      </div>
    </div>
  );
};

export default HowToPlay;