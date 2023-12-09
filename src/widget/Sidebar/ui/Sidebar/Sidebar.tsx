import { classNames } from 'shared/libs/classNames/classNames';
import { memo, useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { Button, ButtonSize, ThemeButton } from 'shared/ui/Button/Button';
import { SidebarItemList } from '../../model/items';
import style from './Sidebar.module.scss';
import { SidebarItem } from '../SiderbarItem/SidebarItem';

interface SidebarProps {
  className?: string
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(style.Sidebar, { [style.collapsed]: collapsed }, [className])}
    >
      <Button
        data-testid="sidebar-toggle"
        onClick={onToggle}
        className={style.collapseBtn}
        theme={ThemeButton.BACKGROUND_INVERTED}
        size={ButtonSize.L}
        square
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={style.items}>
        <div>
          {SidebarItemList.map((item) => (
            <SidebarItem
              item={item}
              collapsed={collapsed}
              key={item.path}
            />
          ))}
        </div>
      </div>
      <div className={style.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} className={style.lang} />
      </div>
    </div>
  );
});
