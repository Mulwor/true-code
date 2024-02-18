import { memo, ReactNode } from 'react';
// import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { classNames } from 'shared/libs/classNames/classNames';
import style from './Page.module.scss';

interface PageProps {
  className?: string;
  children: ReactNode;
}

export const Page = memo((props: PageProps) => {
  const { className, children } = props;

  return (
    <section className={classNames(style.Page, {}, [className])}>
      {children}
    </section>
  );
});
