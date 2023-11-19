import { classNames } from 'shared/libs/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import style from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string
}

export const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(style.LoginForm, {}, [className])}>
      <input type="text" />
      <input type="text" />
      <Button>
        {t('Войти')}
      </Button>
    </div>
  );
};
