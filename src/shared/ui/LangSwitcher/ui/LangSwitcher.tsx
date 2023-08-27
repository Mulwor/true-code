import { useTranslation } from "react-i18next"
import style from "./LangSwitcher.module.scss"
import { Button, ThemeButton } from "shared/ui/Button/Button"
import { classNames } from "shared/libs/classNames/classNames"

interface LangSwicherProps {
  className?: string
}

export const LangSwitcher = ({ className }: LangSwicherProps) => {
  const { t, i18n } = useTranslation()

  const toggle = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru")
  }

  return (
    <Button
      className={classNames(style.LangSwithcer, {}, [className])}
      theme={ThemeButton.CLEAR}
      onClick={toggle}
    >
      {t("Язык")}
    </Button>
  )
}
