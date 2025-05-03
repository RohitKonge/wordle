import React from 'react';
import { useGame } from '../context/GameContext';
import { Trophy, FrownIcon } from 'lucide-react';

const GameOver: React.FC = () => {
  const { gameStatus, targetWord, guesses, startNewGame } = useGame();

  if (gameStatus === 'playing') return null;

  const renderIcon = () => {
    if (gameStatus === 'won') {
      return <Trophy className="w-16 h-16 text-yellow-500 animate-bounce" />;
    }
    return <FrownIcon className="w-16 h-16 text-gray-400 animate-pulse" />;
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-md w-full mx-4 animate-slide-up shadow-xl">
        <div className="flex flex-col items-center text-center">
          {renderIcon()}
          
          <h2 className="text-3xl font-bold mt-4 mb-2 text-gray-900 dark:text-white">
            {gameStatus === 'won' ? 'Congratulations!' : 'Game Over'}
          </h2>
          
          <p className="text-lg mb-6 text-gray-600 dark:text-gray-300">
            {gameStatus === 'won' 
              ? `You guessed the word in ${guesses.length} ${guesses.length === 1 ? 'try' : 'tries'}!` 
              : `The word was ${targetWord}`}
          </p>
          
          {/* Stats */}
          <div className="w-full grid grid-cols-2 gap-4 mb-8">
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-xl">
              <div className="text-2xl font-bold text-primary-500">{guesses.length}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Attempts</div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-xl">
              <div className="text-2xl font-bold text-primary-500">
                {gameStatus === 'won' ? '100%' : '0%'}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Success Rate</div>
            </div>
          </div>

          <button
            onClick={startNewGame}
            className="w-full bg-gradient text-white font-bold py-3 px-6 rounded-xl transition-transform transform hover:scale-105 active:scale-95"
          >
            Play Again
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameOver;