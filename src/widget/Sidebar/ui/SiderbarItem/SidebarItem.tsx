import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
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
export const SidebarItem = ({ item, collapsed }: SidebarItemProps) => {
  const { t } = useTranslation();

  return (
    <AppLink
      theme={AppLinkTheme.SECONDARY}
      to={item.path}
      className={style.item}
    >
      <item.Icon className={style.icon} />
      <span className={style.link}>{item.text}</span>
    </AppLink>
  );
};
