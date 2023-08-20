import { useTheme } from "app/provider/ThemeProvider"
import style from "./ThemeSwitcher.module.scss"
import { classNames } from "shared/libs/classNames/classNames"

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button 
      className={classNames(style.ThemeSwitcher, {}, [className])} 
      onClick={toggleTheme}>
        Смена темы
    </button>
  )
}
