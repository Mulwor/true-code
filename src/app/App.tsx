import "./styles/index.scss"
import { Link } from "react-router-dom"
import { classNames } from "shared/libs/classNames/classNames"
import { useTheme } from "./provider/ThemeProvider"
import { AppRouter } from "./provider/router"
import { Navbar } from "widget/Navbar"

const App = () => {
  // * Берет из контекста цвет темы
  const { theme } = useTheme()
 
  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <AppRouter />
    </div>
  )
}

export default App
