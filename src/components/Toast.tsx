import React from 'react';
import { useGame } from '../context/GameContext';

const Toast: React.FC = () => {
  const { toastMessage } = useGame();

  if (!toastMessage) return null;

  return (
    <div className="fixed top-20 left-1/2 transform -translate-x-1/2 animate-fade-in z-50">
      <div className="bg-black/90 text-white py-3 px-6 rounded-full shadow-lg backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></div>
          {toastMessage}
        </div>
      </div>
    </div>
  );
};

export default Toast;