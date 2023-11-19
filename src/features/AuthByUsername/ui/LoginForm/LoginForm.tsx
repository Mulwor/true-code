import { classNames } from 'shared/libs/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import style from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string
}

export const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(style.LoginForm, {}, [className])}>
      <Input type="text" className={style.input} placeholder={t('Логин')} />
      <Input type="text" className={style.input} placeholder={t('Пароль')} />
      <Button className={style.loginBtn}>
        {t('Войти')}
      </Button>
    </div>
  );
};
