import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/libs/classNames/classNames';

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames('', {}, [className])}>
      {t('Profile page')}
    </div>
  );
};

export default ProfilePage;
