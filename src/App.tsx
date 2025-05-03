import React from 'react';
import { GameProvider } from './context/GameContext';
import Board from './components/Board';
import Keyboard from './components/Keyboard';
import Header from './components/Header';
import Toast from './components/Toast';
import GameOver from './components/GameOver';

function App() {
  return (
    <GameProvider>
      <div className="flex flex-col items-center min-h-screen bg-gray-50">
        <Header />
        <main className="flex flex-col items-center justify-center flex-1 w-full max-w-lg px-4 py-8">
          <Board />
          <Keyboard />
          <Toast />
          <GameOver />
        </main>
      </div>
    </GameProvider>
  );
}

export default App;