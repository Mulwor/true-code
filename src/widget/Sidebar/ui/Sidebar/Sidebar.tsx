import { classNames } from "shared/libs/classNames/classNames"
import style from "./Sidebar.module.scss"
import { useState } from "react"
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher"

interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false)

  const onToggle = () => {
    setCollapsed((prev) => !prev)
  }

  return (
    <div className={classNames(style.Sidebar, { [style.collapsed]: collapsed }, [className])}>
      <button onClick={onToggle}>Toggle</button>
      <div className={style.switchers}>
        <ThemeSwitcher />
      </div>
    </div>
  )
}
