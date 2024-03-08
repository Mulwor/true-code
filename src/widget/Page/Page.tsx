import {
  memo, MutableRefObject, ReactNode, useRef, UIEvent,
} from 'react';
import { classNames } from 'shared/libs/classNames/classNames';
import { useInfiniteScroll } from 'shared/libs/hooks/useInfiniteScroll/useInfiniteScroll';
import { useAppDispatch } from 'shared/libs/hooks/useAppDispatch/useAppDispatch';
import { scrollRestrationActions } from 'features/scrollRestaration';
import { useLocation } from 'react-router-dom';
import { useInitialEffect } from 'shared/libs/hooks/useInitialEffect/useInitialEffect';
import { useSelector } from 'react-redux';
import { getScrollRestrationByPath } from 'features/scrollRestaration/model/selector/scrollRestrationSelector';
import { StateShema } from 'app/provider/StoreProvider';
import { useThrottle } from 'shared/libs/hooks/useThrottle/useThrottle';
import style from './Page.module.scss';

interface PageProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
}

export const PAGE_ID = 'PAGE_ID';

export const Page = memo((props: PageProps) => {
  const { className, children, onScrollEnd } = props;
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const scrollPostion = useSelector(
    (state: StateShema) => getScrollRestrationByPath(state, pathname),
  );

  useInitialEffect(() => {
    wrapperRef.current.scrollTop = scrollPostion;
  });

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd,
  });

  const onScroll = useThrottle((event: UIEvent<HTMLDivElement>) => {
    dispatch(scrollRestrationActions.setScrollPosition({
      position: event.currentTarget.scrollTop,
      path: pathname,
    }));
  }, 500);

  return (
    <section
      ref={wrapperRef}
      className={classNames(style.Page, {}, [className])}
      onScroll={onScroll}
      id={PAGE_ID}
    >
      {children}
      {onScrollEnd
        ? (<div className={style.trigger} ref={triggerRef} />)
        : null }
    </section>
  );
});
