import { GameProvider } from './context/GameContext';
import Board from './components/Board';
import Keyboard from './components/Keyboard';
import Header from './components/Header';
import Toast from './components/Toast';
import GameOver from './components/GameOver';

function App() {
  return (
    <GameProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-primary-500/10 to-transparent transform rotate-12"></div>
          <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-primary-500/10 to-transparent transform -rotate-12"></div>
        </div>

        <Header />
        
        <main className="relative">
          {/* Game Section */}
          <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto px-4 py-8">
            <Board />
            <Keyboard />
          </div>

          {/* How to Play Section */}
          <div className="w-full max-w-2xl mx-auto mt-12 mb-8 px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8 relative">
              How to play
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary-500 rounded-full"></span>
            </h2>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Step 1 */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg transform transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-8 h-8 rounded-full bg-gradient text-white flex items-center justify-center font-bold">
                    1
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Enter a Word
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Start by entering any word to discover which letters match the hidden word.
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg transform transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-8 h-8 rounded-full bg-gradient text-white flex items-center justify-center font-bold">
                    2
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Check Colors
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Green tiles mean the letter is correct, yellow means right letter wrong spot, and gray means the letter isn't in the word.
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg transform transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-8 h-8 rounded-full bg-gradient text-white flex items-center justify-center font-bold">
                    3
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Win the Game
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Use the hints to guess the word in six tries or less to win the game!
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="w-full text-center py-8 text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
            <div className="max-w-2xl mx-auto px-4">
              <p className="mb-2">2002-2025 Wordly Game</p>
              <p className="text-sm">
                A modern implementation of the classic word-guessing game.
              </p>
            </div>
          </footer>
        </main>

        {/* Overlay Components */}
        <Toast />
        <GameOver />
      </div>
    </GameProvider>
  );
}

export default App;