import { GameProvider } from './context/GameContext';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Board from './components/Board';
import Keyboard from './components/Keyboard';
import Header from './components/Header';
import Toast from './components/Toast';
import GameOver from './components/GameOver';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import Contact from './components/Contact';
import AboutUs from './components/AboutUs';
import FAQ from './components/FAQ';

const GameContent = () => (
  <>
    <Header />
    
    <main className="relative" role="main">
      {/* Game Section */}
      <article className="flex flex-col items-center justify-center w-full max-w-lg mx-auto px-4 py-8">
        <h2 className="sr-only">Wordle Game Board</h2>
        <Board />
        <Keyboard />
      </article>

      {/* How to Play Section */}
      <section className="w-full max-w-2xl mx-auto mt-12 mb-8 px-4" aria-labelledby="howToPlay">
        <h2 id="howToPlay" className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8 relative">
          How to play
          <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary-500 rounded-full"></span>
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Step 1 */}
          <article className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg transform transition-all duration-300 hover:scale-105">
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
          </article>

          {/* Step 2 */}
          <article className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg transform transition-all duration-300 hover:scale-105">
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
          </article>

          {/* Step 3 */}
          <article className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg transform transition-all duration-300 hover:scale-105">
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
          </article>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full text-center py-8 text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="max-w-2xl mx-auto px-4">
          <p className="mb-2">© 2002-2025 Wordle.work - Free Online Word Puzzle Game</p>
          <nav aria-label="Footer Navigation">
            <ul className="flex flex-wrap justify-center gap-4 text-sm mb-4">
              <li><Link to="/about" className="hover:text-primary-500">About</Link></li>
              <li><Link to="/faq" className="hover:text-primary-500">FAQ</Link></li>
              <li><Link to="/privacy" className="hover:text-primary-500">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-primary-500">Terms of Service</Link></li>
              <li><Link to="/contact" className="hover:text-primary-500">Contact</Link></li>
            </ul>
          </nav>
          <p className="text-sm mt-4">
            Wordle.work is the best free online word puzzle game. Challenge yourself with daily word puzzles, 
            track your statistics, and compete with friends. Available in multiple word lengths from 4 to 7 letters.
          </p>
        </div>
      </footer>
    </main>

    {/* Overlay Components */}
    <Toast />
    <GameOver />
  </>
);

function App() {
  return (
    <Router>
      <GameProvider>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
            <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-primary-500/10 to-transparent transform rotate-12"></div>
            <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-primary-500/10 to-transparent transform -rotate-12"></div>
          </div>

          <Routes>
            <Route path="/" element={<GameContent />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </GameProvider>
    </Router>
  );
}

export default App;