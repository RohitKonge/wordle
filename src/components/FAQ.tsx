import React from 'react';

const FAQ: React.FC = () => (
  <section className="max-w-2xl mx-auto px-4 py-12">
    <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {"@type": "Question","name": "What is Wordle?","acceptedAnswer": {"@type": "Answer","text": "Wordle is a free online word puzzle game where you guess a hidden five-letter word in six tries or less."}},
        {"@type": "Question","name": "How do I play Wordle?","acceptedAnswer": {"@type": "Answer","text": "Enter a valid five-letter word and submit your guess. The colors of the tiles will indicate how close your guess is to the correct word."}},
        {"@type": "Question","name": "Is Wordle free to play?","acceptedAnswer": {"@type": "Answer","text": "Yes, Wordle is completely free to play with no registration required."}},
        {"@type": "Question","name": "Can I play Wordle on my phone?","acceptedAnswer": {"@type": "Answer","text": "Absolutely! Wordle is optimized for mobile devices and works seamlessly on smartphones and tablets."}},
        {"@type": "Question","name": "How often is there a new Wordle puzzle?","acceptedAnswer": {"@type": "Answer","text": "A new Wordle puzzle is available every day."}},
        {"@type": "Question","name": "Can I share my Wordle results?","acceptedAnswer": {"@type": "Answer","text": "Yes! After solving the puzzle, you can share your results with friends on social media."}},
        {"@type": "Question","name": "Are there any tips for solving Wordle?","acceptedAnswer": {"@type": "Answer","text": "Start with common five-letter words, use the color hints, and try to eliminate unlikely letters early."}},
        {"@type": "Question","name": "Is my data safe on Wordle?","acceptedAnswer": {"@type": "Answer","text": "We take your privacy seriously. Please read our Privacy Policy for details."}},
        {"@type": "Question","name": "Can I play previous Wordle puzzles?","acceptedAnswer": {"@type": "Answer","text": "Currently, only the daily puzzle is available. Stay tuned for updates!"}},
        {"@type": "Question","name": "How can I contact the Wordle team?","acceptedAnswer": {"@type": "Answer","text": "Visit our Contact page to reach out to us with any questions or feedback."}}
      ]
    })}} />
    <div className="space-y-6 mt-4">
      <div>
        <h2 className="text-xl font-semibold">What is Wordle?</h2>
        <p>Wordle is a free online word puzzle game where you guess a hidden five-letter word in six tries or less.</p>
      </div>
      <div>
        <h2 className="text-xl font-semibold">How do I play Wordle?</h2>
        <p>Enter a valid five-letter word and submit your guess. The colors of the tiles will indicate how close your guess is to the correct word.</p>
      </div>
      <div>
        <h2 className="text-xl font-semibold">Is Wordle free to play?</h2>
        <p>Yes, Wordle is completely free to play with no registration required.</p>
      </div>
      <div>
        <h2 className="text-xl font-semibold">Can I play Wordle on my phone?</h2>
        <p>Absolutely! Wordle is optimized for mobile devices and works seamlessly on smartphones and tablets.</p>
      </div>
      <div>
        <h2 className="text-xl font-semibold">How often is there a new Wordle puzzle?</h2>
        <p>A new Wordle puzzle is available every day.</p>
      </div>
      <div>
        <h2 className="text-xl font-semibold">Can I share my Wordle results?</h2>
        <p>Yes! After solving the puzzle, you can share your results with friends on social media.</p>
      </div>
      <div>
        <h2 className="text-xl font-semibold">Are there any tips for solving Wordle?</h2>
        <p>Start with common five-letter words, use the color hints, and try to eliminate unlikely letters early.</p>
      </div>
      <div>
        <h2 className="text-xl font-semibold">Is my data safe on Wordle?</h2>
        <p>We take your privacy seriously. Please read our <a href="/privacy" className="text-primary-500 underline">Privacy Policy</a> for details.</p>
      </div>
      <div>
        <h2 className="text-xl font-semibold">Can I play previous Wordle puzzles?</h2>
        <p>Currently, only the daily puzzle is available. Stay tuned for updates!</p>
      </div>
      <div>
        <h2 className="text-xl font-semibold">How can I contact the Wordle team?</h2>
        <p>Visit our <a href="/contact" className="text-primary-500 underline">Contact</a> page to reach out to us with any questions or feedback.</p>
      </div>
    </div>
  </section>
);

export default FAQ;
