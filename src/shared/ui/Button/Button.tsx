import { classNames } from "shared/libs/classNames/classNames"
import style from "./Button.module.scss"
import { ButtonHTMLAttributes, FC } from "react"

export enum ThemeButton {
  CLEAR = "clear",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ThemeButton
}

export const Button: FC<ButtonProps> = (props) => {
  const { className, children, theme, ...otherProps } = props

  return (
    <button className={classNames(style.Button, {}, [className, style[theme]])} {...otherProps}>
      {children}
    </button>
  )
}
