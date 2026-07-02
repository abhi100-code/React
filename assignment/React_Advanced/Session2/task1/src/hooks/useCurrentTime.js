import { useState, useEffect } from 'react';

/**
 * Custom hook that returns the current time and updates every second
 * @returns {string} The current time in HH:MM:SS format
 */
export const useCurrentTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Set interval to update time every second
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup: clear interval when component unmounts
    return () => clearInterval(timer);
  }, []);

  // Format time as HH:MM:SS
  const formattedTime = time.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  });

  return formattedTime;
};
