import { Suspense } from "react"
import "./styles/index.scss"
import { Routes, Route, Link } from "react-router-dom"
import { classNames } from "../helpers/classNames/classNames"
import { useTheme } from "./provider/ThemeProvider/lib/useTheme"
import { MainPageAsync } from "../pages/MainPage/MainPage.async"
import { AboutPageAsync } from "../pages/AboutPage/AboutPage.async"

const App = () => {
  const { theme, toggleTheme } = useTheme()
  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>Кнопелла</button>
      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>О сайте</Link>

      <Suspense fallback={<div>Loading</div>}>
        <Routes>
          <Route path={"/"} element={<MainPageAsync />} />
          <Route path={"/about"} element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
