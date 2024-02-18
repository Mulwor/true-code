import {
  memo, MutableRefObject, ReactNode, useRef,
} from 'react';
import { classNames } from 'shared/libs/classNames/classNames';
import { useInfiniteScroll } from 'shared/libs/hooks/useInfiniteScroll/useInfiniteScroll';
import style from './Page.module.scss';

interface PageProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
}

export const Page = memo((props: PageProps) => {
  const { className, children, onScrollEnd } = props;

  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

  useInfiniteScroll({
    triggerRef,
    // Элемент в котором у нас как раз будет скролл
    wrapperRef,
    callback: onScrollEnd,
  });

  return (
    <section
      ref={wrapperRef}
      className={classNames(style.Page, {}, [className])}
    >
      {children}
      <div ref={triggerRef} />
    </section>
  );
});
