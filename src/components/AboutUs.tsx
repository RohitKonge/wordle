import React from 'react';

const AboutUs: React.FC = () => (
  <section className="max-w-2xl mx-auto px-4 py-12">
    <h1 className="text-3xl font-bold mb-4">About Wordle</h1>
    <p className="mb-4">Wordle was created by a passionate team of word game lovers and web developers who believe in the power of simple, fun, and educational games. Our mission is to make learning and playing with words accessible to everyone, everywhere.</p>
    <h2 className="text-xl font-semibold mt-6 mb-2">Why We Built Wordle</h2>
    <p className="mb-4">We noticed a growing demand for engaging, brain-boosting games that are easy to play and accessible on any device. Wordle was designed to be fast, mobile-friendly, and enjoyable for all ages.</p>
    <h2 className="text-xl font-semibold mt-6 mb-2">Our Values</h2>
    <ul className="list-disc ml-6 mb-4">
      <li><strong>Trust:</strong> We respect your privacy and never require unnecessary information.</li>
      <li><strong>Experience:</strong> Our team has years of experience in game development and web design.</li>
      <li><strong>Community:</strong> We listen to our players and continuously improve based on your feedback.</li>
    </ul>
    <p>Thank you for being part of the Wordle community! <a href="/contact" className="text-primary-500 underline">Contact Us</a> | <a href="/privacy" className="text-primary-500 underline">Privacy Policy</a></p>
  </section>
);

export default AboutUs;
