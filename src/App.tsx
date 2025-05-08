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

      {/* FAQ Section */}
      <section className="w-full max-w-2xl mx-auto mb-12 px-4" aria-labelledby="faq">
        <h2 id="faq" className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8 relative">
          Frequently Asked Questions
          <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary-500 rounded-full"></span>
        </h2>
        <div className="space-y-6 mt-4">
          <div>
            <h3 className="text-xl font-semibold">What is Wordle?</h3>
            <p>Wordle is a free online word puzzle game where you guess a hidden five-letter word in six tries or less.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">How do I play Wordle?</h3>
            <p>Enter a valid five-letter word and submit your guess. The colors of the tiles will indicate how close your guess is to the correct word.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Is Wordle free to play?</h3>
            <p>Yes, Wordle is completely free to play with no registration required.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Can I play Wordle on my phone?</h3>
            <p>Absolutely! Wordle is optimized for mobile devices and works seamlessly on smartphones and tablets.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">How often is there a new Wordle puzzle?</h3>
            <p>A new Wordle puzzle is available every day.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Can I share my Wordle results?</h3>
            <p>Yes! After solving the puzzle, you can share your results with friends on social media.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Are there any tips for solving Wordle?</h3>
            <p>Start with common five-letter words, use the color hints, and try to eliminate unlikely letters early.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Is my data safe on Wordle?</h3>
            <p>We take your privacy seriously. Please read our <a href="/privacy" className="text-primary-500 underline">Privacy Policy</a> for details.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Can I play previous Wordle puzzles?</h3>
            <p>Currently, only the daily puzzle is available. Stay tuned for updates!</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">How can I contact the Wordle team?</h3>
            <p>Visit our <a href="/contact" className="text-primary-500 underline">Contact</a> page to reach out to us with any questions or feedback.</p>
          </div>
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