import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
        <Link
          to="/"
          className="inline-flex items-center text-primary-500 hover:text-primary-600 mb-6"
        >
          ← Back to Game
        </Link>

        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Privacy Policy</h1>
        
        <div className="space-y-6 text-gray-600 dark:text-gray-300">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Introduction</h2>
            <p>
              At Wordle.work, we take your privacy seriously. This Privacy Policy explains how we collect,
              use, and protect your personal information when you use our online word game.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Information We Collect</h2>
            <p className="mb-4">We collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Game statistics and progress (stored locally on your device)</li>
              <li>Device information (browser type, operating system)</li>
              <li>Game preferences and settings</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">How We Use Your Information</h2>
            <p className="mb-4">Your information is used to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Save your game progress and statistics</li>
              <li>Improve game performance and user experience</li>
              <li>Maintain and optimize the website</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Data Storage</h2>
            <p>
              All game progress and settings are stored locally on your device using browser local storage.
              We do not store any personal information on our servers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Cookies</h2>
            <p>
              We use essential cookies to maintain your game settings and preferences. These cookies are
              necessary for the proper functioning of the game and do not track personal information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Third-Party Services</h2>
            <p>
              We may use third-party services for analytics and performance monitoring. These services
              collect anonymous usage data to help us improve the game experience.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Your Rights</h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Clear your local game data at any time</li>
              <li>Opt-out of non-essential cookies</li>
              <li>Request information about your data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Contact Us</h2>
            <p>
              If you have any questions about our Privacy Policy, please{" "}
              <Link to="/contact" className="text-primary-500 hover:text-primary-600">
                contact us
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Updates to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. The latest version will always be
              posted on this page with the effective date.
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

export default PrivacyPolicy;