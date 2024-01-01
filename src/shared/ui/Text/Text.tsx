import { Mods, classNames } from 'shared/libs/classNames/classNames';
import { memo } from 'react';
import style from './Text.module.scss';

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
}

export enum TextAlign {
  RIGHT = 'right',
  LEFT = 'left',
  CENTER = 'center',
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
  align?: TextAlign;
}

export const Text = memo((props : TextProps) => {
  const {
    className,
    title,
    text,
    theme = TextTheme.PRIMARY,
    align = TextAlign.LEFT,
  } = props;

  const mods: Mods = {
    [style[theme]]: true,
    [style[align]]: true,
  };

  return (
    <div className={classNames(style.Text, mods, [className])}>
      {title && <p className={style.title}>{title}</p>}
      {text && <p className={style.text}>{text}</p>}
    </div>
  );
});
