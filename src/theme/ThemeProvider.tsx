import React, { FC, useMemo, useState } from "react"
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./Theme.context"

// Идет в локалсторедж ищет тему, если он пустой, то автоматически преобразовывается в светлоую тебму
const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT

// И в реакте когда мы передаем какой-то компонент обычно называется children и его можно получить задав тип
// FC => Function component
const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme)

  // Позволяет мемоизировать значение какого-то объекта, массива и каждый раз не создавать новый
  // а возвращать тот, которой существует
  const defaultProps = useMemo(() => ({
      theme: theme,
      setTheme: setTheme,
  }), [theme])

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
