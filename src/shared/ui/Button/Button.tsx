import { classNames } from 'shared/libs/classNames/classNames'
import { ButtonHTMLAttributes, FC } from 'react'
import style from './Button.module.scss'

export enum ThemeButton {
  CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ThemeButton
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className, children, theme, ...otherProps
    } = props

    return (
      <button
          type="button"
          className={classNames(style.Button, {}, [className, style[theme]])}
          {...otherProps}
        >
          {children}
        </button>
    )
}
