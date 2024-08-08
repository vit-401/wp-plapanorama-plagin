import { useEffect, useState, useCallback } from 'react';

const useInfiniteProgress = (initialValue = 0, speed = 10) => {
  const [percent, setPercent] = useState(initialValue);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prev) => (prev >= 100 ? 0 : prev + 1));
    }, speed);

    return () => clearInterval(interval);
  }, [speed]);

  const resetInitValue = useCallback((value) => {
    setPercent(value);
  }, [initialValue]);

  return [percent, resetInitValue];
};

export default useInfiniteProgress;
