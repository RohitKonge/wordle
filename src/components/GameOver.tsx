import React from 'react';
import { useGame } from '../context/GameContext';

const GameOver: React.FC = () => {
  const { gameStatus, targetWord, guesses, startNewGame } = useGame();

  if (gameStatus === 'playing') return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full mx-4 animate-slide-up">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-900 dark:text-white">
          {gameStatus === 'won' ? 'You won!' : 'Game Over'}
        </h2>
        
        <p className="text-center mb-4 text-gray-900 dark:text-gray-100">
          {gameStatus === 'won' 
            ? `You guessed the word in ${guesses.length} ${guesses.length === 1 ? 'try' : 'tries'}!` 
            : `The word was ${targetWord}`}
        </p>
        
        <div className="flex justify-center">
          <button
            onClick={startNewGame}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition-colors"
          >
            Play Again
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameOver;