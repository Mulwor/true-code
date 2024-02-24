import React, { useCallback } from 'react';
import { classNames } from 'shared/libs/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
  getProfileData, getProfileReadonly, profileActions, updateProfileData,
} from 'enteties/Profile';
import { useAppDispatch } from 'shared/libs/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from 'enteties/User';
import style from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
  const {
    className,
  } = props;

  const { t } = useTranslation('profile');
  const dispatch = useAppDispatch();

  const authData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData);
  const canEdit = authData?.id === profileData?.id;

  const readonly = useSelector(getProfileReadonly);

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <div className={classNames(style.ProfilePageHeader, {}, [className])}>
      <Text title={t('profile')} />
      {canEdit && (
        <div className={style.btnsWrapper}>
          {readonly
            ? (
              <Button
                className={style.editProfile}
                theme={ThemeButton.OUTLINE}
                onClick={onEdit}
              >
                {t('edit')}
              </Button>
            )
            : (
              <>
                <Button
                  className={style.editProfile}
                  theme={ThemeButton.OUTLINE_RED}
                  onClick={onCancelEdit}
                >
                  {t('cancel')}
                </Button>
                <Button
                  className={style.saveProfile}
                  theme={ThemeButton.OUTLINE}
                  onClick={onSave}
                >
                  {t('save')}
                </Button>
              </>
            ) }
        </div>
      )}
    </div>
  );
};
