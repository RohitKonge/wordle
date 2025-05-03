import React from 'react';
import { X } from 'lucide-react';
import { useGame } from '../context/GameContext';

interface StatisticsProps {
  isOpen: boolean;
  onClose: () => void;
}

const Statistics: React.FC<StatisticsProps> = ({ isOpen, onClose }) => {
  const { stats } = useGame();
  
  if (!isOpen) return null;

  const winPercentage = stats.gamesPlayed > 0 
    ? Math.round((stats.gamesWon / stats.gamesPlayed) * 100) 
    : 0;

  const maxGuessValue = Math.max(...stats.guessDistribution);
  const totalGuesses = stats.guessDistribution.reduce((sum, num) => sum + num, 0);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-md w-full mx-4 animate-slide-up shadow-xl">
        <div className="relative mb-8">
          <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white">Statistics</h2>
          <button
            onClick={onClose}
            className="absolute right-0 top-0 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full text-gray-500 dark:text-gray-400 transition-colors"
            aria-label="Close statistics"
          >
            <X size={24} />
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-5 gap-4 mb-8">
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">{stats.gamesPlayed}</span>
            <span className="text-xs text-gray-600 dark:text-gray-400 text-center">Games Played</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">{stats.gamesWon}</span>
            <span className="text-xs text-gray-600 dark:text-gray-400 text-center">Games Won</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">{winPercentage}%</span>
            <span className="text-xs text-gray-600 dark:text-gray-400 text-center">Win Rate</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">{stats.currentStreak}</span>
            <span className="text-xs text-gray-600 dark:text-gray-400 text-center">Current Streak</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">{stats.maxStreak}</span>
            <span className="text-xs text-gray-600 dark:text-gray-400 text-center">Max Streak</span>
          </div>
        </div>

        {/* Guess Distribution */}
        <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">Guess Distribution</h3>
        <div className="space-y-2">
          {stats.guessDistribution.map((count, index) => {
            const percentage = totalGuesses > 0 ? Math.round((count / totalGuesses) * 100) : 0;
            return (
              <div key={index} className="flex items-center gap-2">
                <span className="text-sm font-medium w-6 text-gray-900 dark:text-white">#{index + 1}</span>
                <div className="flex-1 bg-gray-100 dark:bg-gray-700 rounded overflow-hidden">
                  <div 
                    className="h-8 bg-primary-500 dark:bg-primary-600 flex items-center justify-between px-3 text-sm transition-all duration-500"
                    style={{ 
                      width: count > 0 ? `${(count / maxGuessValue) * 100}%` : '0%',
                      minWidth: count > 0 ? '60px' : '0px'
                    }}
                  >
                    {count > 0 && (
                      <>
                        <span className="text-gray-900 dark:text-gray-900 font-medium">{percentage}%</span>
                        <span className="text-gray-900 dark:text-gray-900 font-medium">{count}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Statistics;