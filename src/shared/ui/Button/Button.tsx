import { classNames } from 'shared/libs/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import style from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
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
  // В момент отправки загрузки кнопка будет не активной
  disabled?: boolean;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    theme,
    square,
    size = ButtonSize.M,
    disabled,
    ...otherProps
  } = props;

  const mods: Record<string, boolean> = {
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
};
