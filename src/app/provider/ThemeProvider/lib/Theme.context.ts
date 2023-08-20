import { createContext } from "react"

export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

export interface ThemeContextProps {
  theme?: Theme
  setTheme?: (theme: Theme) => void
}

export const LOCAL_STORAGE_THEME_KEY = "theme"

// * Создаёт объект Context. Когда React рендерит компонент, который подписан на этот объект, 
// * на этот объект, React получит текущее значение контекста из ближайшего подходящего Provider 
// * выше в дереве компонентов.
export const ThemeContext = createContext<ThemeContextProps>({})

