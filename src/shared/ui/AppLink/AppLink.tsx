import { Link, LinkProps } from "react-router-dom"
import style from "./AppLink.module.scss"
import { classNames } from "shared/libs/classNames/classNames"
import { FC } from "react"

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  RED = "red",
}

interface AppLinkProps extends LinkProps {
  className?: string
  theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const {
    // * На какую страницу двигаться
    to,
    className,
    children,
    // * По дефолту у нас primary
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
  } = props

  return (
    <Link to={to} className={classNames(style.AppLink, {}, [className, style[theme]])} {...otherProps}>
      {children}
    </Link>
  )
}
