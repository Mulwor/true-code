import { MutableRefObject, useEffect, useRef } from 'react';

export interface useInfiniteScrollOptions {
  // Вызывается когда мы пересекли тот или иной элемент
  callback?: () => void;

  // Реактовский реф, на который нам необходимо будет триггерится
  // мы перекли элемент и в тот момент будем вызывать реф
  triggerRef: MutableRefObject<HTMLElement>;

  // Wrapper это сам враппер внутри которого находится скролл
  wrapperRef: MutableRefObject<HTMLElement>;
}

export function useInfiniteScroll({
  callback,
  triggerRef,
  wrapperRef,
}: useInfiniteScrollOptions) {
  // IntersectionObserver - выполняет задачу с бексонечным скроллом, где контент
  // подгружается по мере того как страница прокручивается вниз, и пользователю
  // не нужно переключаться между страницами.

  // Он позволяет указать функцию, которая будет вызвана всякий раз для элемента (target)
  // при пересечении его с областью видимости документа (по умолчанию) или заданным
  // элементом (root).
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (callback) {
      const options = {
        root: wrapperRef.current,
        rootMargin: '0px',
        threshold: 1.0,
      };

      observer.current = new IntersectionObserver(([entry]) => {
        // Данный колбек вызывается тогда когда мы находимся в самом внизу и следим за
        // событием
        if (entry.isIntersecting) {
          callback();
        }
      }, options);

      // Сделали объект наблюдатель и сказали за чем будем наблюдать
      observer.current.observe(triggerRef.current);
    }

    return () => {
      if (observer.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.current.unobserve(triggerRef.current);
      }
    };
  }, [callback, triggerRef, wrapperRef]);
}
