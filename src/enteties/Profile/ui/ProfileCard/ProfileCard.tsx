import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { classNames } from 'shared/libs/classNames/classNames';
import { Loader } from 'shared/ui/Loader/Loader';
import { Profile } from '../../model/types/profile';
import style from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
  // 3.
  data?: Profile;
  isLoading?: boolean;
  error?: string;
}

export const ProfileCard = (props: ProfileCardProps) => {
  const {
    className,
    data,
    isLoading,
    error,
  } = props;

  const { t } = useTranslation('profile');
  // 0. Вынесли селектора на уровень выше в ПрофильПейдж, чтобы
  // в дальнейшем было проще создавать карточки профиля, а так они
  // были захардкожены здесь.

  // 4. Cнизу написали логику, что должен показывать при определенном пропсе
  if (isLoading) {
    return (
      <div
        className={classNames(
          style.ProfileCard,
          { [style.loading]: true },
          [className],
        )}
      >
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div
        className={classNames(
          style.ProfileCard,
          {},
          [className, style.error],
        )}
      >
        <Text
          theme={TextTheme.ERROR}
          title={t('Произошла ошибка при загрузке профиля')}
          text={t('Попробуйте обновить страницу')}
          align={TextAlign.LEFT}
        />
      </div>
    );
  }

  return (
    <div className={classNames(style.ProfileCard, {}, [className])}>
      <div className={style.header}>
        <Text title={t('Профиль')} />
        <Button
          className={style.editProfile}
          theme={ThemeButton.OUTLINE}
        >
          {t('Редактировать')}
        </Button>
      </div>

      <div className={style.data}>
        <Input
          value={data?.first}
          placeholder={t('Ваше имя')}
          className={style.input}
        />
        <Input
          value={data?.lastname}
          placeholder={t('Ваша фамилия')}
          className={style.input}
        />
      </div>
    </div>
  );
};
