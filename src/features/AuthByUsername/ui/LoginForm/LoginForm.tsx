import { classNames } from 'shared/libs/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { getLoginState } from 'features/AuthByUsername/model/selectors/getLoginState/getLoginState';
import { loginActions } from '../../model/slice/loginSlice';
import style from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { username, password } = useSelector(getLoginState);

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  return (
    <div className={classNames(style.LoginForm, {}, [className])}>
      <Input
        type="text"
        className={style.input}
        placeholder={t('Логин')}
        onChange={onChangeUsername}
        value={username}
      />
      <Input
        type="text"
        className={style.input}
        placeholder={t('Пароль')}
        onChange={onChangePassword}
        value={password}
      />
      <Button className={style.loginBtn} theme={ThemeButton.OUTLINE}>
        {t('Войти')}
      </Button>
    </div>
  );
});
