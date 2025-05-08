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
        <p className="text-gray-600 dark:text-gray-300 mb-4">Last updated: May 8, 2025</p>
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
            <ul className="list-disc pl-6 space-y-2">
              <li>Cookies to enhance your experience and remember your preferences</li>
              <li>Anonymous analytics data about how you use our site</li>
              <li>Advertising cookies for relevant ads</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide and improve our services</li>
              <li>To analyze usage and trends</li>
              <li>To display relevant advertisements</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Data Sharing</h2>
            <p>We do not sell or share your personal information with third parties except as necessary for analytics and advertising.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Your Choices</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>You can disable cookies in your browser settings</li>
              <li>You may opt out of personalized ads via your browser or ad settings</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Security</h2>
            <p>We implement reasonable security measures to protect your data.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Children’s Privacy</h2>
            <p>Wordle is not intended for children under 13. We do not knowingly collect personal information from children.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Changes to This Policy</h2>
            <p>We may update this policy from time to time. Please review it regularly.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Contact Us</h2>
            <p>If you have questions about this Privacy Policy, please <Link to="/contact" className="text-primary-500 hover:text-primary-600">contact us</Link>.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;