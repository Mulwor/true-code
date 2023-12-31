import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Text } from 'shared/ui/Text/Text';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { classNames } from 'shared/libs/classNames/classNames';
import { getProfileData } from 'enteties/Profile/model/selectors/getProfileData/getProfileData';
import { getProfileIsLoading } from 'enteties/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileError } from 'enteties/Profile/model/selectors/getProfileError/getProfileError';
import style from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
  const { t } = useTranslation('profile');
  const data = useSelector(getProfileData);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);

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
