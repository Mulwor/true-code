import { Theme, useTheme } from "app/provider/ThemeProvider"
import style from "./ThemeSwitcher.module.scss"
import { classNames } from "shared/libs/classNames/classNames"
import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button 
      className={classNames(style.ThemeSwitcher, {}, [className])} 
      onClick={toggleTheme}>
        { theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </button>
  )
}
