import { memo, ReactNode, useCallback } from 'react';
import { Card, CardTheme } from 'shared/ui/Card/Card';
import { classNames } from 'shared/libs/classNames/classNames';
import cls from './Tabs.module.scss';

export interface TabItem {
  value: string;

  // То что будет помещаться внутри табов
  content: ReactNode;
}

interface TabsProps {
  className?: string;
  tabs: TabItem[];

  // Выбранное значение
  value: string;

  // Позволяет табы переключать
  onTabClick: (tab: TabItem) => void;
}

export const Tabs = memo((props: TabsProps) => {
  const {
    className,
    tabs,
    value,
    onTabClick,
  } = props;

  // Обрабатывает нажатие
  const clickHandle = useCallback((tab: TabItem) => () => {
    onTabClick(tab);
  }, [onTabClick]);

  return (
    <div className={classNames(cls.Tabs, {}, [className])}>
      {tabs.map((tab) => (
        <Card
          theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINED}
          className={cls.tab}
          key={tab.value}
          onClick={clickHandle(tab)}
        >
          {tab.content}
        </Card>
      ))}
    </div>
  );
});
