import { classNames } from 'shared/libs/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { Button, ButtonSize, ThemeButton } from 'shared/ui/Button/Button';
import style from './Sidebar.module.scss';

interface SidebarProps {
  className?: string
}

export function Sidebar({ className }: SidebarProps) {
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
      <div className={style.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={style.lang} />
      </div>
    </div>
  );
}
