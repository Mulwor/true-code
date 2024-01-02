import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { classNames } from 'shared/libs/classNames/classNames';
import { Loader } from 'shared/ui/Loader/Loader';
import { Profile } from '../../model/types/profile';
import style from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  isLoading?: boolean;
  error?: string;
  readonly?: boolean;
  onChangeFirstname: (value?: string) => void;
  onChangeSecondname: (value?: string) => void;
  onChangeAge: (value?: string) => void;
  onChangeCity: (value?: string) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
  const {
    className,
    data,
    isLoading,
    error,
    readonly,
    onChangeFirstname,
    onChangeSecondname,
    onChangeAge,
    onChangeCity,
  } = props;

  const { t } = useTranslation('profile');

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
          title={t('error-profile')}
          text={t('refresh-page')}
          align={TextAlign.CENTER}
        />
      </div>
    );
  }

  return (
    <div className={classNames(style.ProfileCard, {}, [className])}>
      <div className={style.data}>
        <Input
          value={data?.first}
          placeholder={t('name')}
          className={style.input}
          onChange={onChangeFirstname}
          readonly={readonly}
        />
        <Input
          value={data?.lastname}
          placeholder={t('surname')}
          className={style.input}
          onChange={onChangeSecondname}
          readonly={readonly}
        />
        <Input
          value={data?.age}
          placeholder={t('age')}
          className={style.input}
          onChange={onChangeAge}
          readonly={readonly}
        />
        <Input
          value={data?.city}
          placeholder={t('city')}
          className={style.input}
          onChange={onChangeCity}
          readonly={readonly}
        />
      </div>
    </div>
  );
};
