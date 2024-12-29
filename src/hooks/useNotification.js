import { useState, useCallback } from 'react';

export const useNotification = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState('');

  const showNotification = useCallback((msg) => {
    setMessage(msg);
    setIsVisible(true);
    setTimeout(() => setIsVisible(false), 3000);
  }, []);

  return {
    isVisible,
    message,
    showNotification
  };
};