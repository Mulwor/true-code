import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/libs/classNames/classNames';
import { memo, useCallback, useMemo } from 'react';
import { TabItem, Tabs } from 'shared/ui/Tabs/Tabs';
import { ArticleType } from '../../model/types/article';

interface ArticleTypeTabsProps {
  className?: string;
  value: ArticleType;
  onChangeType: (type: ArticleType) => void;
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
  const { className, value, onChangeType } = props;
  const { t } = useTranslation('article');

  const typeTabs = useMemo<TabItem[]>(() => [
    { value: ArticleType.ALL, content: t('Все статьи') },
    { value: ArticleType.IT, content: t('IT') },
    { value: ArticleType.ECONOMICS, content: t('ECONOMICS') },
    { value: ArticleType.SCIENCE, content: t('SCIENCE') },
  ], [t]);

  const onTabClick = useCallback((tab: TabItem) => {
    onChangeType(tab.value as ArticleType);
  }, [onChangeType]);

  return (
    <Tabs
      className={classNames('', {}, [className])}
      value={value}
      tabs={typeTabs}
      onTabClick={onTabClick}
    />
  );
});
