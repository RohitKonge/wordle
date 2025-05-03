import React from 'react';
import { useGame, TileStatus } from '../context/GameContext';

const Keyboard: React.FC = () => {
  const { addLetter, removeLetter, submitGuess, keyboardStatus, settings } = useGame();
  
  const createKeyboardRows = () => {
    const defaultRows = [
      ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
      ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
      ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'BACKSPACE']
    ];

    if (settings.swapButtons) {
      const lastRow = [...defaultRows[2]];
      const enterIndex = lastRow.indexOf('ENTER');
      const backspaceIndex = lastRow.indexOf('BACKSPACE');
      [lastRow[enterIndex], lastRow[backspaceIndex]] = [lastRow[backspaceIndex], lastRow[enterIndex]];
      return [defaultRows[0], defaultRows[1], lastRow];
    }

    return defaultRows;
  };

  const rows = createKeyboardRows();

  const getKeyStatus = (key: string): TileStatus => {
    if (key === 'ENTER' || key === 'BACKSPACE') return 'empty';
    return keyboardStatus[key] || 'empty';
  };

  const getKeyClasses = (key: string) => {
    const status = getKeyStatus(key);
    const isActionKey = key === 'ENTER' || key === 'BACKSPACE';
    
    const baseClasses = "flex items-center justify-center rounded-lg font-semibold text-sm sm:text-base py-4 shadow-keyboard transition-all duration-200 transform hover:scale-105 active:scale-95";
    
    const widthClasses = isActionKey 
      ? "w-16 sm:w-20 font-bold text-xs uppercase tracking-wider" 
      : "w-8 sm:w-10";
    
    const statusClasses: Record<TileStatus, string> = {
      empty: isActionKey
        ? "bg-primary-500 text-white hover:bg-primary-600"
        : "bg-white hover:bg-gray-100 text-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-100",
      filled: "bg-gray-200 hover:bg-gray-300 text-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-100",
      correct: settings.colorBlindMode
        ? "bg-orange-600 hover:bg-orange-700 text-white"
        : "bg-green-500 hover:bg-green-600 text-white",
      present: settings.colorBlindMode
        ? "bg-blue-500 hover:bg-blue-600 text-white"
        : "bg-yellow-500 hover:bg-yellow-600 text-white",
      absent: settings.colorBlindMode
        ? "bg-gray-700 hover:bg-gray-800 text-white"
        : "bg-gray-500 hover:bg-gray-600 text-white"
    };
    
    return `${baseClasses} ${widthClasses} ${statusClasses[status]}`;
  };

  const handleKeyClick = (key: string) => {
    if (key === 'ENTER') {
      submitGuess();
    } else if (key === 'BACKSPACE') {
      removeLetter();
    } else {
      addLetter(key);
    }
  };

  return (
    <div className="w-full max-w-md p-4">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex justify-center mb-2 gap-1.5">
          {row.map((key) => (
            <button
              key={key}
              className={getKeyClasses(key)}
              onClick={() => handleKeyClick(key)}
            >
              {key === 'BACKSPACE' ? '←' : key}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;