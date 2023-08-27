import "./styles/index.scss"
import { Link } from "react-router-dom"
import { classNames } from "shared/libs/classNames/classNames"
import { useTheme } from "./provider/ThemeProvider"
import { AppRouter } from "./provider/router"
import { Navbar } from "widget/Navbar"
import { Sidebar } from "widget/Sidebar/ui/Sidebar/Sidebar"
import { Suspense } from "react"
import { useTranslation } from "react-i18next"

const Component = () => {
  const { t, i18n } = useTranslation()

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? "en" : "ru")
  }

  return (
    <>
      <button onClick={toggle}>{t("Перевод")}</button>
      <div>{t("Tестовый пример")}</div>
    </>
  )
}

const App = () => {
  // * Берет из контекста цвет темы
  const { theme } = useTheme()

  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <Component />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  )
}

export default App
