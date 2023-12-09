import { classNames } from 'shared/libs/classNames/classNames';
import { memo } from 'react';
import style from './Text.module.scss';

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
}

export const Text = memo((props : TextProps) => {
  const {
    className, title, text, theme = TextTheme.PRIMARY,
  } = props;

  return (
    <div className={classNames(style.Text, { [style[theme]]: true }, [className])}>
      {title && <p className={style.title}>{title}</p>}
      {text && <p className={style.text}>{text}</p>}
    </div>
  );
});
