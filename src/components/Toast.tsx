import React from 'react';
import { useGame } from '../context/GameContext';

const Toast: React.FC = () => {
  const { toastMessage } = useGame();

  if (!toastMessage) return null;

  return (
    <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-gray-800 dark:bg-gray-700 text-white py-2 px-4 rounded shadow-lg animate-fade-in">
      {toastMessage}
    </div>
  );
};

export default Toast;