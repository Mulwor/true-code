import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { memo } from 'react';
import { classNames } from 'shared/libs/classNames/classNames';
import style from './SidebarItem.module.scss';
import { SidebarItemType } from '../../model/items';

/*
export interface SidebarItemType {
  path: string;
  text: string;
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
}
*/

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
}

// 3.
// Пока не кликнем на сайдбар он не будет перерисовывать, так как пропсы у него еще не поменялись
export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
  const { t } = useTranslation();

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
