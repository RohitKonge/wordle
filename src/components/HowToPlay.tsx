import React from 'react';
import { X } from 'lucide-react';

interface HowToPlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const HowToPlay: React.FC<HowToPlayProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 animate-slide-up relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 hover:bg-gray-100 rounded-full"
        >
          <X size={20} />
        </button>
        
        <h2 className="text-2xl font-bold mb-4 text-center">How to play</h2>
        
        <p className="text-center mb-6">
          You have to guess the hidden word in 6 tries and the color of the letters
          changes to show how close you are.
        </p>

        <p className="mb-4">To start the game, just enter any word, for example:</p>

        <div className="grid grid-cols-5 gap-1 mb-4">
          <div className="bg-gray-400 text-white w-12 h-12 flex items-center justify-center text-2xl font-bold rounded">T</div>
          <div className="bg-yellow-500 text-white w-12 h-12 flex items-center justify-center text-2xl font-bold rounded">A</div>
          <div className="bg-gray-400 text-white w-12 h-12 flex items-center justify-center text-2xl font-bold rounded">B</div>
          <div className="bg-yellow-500 text-white w-12 h-12 flex items-center justify-center text-2xl font-bold rounded">L</div>
          <div className="bg-green-500 text-white w-12 h-12 flex items-center justify-center text-2xl font-bold rounded">E</div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-mono">T, B</span> aren't in the target word at all.
          </div>
          <div className="flex items-center gap-2 mb-2">
            <span className="font-mono">A, L</span> is in the word but in the wrong spot.
          </div>
          <div className="flex items-center gap-2">
            <span className="font-mono">E</span> is in the word and in the correct spot.
          </div>
        </div>

        <p className="mb-4">Another try to find matching letters in the target word.</p>

        <div className="grid grid-cols-5 gap-1 mb-4">
          <div className="bg-green-500 text-white w-12 h-12 flex items-center justify-center text-2xl font-bold rounded">F</div>
          <div className="bg-green-500 text-white w-12 h-12 flex items-center justify-center text-2xl font-bold rounded">L</div>
          <div className="bg-green-500 text-white w-12 h-12 flex items-center justify-center text-2xl font-bold rounded">A</div>
          <div className="bg-gray-400 text-white w-12 h-12 flex items-center justify-center text-2xl font-bold rounded">S</div>
          <div className="bg-gray-400 text-white w-12 h-12 flex items-center justify-center text-2xl font-bold rounded">H</div>
        </div>

        <p className="text-center mb-4">So close!</p>

        <div className="grid grid-cols-5 gap-1 mb-4">
          <div className="bg-green-500 text-white w-12 h-12 flex items-center justify-center text-2xl font-bold rounded">F</div>
          <div className="bg-green-500 text-white w-12 h-12 flex items-center justify-center text-2xl font-bold rounded">L</div>
          <div className="bg-green-500 text-white w-12 h-12 flex items-center justify-center text-2xl font-bold rounded">A</div>
          <div className="bg-green-500 text-white w-12 h-12 flex items-center justify-center text-2xl font-bold rounded">M</div>
          <div className="bg-green-500 text-white w-12 h-12 flex items-center justify-center text-2xl font-bold rounded">E</div>
        </div>

        <p className="text-center font-bold">Got it! 🎉</p>
      </div>
    </div>
  );
};

export default HowToPlay;