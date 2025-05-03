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
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full mx-4 animate-slide-up">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Settings</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full text-gray-900 dark:text-gray-100"
          >
            <X size={20} />
          </button>
        </div>

        <div className="space-y-6">
          {/* Number of Letters */}
          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Number of Letters</h3>
            <div className="flex gap-2">
              {letterOptions.map(num => (
                <button
                  key={num}
                  onClick={() => updateSetting('numberOfLetters', num)}
                  className={`w-8 h-8 rounded flex items-center justify-center transition-colors ${
                    settings.numberOfLetters === num
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100'
                  }`}
                >
                  {num}
                </button>
              ))}
            </div>
          </div>

          {/* Hard Mode */}
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">Hard Mode</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Any revealed hints must be used in subsequent guesses</p>
            </div>
            <button
              onClick={() => updateSetting('hardMode', !settings.hardMode)}
              className={`w-12 h-6 rounded-full transition-colors ${
                settings.hardMode ? 'bg-green-500' : 'bg-gray-200 dark:bg-gray-700'
              }`}
            >
              <div className={`w-5 h-5 bg-white rounded-full transform transition-transform ${
                settings.hardMode ? 'translate-x-6' : 'translate-x-1'
              }`} />
            </button>
          </div>

          {/* Dark Mode */}
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">Dark Mode</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Change dark and light mode</p>
            </div>
            <button
              onClick={() => updateSetting('darkMode', !settings.darkMode)}
              className={`w-12 h-6 rounded-full transition-colors ${
                settings.darkMode ? 'bg-green-500' : 'bg-gray-200 dark:bg-gray-700'
              }`}
            >
              <div className={`w-5 h-5 bg-white rounded-full transform transition-transform ${
                settings.darkMode ? 'translate-x-6' : 'translate-x-1'
              }`} />
            </button>
          </div>

          {/* Color Blind Mode */}
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">Color Blind Mode</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">High contrast colors</p>
            </div>
            <button
              onClick={() => updateSetting('colorBlindMode', !settings.colorBlindMode)}
              className={`w-12 h-6 rounded-full transition-colors ${
                settings.colorBlindMode ? 'bg-green-500' : 'bg-gray-200 dark:bg-gray-700'
              }`}
            >
              <div className={`w-5 h-5 bg-white rounded-full transform transition-transform ${
                settings.colorBlindMode ? 'translate-x-6' : 'translate-x-1'
              }`} />
            </button>
          </div>

          {/* Letter Hints */}
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">Letter Hints</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Hint above the letter that it appears twice or more in the hidden word</p>
            </div>
            <button
              onClick={() => updateSetting('letterHints', !settings.letterHints)}
              className={`w-12 h-6 rounded-full transition-colors ${
                settings.letterHints ? 'bg-green-500' : 'bg-gray-200 dark:bg-gray-700'
              }`}
            >
              <div className={`w-5 h-5 bg-white rounded-full transform transition-transform ${
                settings.letterHints ? 'translate-x-6' : 'translate-x-1'
              }`} />
            </button>
          </div>

          {/* Swap Buttons */}
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">Swap Buttons</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Swap "Enter" and "Backspace" buttons</p>
            </div>
            <button
              onClick={() => updateSetting('swapButtons', !settings.swapButtons)}
              className={`w-12 h-6 rounded-full transition-colors ${
                settings.swapButtons ? 'bg-green-500' : 'bg-gray-200 dark:bg-gray-700'
              }`}
            >
              <div className={`w-5 h-5 bg-white rounded-full transform transition-transform ${
                settings.swapButtons ? 'translate-x-6' : 'translate-x-1'
              }`} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;