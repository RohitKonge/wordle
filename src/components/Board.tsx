import React from 'react';
import { useGame } from '../context/GameContext';
import Tile from './Tile';

const Board: React.FC = () => {
  const { guesses, currentGuess, targetWord } = useGame();
  const rows = 6;
  const cols = 5;

  // Create a 2D array representing the board
  const board = Array(rows).fill(null).map((_, rowIdx) => {
    // Submitted guesses
    if (rowIdx < guesses.length) {
      return guesses[rowIdx].split('').map((letter, colIdx) => {
        let status = 'absent';
        if (letter === targetWord[colIdx]) {
          status = 'correct';
        } else if (targetWord.includes(letter)) {
          status = 'present';
        }
        return { letter, status };
      });
    }
    
    // Current guess (in progress)
    if (rowIdx === guesses.length) {
      const currentGuessArray = currentGuess.split('');
      return Array(cols).fill(null).map((_, colIdx) => {
        const letter = currentGuessArray[colIdx] || '';
        return { letter, status: letter ? 'filled' : 'empty' };
      });
    }
    
    // Empty rows
    return Array(cols).fill(null).map(() => ({ letter: '', status: 'empty' }));
  });

  return (
    <div className="mb-8 grid grid-rows-6 gap-1.5">
      {board.map((row, rowIdx) => (
        <div key={rowIdx} className="grid grid-cols-5 gap-1.5">
          {row.map((tile, colIdx) => (
            <Tile 
              key={`${rowIdx}-${colIdx}`} 
              letter={tile.letter} 
              status={tile.status} 
              position={colIdx}
              isRevealing={rowIdx === guesses.length - 1} 
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;