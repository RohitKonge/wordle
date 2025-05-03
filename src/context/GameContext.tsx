import React, { createContext, useContext, useState, useEffect } from 'react';
import { getRandomWord, isValidWord } from '../utils/words';

type GameStatus = 'playing' | 'won' | 'lost';
export type TileStatus = 'empty' | 'filled' | 'correct' | 'present' | 'absent';

interface GameSettings {
  numberOfLetters: number;
  hardMode: boolean;
  dailyMode: boolean;
  darkMode: boolean;
  colorBlindMode: boolean;
  letterHints: boolean;
  confettiAnimation: boolean;
  swapButtons: boolean;
}

interface GameContextType {
  targetWord: string;
  guesses: string[];
  currentGuess: string;
  gameStatus: GameStatus;
  keyboardStatus: Record<string, TileStatus>;
  toastMessage: string;
  settings: GameSettings;
  updateSetting: <K extends keyof GameSettings>(key: K, value: GameSettings[K]) => void;
  addLetter: (letter: string) => void;
  removeLetter: () => void;
  submitGuess: () => void;
  startNewGame: () => void;
  showToast: (message: string) => void;
}

const defaultSettings: GameSettings = {
  numberOfLetters: 5,
  hardMode: false,
  dailyMode: false,
  darkMode: false,
  colorBlindMode: false,
  letterHints: false,
  confettiAnimation: true,
  swapButtons: false
};

const GameContext = createContext<GameContextType | undefined>(undefined);

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [targetWord, setTargetWord] = useState<string>('');
  const [guesses, setGuesses] = useState<string[]>([]);
  const [currentGuess, setCurrentGuess] = useState<string>('');
  const [gameStatus, setGameStatus] = useState<GameStatus>('playing');
  const [keyboardStatus, setKeyboardStatus] = useState<Record<string, TileStatus>>({});
  const [toastMessage, setToastMessage] = useState<string>('');
  const [settings, setSettings] = useState<GameSettings>(defaultSettings);

  const updateSetting = <K extends keyof GameSettings>(key: K, value: GameSettings[K]) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  useEffect(() => {
    startNewGame();
  }, [settings.numberOfLetters]);

  useEffect(() => {
    if (settings.darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [settings.darkMode]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (gameStatus !== 'playing') return;

      if (e.key === 'Enter') {
        submitGuess();
      } else if (e.key === 'Backspace') {
        removeLetter();
      } else if (/^[a-zA-Z]$/.test(e.key)) {
        addLetter(e.key.toUpperCase());
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentGuess, gameStatus, settings]);

  useEffect(() => {
    if (guesses.length === 0) return;

    const latestGuess = guesses[guesses.length - 1];
    const newKeyboardStatus = { ...keyboardStatus };

    for (let i = 0; i < latestGuess.length; i++) {
      const letter = latestGuess[i];
      
      if (letter === targetWord[i]) {
        newKeyboardStatus[letter] = 'correct';
      } else if (targetWord.includes(letter) && newKeyboardStatus[letter] !== 'correct') {
        newKeyboardStatus[letter] = 'present';
      } else if (!targetWord.includes(letter)) {
        newKeyboardStatus[letter] = 'absent';
      }
    }

    setKeyboardStatus(newKeyboardStatus);
  }, [guesses]);

  const addLetter = (letter: string) => {
    if (currentGuess.length < settings.numberOfLetters) {
      setCurrentGuess(prev => prev + letter);
    }
  };

  const removeLetter = () => {
    setCurrentGuess(prev => prev.slice(0, -1));
  };

  const submitGuess = () => {
    if (currentGuess.length !== settings.numberOfLetters) {
      showToast(`Word must be ${settings.numberOfLetters} letters`);
      return;
    }

    if (!isValidWord(currentGuess)) {
      showToast('Not in word list');
      return;
    }

    if (settings.hardMode) {
      // Check if all revealed hints are used
      const lastGuess = guesses[guesses.length - 1];
      if (lastGuess) {
        for (let i = 0; i < lastGuess.length; i++) {
          if (lastGuess[i] === targetWord[i] && currentGuess[i] !== targetWord[i]) {
            showToast(`Must use revealed hints`);
            return;
          }
        }
      }
    }

    const newGuesses = [...guesses, currentGuess];
    setGuesses(newGuesses);
    setCurrentGuess('');

    if (currentGuess === targetWord) {
      setGameStatus('won');
      showToast('Correct! Well done!');
      return;
    }

    if (newGuesses.length >= 6) {
      setGameStatus('lost');
      showToast(`The word was ${targetWord}`);
      return;
    }
  };

  const startNewGame = () => {
    const word = getRandomWord();
    setTargetWord(word);
    setGuesses([]);
    setCurrentGuess('');
    setGameStatus('playing');
    setKeyboardStatus({});
  };

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(''), 3000);
  };

  return (
    <GameContext.Provider
      value={{
        targetWord,
        guesses,
        currentGuess,
        gameStatus,
        keyboardStatus,
        toastMessage,
        settings,
        updateSetting,
        addLetter,
        removeLetter,
        submitGuess,
        startNewGame,
        showToast
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
