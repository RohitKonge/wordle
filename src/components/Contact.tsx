import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, MessageSquare, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('sending');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('sent');
      // Reset form after 3 seconds
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
        <Link
          to="/"
          className="inline-flex items-center text-primary-500 hover:text-primary-600 mb-6"
        >
          ← Back to Game
        </Link>

        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Contact Us</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-4">We’d love to hear from you! For support, feedback, or partnership opportunities, please reach out using the form below or email us at <a href="mailto:support@wordle.work" className="text-primary-500 underline">support@wordle.work</a>. We aim to respond within 24-48 hours.</p>
        
        <div className="space-y-6 text-gray-600 dark:text-gray-300">
          <section className="mb-8">
            <p>
              Have questions, suggestions, or need help? We'd love to hear from you! Fill out the form
              below or reach out to us directly at support@wordle.work
            </p>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <section>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-colors"
                  >
                    <option value="">Select a topic</option>
                    <option value="feedback">Game Feedback</option>
                    <option value="bug">Report a Bug</option>
                    <option value="suggestion">Suggestion</option>
                    <option value="support">Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={formStatus !== 'idle'}
                  className={`w-full flex items-center justify-center gap-2 bg-gradient text-white font-semibold py-3 px-6 rounded-xl transition-all transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed ${
                    formStatus === 'sending' ? 'animate-pulse' : ''
                  }`}
                >
                  {formStatus === 'idle' && (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                  {formStatus === 'sending' && 'Sending...'}
                  {formStatus === 'sent' && 'Message Sent!'}
                  {formStatus === 'error' && 'Error Sending Message'}
                </button>
              </form>
            </section>

            <section className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Other Ways to Reach Us
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-primary-500 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white mb-1">Email</h3>
                    <p className="text-sm">
                      For general inquiries:<br />
                      <a href="mailto:support@wordle.work" className="text-primary-500 hover:text-primary-600">
                        support@wordle.work
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MessageSquare className="w-6 h-6 text-primary-500 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white mb-1">Social Media</h3>
                    <p className="text-sm">
                      Follow us for updates and join our community:<br />
                      <a href="https://twitter.com/wordlework" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-600">
                        Twitter
                      </a>
                      {" • "}
                      <a href="https://facebook.com/wordlework" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-600">
                        Facebook
                      </a>
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-600">
                  <p className="text-sm">
                    We typically respond within 24 hours during business days. For immediate game-related
                    help, check out our{" "}
                    <Link to="/" className="text-primary-500 hover:text-primary-600">
                      How to Play guide
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;