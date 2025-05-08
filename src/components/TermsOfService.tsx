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
        <p className="text-gray-600 dark:text-gray-300 mb-4">Last updated: May 8, 2025</p>
        <div className="space-y-6 text-gray-600 dark:text-gray-300">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Use of Service</h2>
            <p>Wordle is a free online word puzzle game for personal, non-commercial use.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">User Conduct</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>You agree not to misuse the website or attempt to disrupt its operation.</li>
              <li>No cheating, automation, or exploitation methods allowed.</li>
              <li>Do not share solutions or spoilers before the daily reset.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Intellectual Property</h2>
            <p>All content, including the game and design, is owned by Wordle or its licensors.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">No Warranty</h2>
            <p>The service is provided “as is” without warranties of any kind.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Limitation of Liability</h2>
            <p>We are not liable for any damages arising from your use of the site.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Changes</h2>
            <p>We may update these terms at any time. Continued use constitutes acceptance.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Governing Law</h2>
            <p>These terms are governed by the laws of your jurisdiction.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Contact</h2>
            <p>For questions, please <Link to="/contact" className="text-primary-500 hover:text-primary-600">contact us</Link>.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;