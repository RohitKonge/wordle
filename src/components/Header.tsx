import React, { useState } from 'react';
import { HelpCircle, Settings as SettingsIcon, Flag, BarChart3 } from 'lucide-react';
import { useGame } from '../context/GameContext';
import HowToPlay from './HowToPlay';
import Settings from './Settings';
import Statistics from './Statistics';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const { startNewGame, giveUp, gameStatus } = useGame();
  const [showHowToPlay, setShowHowToPlay] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showStats, setShowStats] = useState(false);

  return (
    <>
      <header className="w-full border-b border-gray-200 dark:border-gray-700 py-4 px-4 bg-white dark:bg-gray-800 shadow-md relative z-10 transition-colors">
        <div className="flex items-center justify-between max-w-lg mx-auto">
          <h1 className="text-3xl font-bold tracking-wide text-gray-900 dark:text-white animate-pop-in">
            <Link to="/">WORDLE</Link>
          </h1>
          {/* <nav className="hidden md:flex gap-4 items-center text-base font-medium">
            <Link to="/about" className="hover:text-primary-500">About</Link>
            <Link to="/faq" className="hover:text-primary-500">FAQ</Link>
            <Link to="/privacy" className="hover:text-primary-500">Privacy</Link>
            <Link to="/terms" className="hover:text-primary-500">Terms</Link>
            <Link to="/contact" className="hover:text-primary-500">Contact</Link>
          </nav> */}
          <div className="flex gap-2">
            <button
              onClick={() => setShowStats(true)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors"
              aria-label="Statistics"
            >
              <BarChart3 size={24} />
            </button>
            {gameStatus === 'playing' && (
              <button
                onClick={giveUp}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors group relative"
                aria-label="Give Up"
              >
                <Flag size={24} className="transform transition-transform group-hover:scale-110" />
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs bg-gray-800 dark:bg-gray-900 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Give Up
                </span>
              </button>
            )}
            <button
              onClick={() => setShowHowToPlay(true)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors"
              aria-label="How to Play"
            >
              <HelpCircle size={24} />
            </button>
            <button 
              onClick={() => setShowSettings(true)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors"
              aria-label="Settings"
            >
              <SettingsIcon size={24} />
            </button>
            <button 
              onClick={startNewGame}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors"
              aria-label="New Game"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                <path d="M3 3v5h5" />
              </svg>
            </button>
          </div>
        </div>
      </header>
      <HowToPlay isOpen={showHowToPlay} onClose={() => setShowHowToPlay(false)} />
      <Settings isOpen={showSettings} onClose={() => setShowSettings(false)} />
      <Statistics isOpen={showStats} onClose={() => setShowStats(false)} />
    </>
  );
};

export default Header;