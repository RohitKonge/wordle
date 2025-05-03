import React, { useState } from 'react';
import { Menu, HelpCircle, Settings as SettingsIcon } from 'lucide-react';
import { useGame } from '../context/GameContext';
import HowToPlay from './HowToPlay';
import Settings from './Settings';

const Header: React.FC = () => {
  const { startNewGame } = useGame();
  const [showHowToPlay, setShowHowToPlay] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  return (
    <>
      <header className="w-full border-b border-gray-200 dark:border-gray-700 py-3 px-4 bg-white dark:bg-gray-900 transition-colors">
        <div className="flex items-center justify-between max-w-lg mx-auto">
          <button 
            onClick={() => setShowSettings(true)}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-gray-100 transition-colors"
          >
            <SettingsIcon size={24} />
          </button>
          <h1 className="text-3xl font-bold tracking-wide text-center text-gray-900 dark:text-white">WORDLE</h1>
          <div className="flex gap-2">
            <button
              onClick={() => setShowHowToPlay(true)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-gray-100 transition-colors"
            >
              <HelpCircle size={24} />
            </button>
            <button 
              onClick={startNewGame}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-gray-100 transition-colors"
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
    </>
  );
};

export default Header;