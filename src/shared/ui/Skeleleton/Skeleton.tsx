import { classNames } from 'shared/libs/classNames/classNames';
import { CSSProperties, memo } from 'react';
import style from './Skeleton.module.scss';

interface SkeletonProps {
  className?: string;
  height?: string | number;
  width?: string | number;
  border?: string;
}

export const Skeleton = memo((props: SkeletonProps) => {
  const {
    className,
    height,
    width,
    border,
  } = props;

  const styles: CSSProperties = {
    width,
    height,
    borderRadius: border,
  };

  return (
    <div className={classNames(style.Skeleton, {}, [className])} style={styles} />
  );
});
