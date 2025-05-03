import React from 'react';
import { useGame, TileStatus } from '../context/GameContext';

const Keyboard: React.FC = () => {
  const { addLetter, removeLetter, submitGuess, keyboardStatus } = useGame();
  
  const rows = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'BACKSPACE']
  ];

  const getKeyStatus = (key: string): TileStatus => {
    if (key === 'ENTER' || key === 'BACKSPACE') return 'empty';
    return keyboardStatus[key] || 'empty';
  };

  const getKeyClasses = (key: string) => {
    const status = getKeyStatus(key);
    const baseClasses = "flex items-center justify-center rounded font-semibold text-sm sm:text-base py-4 transition-colors";
    
    const widthClasses = key === 'ENTER' || key === 'BACKSPACE' 
      ? "w-16 sm:w-20" 
      : "w-8 sm:w-10";
    
    const statusClasses = {
      empty: "bg-gray-200 hover:bg-gray-300 text-gray-800",
      correct: "bg-green-500 text-white",
      present: "bg-yellow-500 text-white",
      absent: "bg-gray-500 text-white"
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
    <div className="w-full max-w-md">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex justify-center mb-2 gap-1">
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