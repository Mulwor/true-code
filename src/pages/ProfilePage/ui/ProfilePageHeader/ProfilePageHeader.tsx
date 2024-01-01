import React from 'react';
import { classNames } from 'shared/libs/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import style from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
  const {
    className,
  } = props;

  const { t } = useTranslation('profile');

  return (
    <div className={classNames(style.ProfilePageHeader, {}, [className])}>
      <Text title={t('profile')} />
      <Button
        className={style.editProfile}
        theme={ThemeButton.OUTLINE}
      >
        {t('edit')}
      </Button>
    </div>
  );
};
