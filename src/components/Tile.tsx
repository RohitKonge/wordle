import React from 'react';
import { TileStatus } from '../context/GameContext';

interface TileProps {
  letter: string;
  status: TileStatus | string;
  position: number;
  isRevealing?: boolean;
}

const Tile: React.FC<TileProps> = ({ letter, status, position, isRevealing = false }) => {
  // Map status to tailwind classes
  const statusClasses = {
    empty: 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100',
    filled: 'border-gray-400 dark:border-gray-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100',
    correct: 'border-green-500 bg-green-500 text-white',
    present: 'border-yellow-500 bg-yellow-500 text-white',
    absent: 'border-gray-500 bg-gray-500 text-white',
  };

  const animationDelay = isRevealing ? `${position * 150}ms` : '0ms';
  
  const baseClasses = "w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center text-2xl font-bold rounded border-2 uppercase transition-colors";
  
  // Add animation classes if tile is revealing
  const animationClasses = isRevealing 
    ? "animate-flip-in" 
    : "";

  return (
    <div
      className={`${baseClasses} ${statusClasses[status as keyof typeof statusClasses]} ${animationClasses}`}
      style={{ animationDelay }}
    >
      {letter}
    </div>
  );
};

export default Tile;