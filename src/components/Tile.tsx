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
    empty: 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100',
    filled: 'border-gray-400 dark:border-gray-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100',
    correct: settings.colorBlindMode 
      ? 'border-orange-600 bg-orange-600 text-white'
      : 'border-green-500 bg-green-500 text-white',
    present: settings.colorBlindMode
      ? 'border-blue-500 bg-blue-500 text-white'
      : 'border-yellow-500 bg-yellow-500 text-white',
    absent: settings.colorBlindMode
      ? 'border-gray-700 bg-gray-700 text-white'
      : 'border-gray-500 bg-gray-500 text-white',
  };

  const animationDelay = isRevealing ? `${position * 150}ms` : '0ms';
  
  const baseClasses = "w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center text-2xl font-bold rounded border-2 uppercase transition-colors relative";
  
  // Add animation classes if tile is revealing
  const animationClasses = isRevealing 
    ? "animate-flip-in" 
    : "";

  const letterCount = getLetterCount(letter);

  return (
    <div
      className={`${baseClasses} ${statusClasses[status as keyof typeof statusClasses]} ${animationClasses}`}
      style={{ animationDelay }}
    >
      {letterCount > 1 && (
        <div className="absolute top-1 right-1.5 text-xs font-bold">
          {letterCount}
        </div>
      )}
      {letter}
    </div>
  );
};

export default Tile;