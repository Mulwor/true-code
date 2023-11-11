import { classNames } from 'shared/libs/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import style from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
  square?: boolean;
  size?: ButtonSize;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className, children, theme, square, size = ButtonSize.M, ...otherProps
  } = props;

  const mods: Record<string, boolean> = {
    [style[theme]]: true,
    [style.square]: square,
    [style[size]]: true,
  };

  return (
    <button
      type="button"
      className={classNames(style.Button, mods, [className, style[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
