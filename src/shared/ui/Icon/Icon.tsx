import React, { memo } from 'react';
import { classNames } from 'shared/libs/classNames/classNames';
import style from './Icon.module.scss';

interface IconProps {
  className?: string;
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>,
}

export const Icon = memo((props: IconProps) => {
  const {
    className,
    Svg,
  } = props;

  return (
    <Svg className={classNames(style.Icon, {}, [className])} />
  );
});
