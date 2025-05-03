import { GameProvider } from './context/GameContext';
import Board from './components/Board';
import Keyboard from './components/Keyboard';
import Header from './components/Header';
import Toast from './components/Toast';
import GameOver from './components/GameOver';

function App() {
  return (
    <GameProvider>
      <div className="flex flex-col items-center min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
        <Header />
        <main className="flex flex-col items-center justify-center w-full max-w-lg px-4 py-8">
          <Board />
          <Keyboard />
          <Toast />
          <GameOver />

          {/* How to Play Section */}
          <div className="w-full max-w-2xl mt-12 mb-8 px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
              How to play the Wordly Game?
            </h2>

            {/* Step 1 */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Enter the first word
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                To get started, simply enter any five-letter word to find out which letters match the hidden word. In total, you will have 6 tries to guess the hidden word.
              </p>
              <div className="flex gap-1">
                <div className="w-12 h-12 flex items-center justify-center text-2xl font-bold rounded bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white">D</div>
                <div className="w-12 h-12 flex items-center justify-center text-2xl font-bold rounded bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white">R</div>
                <div className="w-12 h-12 flex items-center justify-center text-2xl font-bold rounded bg-yellow-500 text-white">E</div>
                <div className="w-12 h-12 flex items-center justify-center text-2xl font-bold rounded bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white">A</div>
                <div className="w-12 h-12 flex items-center justify-center text-2xl font-bold rounded bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white">M</div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Find out what letters are in the hidden word
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                If any letters are marked in yellow, this means that this letter is in the hidden word, but doesn't match the exact location in this word. If any letter is marked in green, then it is in that word and is in the exact location. If the letter remains gray, then it isn't in the hidden word.
              </p>
              <div className="flex flex-col gap-1">
                <div className="flex gap-1">
                  <div className="w-12 h-12 flex items-center justify-center text-2xl font-bold rounded bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white">D</div>
                  <div className="w-12 h-12 flex items-center justify-center text-2xl font-bold rounded bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white">R</div>
                  <div className="w-12 h-12 flex items-center justify-center text-2xl font-bold rounded bg-yellow-500 text-white">E</div>
                  <div className="w-12 h-12 flex items-center justify-center text-2xl font-bold rounded bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white">A</div>
                  <div className="w-12 h-12 flex items-center justify-center text-2xl font-bold rounded bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white">M</div>
                </div>
                <div className="flex gap-1">
                  <div className="w-12 h-12 flex items-center justify-center text-2xl font-bold rounded bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white">R</div>
                  <div className="w-12 h-12 flex items-center justify-center text-2xl font-bold rounded bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white">A</div>
                  <div className="w-12 h-12 flex items-center justify-center text-2xl font-bold rounded bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white">D</div>
                  <div className="w-12 h-12 flex items-center justify-center text-2xl font-bold rounded bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white">I</div>
                  <div className="w-12 h-12 flex items-center justify-center text-2xl font-bold rounded bg-yellow-500 text-white">O</div>
                </div>
                <div className="flex gap-1">
                  <div className="w-12 h-12 flex items-center justify-center text-2xl font-bold rounded bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white">T</div>
                  <div className="w-12 h-12 flex items-center justify-center text-2xl font-bold rounded bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white">A</div>
                  <div className="w-12 h-12 flex items-center justify-center text-2xl font-bold rounded bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white">B</div>
                  <div className="w-12 h-12 flex items-center justify-center text-2xl font-bold rounded bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white">L</div>
                  <div className="w-12 h-12 flex items-center justify-center text-2xl font-bold rounded bg-green-500 text-white">E</div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Try to guess the hidden word
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Now if you know a few letters with the exact location (green) and a few letters that are in the word (yellow) you can try to solve the hidden word and win the game!
              </p>
              <div className="grid grid-cols-5 gap-1">
                <div className="w-12 h-12 flex items-center justify-center text-2xl font-bold rounded bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white">D</div>
                <div className="w-12 h-12 flex items-center justify-center text-2xl font-bold rounded bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white">R</div>
                <div className="w-12 h-12 flex items-center justify-center text-2xl font-bold rounded bg-yellow-500 text-white">E</div>
                <div className="w-12 h-12 flex items-center justify-center text-2xl font-bold rounded bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white">A</div>
                <div className="w-12 h-12 flex items-center justify-center text-2xl font-bold rounded bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white">M</div>
                <div className="w-12 h-12 flex items-center justify-center text-2xl font-bold rounded bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white">R</div>
                <div className="w-12 h-12 flex items-center justify-center text-2xl font-bold rounded bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white">A</div>
                <div className="w-12 h-12 flex items-center justify-center text-2xl font-bold rounded bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white">D</div>
                <div className="w-12 h-12 flex items-center justify-center text-2xl font-bold rounded bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white">I</div>
                <div className="w-12 h-12 flex items-center justify-center text-2xl font-bold rounded bg-yellow-500 text-white">O</div>
                <div className="w-12 h-12 flex items-center justify-center text-2xl font-bold rounded bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white">T</div>
                <div className="w-12 h-12 flex items-center justify-center text-2xl font-bold rounded bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white">A</div>
                <div className="w-12 h-12 flex items-center justify-center text-2xl font-bold rounded bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white">B</div>
                <div className="w-12 h-12 flex items-center justify-center text-2xl font-bold rounded bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white">L</div>
                <div className="w-12 h-12 flex items-center justify-center text-2xl font-bold rounded bg-green-500 text-white">E</div>
                <div className="w-12 h-12 flex items-center justify-center text-2xl font-bold rounded bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white">S</div>
                <div className="w-12 h-12 flex items-center justify-center text-2xl font-bold rounded bg-yellow-500 text-white">N</div>
                <div className="w-12 h-12 flex items-center justify-center text-2xl font-bold rounded bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white">A</div>
                <div className="w-12 h-12 flex items-center justify-center text-2xl font-bold rounded bg-green-500 text-white">C</div>
                <div className="w-12 h-12 flex items-center justify-center text-2xl font-bold rounded bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white">K</div>
                <div className="w-12 h-12 flex items-center justify-center text-2xl font-bold rounded bg-yellow-500 text-white">N</div>
                <div className="w-12 h-12 flex items-center justify-center text-2xl font-bold rounded bg-yellow-500 text-white">O</div>
                <div className="w-12 h-12 flex items-center justify-center text-2xl font-bold rounded bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white">I</div>
                <div className="w-12 h-12 flex items-center justify-center text-2xl font-bold rounded bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white">S</div>
                <div className="w-12 h-12 flex items-center justify-center text-2xl font-bold rounded bg-green-500 text-white">E</div>
                <div className="w-12 h-12 flex items-center justify-center text-2xl font-bold rounded bg-green-500 text-white">O</div>
                <div className="w-12 h-12 flex items-center justify-center text-2xl font-bold rounded bg-green-500 text-white">U</div>
                <div className="w-12 h-12 flex items-center justify-center text-2xl font-bold rounded bg-green-500 text-white">N</div>
                <div className="w-12 h-12 flex items-center justify-center text-2xl font-bold rounded bg-green-500 text-white">C</div>
                <div className="w-12 h-12 flex items-center justify-center text-2xl font-bold rounded bg-green-500 text-white">E</div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="w-full max-w-2xl mt-12 mb-8 px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
              Frequently Asked Questions
            </h2>

            <div className="space-y-8">
              {/* What are the rules of the Wordly game? */}
              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  What are the rules of the Wordly game?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  The main goal of the game is to guess the hidden word in 6 tries. In each line, you need to enter any word from 4 to 11 letters to find out what letters are in the target word. Depending on which word you entered, the letters will be highlighted in three colors.
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Color marking:</h4>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-gray-300 dark:bg-gray-700"></div>
                    <p className="text-gray-700 dark:text-gray-300">The letter isn't in the target word at all.</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-yellow-500"></div>
                    <p className="text-gray-700 dark:text-gray-300">The letter is in the word but in the wrong spot.</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-green-500"></div>
                    <p className="text-gray-700 dark:text-gray-300">The letter is in the word and in the correct spot.</p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mt-4">
                  To win you need to completely guess the hidden word (all letters are <span className="text-green-500">green</span>).
                </p>
              </div>

              {/* What is the best word to start the game? */}
              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  What is the best word to start the game?
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  At the beginning of the game, try to use a word without repeating letters and with as many vowels as possible, such as the word "RADIO". However, mathematician Grant Sanderson found that the best starting word is "CRANE" or "SLOTH", which includes frequently used letters.
                </p>
              </div>

              {/* What dictionary are you using? */}
              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  What dictionary are you using?
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  In American English, we use a dictionary from the Letterpress word list that includes a list of ~275,000 words. This dictionary is constantly updated with new words based on real feedback from people.
                </p>
              </div>

              {/* Why did I get a "Word not found" message? */}
              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  Why did I get a "Word not found" message?
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  This alert message means that the given word was not found in our word bank. Try another word, or if you think the word is correct, let us know.
                </p>
              </div>

              {/* The hidden word was incorrect */}
              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  The hidden word was incorrect. Can you fix this?
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  If you think that the hidden word is wrong or incorrect, let us know. We will definitely fix this as soon as possible.
                </p>
              </div>

              {/* How to change the entered letter? */}
              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  How to change the entered letter?
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  If you want to change an incorrectly entered letter, just press the "Backspace" button, but remember that you cannot change the entered word.
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="w-full text-center py-8 text-gray-600 dark:text-gray-400 mt-8 border-t border-gray-200 dark:border-gray-700">
            2002-2025 Wordly
          </footer>
        </main>
      </div>
    </GameProvider>
  );
}

export default App;