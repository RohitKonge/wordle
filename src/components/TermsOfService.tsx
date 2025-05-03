import React from 'react';
import { Link } from 'react-router-dom';

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
        <Link
          to="/"
          className="inline-flex items-center text-primary-500 hover:text-primary-600 mb-6"
        >
          ← Back to Game
        </Link>

        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Terms of Service</h1>
        
        <div className="space-y-6 text-gray-600 dark:text-gray-300">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Agreement to Terms</h2>
            <p>
              By accessing and playing Wordle.work, you agree to be bound by these Terms of Service. 
              If you disagree with any part of these terms, you may not access the service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Intellectual Property</h2>
            <p>
              The game, including all content, features, and functionality, is owned by Wordle.work and
              is protected by international copyright, trademark, and other intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">User Conduct</h2>
            <p className="mb-4">You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use any cheats, automation, or exploitation methods</li>
              <li>Attempt to access restricted areas of the website</li>
              <li>Interfere with other users' gameplay experience</li>
              <li>Use the service for any unlawful purpose</li>
              <li>Share solutions or spoilers publicly before the daily reset</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Game Rules</h2>
            <p className="mb-4">The basic rules of the game are:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Players have six attempts to guess the word</li>
              <li>Each guess must be a valid word in our dictionary</li>
              <li>Color hints will be provided after each guess</li>
              <li>Players can adjust game settings to their preference</li>
              <li>Game progress is saved locally on the player's device</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Service Modifications</h2>
            <p>
              We reserve the right to modify or discontinue the service temporarily or permanently at any
              time, with or without notice. We shall not be liable for any modification, suspension, or
              discontinuance of the service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Limitation of Liability</h2>
            <p>
              Wordle.work shall not be liable for any indirect, incidental, special, consequential, or
              punitive damages resulting from your use or inability to use the service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Privacy Policy</h2>
            <p>
              Your use of Wordle.work is also governed by our{" "}
              <Link to="/privacy" className="text-primary-500 hover:text-primary-600">
                Privacy Policy
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Contact</h2>
            <p>
              For any questions about these Terms of Service, please{" "}
              <Link to="/contact" className="text-primary-500 hover:text-primary-600">
                contact us
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Changes to Terms</h2>
            <p>
              We reserve the right to update these terms at any time. We will notify users of any
              material changes by posting the new Terms of Service on this page.
            </p>
          </section>

          <footer className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Last updated: May 3, 2025
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;