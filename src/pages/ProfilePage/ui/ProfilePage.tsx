import { profileReducer } from 'enteties/Profile';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/libs/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/libs/components/DynamicModuleLoader/DynamicModuleLoader';

const reducers: ReducersList = {
  profile: profileReducer,
};

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  const { t } = useTranslation();

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames('', {}, [className])}>
        {t('Profile page')}
      </div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
