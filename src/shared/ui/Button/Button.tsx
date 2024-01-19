import { Mods, classNames } from 'shared/libs/classNames/classNames';
import {
  ButtonHTMLAttributes, FC, ReactNode, memo,
} from 'react';
import style from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
  OUTLINE_RED = 'outline_red',
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
  disabled?: boolean;
  children?: ReactNode;
}

export const Button = memo((props: ButtonProps) => {
  const {
    className,
    children,
    theme = ThemeButton.OUTLINE,
    square,
    size = ButtonSize.M,
    disabled,
    ...otherProps
  } = props;

  const mods: Mods = {
    [style[theme]]: true,
    [style.square]: square,
    [style[size]]: true,
    [style.disabled]: disabled,
  };

  return (
    <button
      type="button"
      className={classNames(style.Button, mods, [className, style[theme]])}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
});
