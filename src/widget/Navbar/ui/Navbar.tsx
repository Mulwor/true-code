import React from "react"
import { Link } from "react-router-dom"
import { classNames } from "shared/libs/classNames/classNames"
import style from "./Navbar.module.scss"
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink"

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(style.navbar, {}, [className])}>
      <div className={style.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to={"/"} className={style.mainLink}>
          Главная
        </AppLink>
        <AppLink theme={AppLinkTheme.RED} to={"/about"}>
          О сайте
        </AppLink>
      </div>
    </div>
  )
}
