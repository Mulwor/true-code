import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { memo } from 'react';
import { classNames } from 'shared/libs/classNames/classNames';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'enteties/User';
import { SidebarItemType } from '../../model/types/sidebar';
import style from './SidebarItem.module.scss';

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
  const { t } = useTranslation();

  const isAuth = useSelector(getUserAuthData);

  if (item.authOnly && !isAuth) {
    return null;
  }

  return (
    <AppLink
      theme={AppLinkTheme.SECONDARY}
      to={item.path}
      className={classNames(style.item, { [style.collapsed]: collapsed })}
    >
      <item.Icon className={style.icon} />
      <span className={style.link}>{item.text}</span>
    </AppLink>
  );
});
