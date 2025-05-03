import React from 'react';
import { TileStatus } from '../context/GameContext';
import { useGame } from '../context/GameContext';

interface TileProps {
  letter: string;
  status: TileStatus | string;
  position: number;
  isRevealing?: boolean;
}

const Tile: React.FC<TileProps> = ({ letter, status, position, isRevealing = false }) => {
  const { settings, targetWord } = useGame();

  const getLetterCount = (letter: string): number => {
    if (!settings.letterHints || !letter) return 0;
    return targetWord.split('').filter(l => l === letter).length;
  };

  // Map status to tailwind classes with color blind mode support
  const statusClasses = {
    empty: 'border-gray-200 dark:border-gray-600 bg-white/80 dark:bg-gray-800/80 text-gray-900 dark:text-gray-100 hover:bg-white dark:hover:bg-gray-800',
    filled: 'border-gray-300 dark:border-gray-500 bg-white/90 dark:bg-gray-800/90 text-gray-900 dark:text-gray-100',
    correct: settings.colorBlindMode 
      ? 'border-orange-400 bg-orange-400 text-white'
      : 'border-emerald-400 bg-emerald-400 text-white',
    present: settings.colorBlindMode
      ? 'border-blue-400 bg-blue-400 text-white'
      : 'border-amber-400 bg-amber-400 text-white',
    absent: settings.colorBlindMode
      ? 'border-gray-500 bg-gray-500 text-white'
      : 'border-gray-300 bg-gray-300 text-white',
  };

  const animationDelay = isRevealing ? `${position * 150}ms` : '0ms';
  
  const baseClasses = "w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center text-2xl font-bold rounded-xl border-2 uppercase transition-all duration-300 relative transform hover:scale-105";
  
  // Add animation classes if tile is revealing
  const animationClasses = isRevealing 
    ? "animate-flip-in" 
    : letter 
      ? "animate-pop-in"
      : "";

  const letterCount = getLetterCount(letter);

  return (
    <div
      className={`${baseClasses} ${statusClasses[status as keyof typeof statusClasses]} ${animationClasses}`}
      style={{ animationDelay }}
    >
      {letterCount > 1 && (
        <div className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center bg-primary-500 text-white text-xs font-bold rounded-full animate-pop-in">
          {letterCount}
        </div>
      )}
      {letter}
    </div>
  );
};

export default Tile;