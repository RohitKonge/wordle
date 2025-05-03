import React from 'react';
import { X } from 'lucide-react';
import { useGame } from '../context/GameContext';

interface SettingsProps {
  isOpen: boolean;
  onClose: () => void;
}

const Settings: React.FC<SettingsProps> = ({ isOpen, onClose }) => {
  const { settings, updateSetting } = useGame();
  
  if (!isOpen) return null;

  const letterOptions = [4, 5, 6, 7];

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 max-w-md w-full mx-4 animate-slide-up shadow-xl">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Settings</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full text-gray-500 dark:text-gray-400 transition-colors"
            aria-label="Close settings"
          >
            <X size={24} />
          </button>
        </div>

        <div className="space-y-8">
          {/* Number of Letters */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
              Word Length
            </h3>
            <div className="flex gap-3">
              {letterOptions.map(num => (
                <button
                  key={num}
                  onClick={() => updateSetting('numberOfLetters', num)}
                  className={`w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold transition-all transform hover:scale-105 ${
                    settings.numberOfLetters === num
                      ? 'bg-gradient text-white shadow-lg'
                      : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100'
                  }`}
                >
                  {num}
                </button>
              ))}
            </div>
          </div>

          {/* Toggle Settings */}
          {[
            {
              key: 'hardMode',
              title: 'Hard Mode',
              description: 'Any revealed hints must be used in subsequent guesses'
            },
            {
              key: 'darkMode',
              title: 'Dark Mode',
              description: 'Toggle dark and light theme'
            },
            {
              key: 'colorBlindMode',
              title: 'Color Blind Mode',
              description: 'High contrast colors'
            },
            {
              key: 'letterHints',
              title: 'Letter Hints',
              description: 'Show counts for repeated letters'
            },
            {
              key: 'swapButtons',
              title: 'Swap Buttons',
              description: 'Swap Enter and Backspace positions'
            }
          ].map(({ key, title, description }) => (
            <div key={key} className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">{title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
              </div>
              <button
                onClick={() => updateSetting(key as keyof typeof settings, !settings[key as keyof typeof settings])}
                className="relative"
                aria-label={`Toggle ${title}`}
              >
                <div className={`w-14 h-8 rounded-full transition-colors ${
                  settings[key as keyof typeof settings] ? 'bg-gradient' : 'bg-gray-200 dark:bg-gray-700'
                }`}>
                  <div className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-md transition-transform transform ${
                    settings[key as keyof typeof settings] ? 'translate-x-7' : 'translate-x-1'
                  }`} />
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Settings;