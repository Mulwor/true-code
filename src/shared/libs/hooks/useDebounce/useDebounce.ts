import { MutableRefObject, useCallback, useRef } from 'react';

// Позволяет отменить предыдущие событие в течение какого-то времени
// Другими словами - до тех пор пока мы что-то водим в инпут, у нас
// коллбек вызываться не будет, как только пройдет время у нас
// вызвется коллбек, а все предыдущие вызовы будут отменены.
export function useDebounce(callback: (...args: any[]) => void, delay: number) {
  const timer = useRef() as MutableRefObject<any>;

  return useCallback((...args: any[]) => {
    // Если у нас в реф-тайме уже сохранен какой-то таймаут, то мы его очищаем
    if (timer.current) {
      clearTimeout(timer.current);
    }

    // и именно в этом таймауте мы будем вызывать коллбек
    timer.current = setTimeout(() => {
      callback(...args);
    }, delay);
  }, [callback, delay]);
}
