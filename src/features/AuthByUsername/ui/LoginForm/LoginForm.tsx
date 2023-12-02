import { classNames } from 'shared/libs/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { memo, useCallback, useEffect } from 'react';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import i18n from 'shared/config/i18n/i18n';
import { ReduxStoreWithManager } from 'app/provider/StoreProvider/config/StateSchema';
import { DynamicModuleLoader } from 'shared/libs/components/DynamicModuleLoader/DynamicModuleLoader';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import style from './LoginForm.module.scss';

export interface LoginFormProps {
  className?: string
}

const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();

  // RTK
  const dispatch = useDispatch();
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const error = useSelector(getLoginError);
  const isLoading = useSelector(getLoginIsLoading);

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, username, password]);

  return (
    // eslint-disable-next-line i18next/no-literal-string
    <DynamicModuleLoader removeAfterUnmount name="loginForm" reducer={loginReducer}>
      <div className={classNames(style.LoginForm, {}, [className])}>
        <Text title={t('Форма авторизации')} />
        {error && <Text text={i18n.t('Вы ввели неверный логин или пароль')} theme={TextTheme.ERROR} />}
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
        <Button
          className={style.loginBtn}
          theme={ThemeButton.OUTLINE}
          onClick={onLoginClick}
          disabled={isLoading}
        >
          {t('Войти')}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
});

export default LoginForm;
