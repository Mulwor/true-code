import "./styles/index.scss"
import { Link } from "react-router-dom"
import { classNames } from "shared/libs/classNames/classNames"
import { useTheme } from "./provider/ThemeProvider"
import { AppRouter } from "./provider/router"

const App = () => {
  const { theme, toggleTheme } = useTheme()
  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>Кнопелла</button>
      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>О сайте</Link>

      <AppRouter />
    </div>
  )
}

export default App
