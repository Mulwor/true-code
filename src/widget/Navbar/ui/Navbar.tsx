import { classNames } from 'shared/libs/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useCallback, useState } from 'react';
import style from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}

export function Navbar({ className }: NavbarProps) {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);

  return (
    <div className={classNames(style.navbar, {}, [className])}>
      <Button theme={ThemeButton.CLEAR_INVERTED} className={style.links} onClick={onToggleModal}>
        {t('Войти')}
      </Button>
      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        {t('Войти')}
      </Modal>
    </div>
  );
}
