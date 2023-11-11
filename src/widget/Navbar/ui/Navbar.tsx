import { classNames } from 'shared/libs/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import style from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}

export function Navbar({ className }: NavbarProps) {
  const { t } = useTranslation();
  return (
    <div className={classNames(style.navbar, {}, [className])}>
      <div className={style.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/" className={style.mainLink}>
          {t('Главная')}
        </AppLink>
        <AppLink theme={AppLinkTheme.RED} to="/about">
          {t('О сайте')}
        </AppLink>
      </div>
    </div>
  );
}
