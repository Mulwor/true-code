import { Mods, classNames } from 'shared/libs/classNames/classNames';
import { memo } from 'react';
import style from './Text.module.scss';

export enum TextTheme {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
  ERROR = 'error',
}

export enum TextAlign {
  RIGHT = 'right',
  LEFT = 'left',
  CENTER = 'center',
}

export enum TextSize {
  M = 'size_m',
  L = 'size_l',
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
  align?: TextAlign;
  size?: TextSize;
}

export const Text = memo((props : TextProps) => {
  const {
    className,
    title,
    text,
    theme = TextTheme.PRIMARY,
    align = TextAlign.LEFT,
    size = TextSize.M,
  } = props;

  const mods: Mods = {
    [style[theme]]: true,
    [style[align]]: true,
    [style[size]]: true,
  };

  return (
    <div className={classNames(style.Text, mods, [className])}>
      {title && <p className={style.title}>{title}</p>}
      {text && <p className={style.text}>{text}</p>}
    </div>
  );
});
