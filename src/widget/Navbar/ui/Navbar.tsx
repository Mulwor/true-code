import { classNames } from 'shared/libs/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { memo, useCallback, useState } from 'react';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'enteties/User';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import style from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(getUserAuthData);
  const dispacth = useDispatch();

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const onLogOut = useCallback(() => {
    dispacth(userActions.logout());
  }, [dispacth]);

  if (authData) {
    return (
      <header className={classNames(style.navbar, {}, [className])}>
        <Text
          className={style.appName}
          title={t('Ali Adigezalli')}
          theme={TextTheme.INVERTED}
        />
        <AppLink
          className={style.createLink}
          to={RoutePath.article_create}
          theme={AppLinkTheme.SECONDARY}
        >
          {t('Создать статью')}
        </AppLink>
        <Button
          theme={ThemeButton.CLEAR_INVERTED}
          className={style.links}
          onClick={onLogOut}
        >
          {t('Выйти')}
        </Button>
      </header>
    );
  }

  return (
    <header className={classNames(style.navbar, {}, [className])}>
      <Button
        theme={ThemeButton.CLEAR_INVERTED}
        className={style.links}
        onClick={onShowModal}
      >
        {t('Войти')}
      </Button>
      {isAuthModal && (
        <LoginModal
          isOpen={isAuthModal}
          onClose={onCloseModal}
        />
      )}
    </header>
  );
});
