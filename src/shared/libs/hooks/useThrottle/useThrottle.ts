import { useCallback, useRef } from 'react';

// Позволяет выполнить только 1 события в промежуток времени.
// Например позицию скрола мы заходим обновлять раз в секунду
export function useThrottle(callback: (...args: any[]) => void, delay: number) {
  const throttleRef = useRef(false);

  return useCallback((...args: any[]) => {
    if (!throttleRef.current) {
      callback(...args);
      throttleRef.current = true;

      setTimeout(() => {
        throttleRef.current = false;
      }, delay);
    }
  }, [callback, delay]);
}
