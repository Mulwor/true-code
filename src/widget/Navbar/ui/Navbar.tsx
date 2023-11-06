import { classNames } from 'shared/libs/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import style from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}

export function Navbar({ className }: NavbarProps) {
  return (
    <div className={classNames(style.navbar, {}, [className])}>
      <div className={style.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/" className={style.mainLink}>
          Главная
        </AppLink>
        <AppLink theme={AppLinkTheme.RED} to="/about">
          О сайте
        </AppLink>
      </div>
    </div>
  );
}
