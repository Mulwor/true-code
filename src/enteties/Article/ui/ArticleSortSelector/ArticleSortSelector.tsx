import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/libs/classNames/classNames';
import { memo, useCallback, useMemo } from 'react';
import { Select, SelectOption } from 'shared/ui/Select/Select';
import { ArticleSortField } from 'enteties/Article/model/types/article';
import { SortOrder } from 'shared/types';
import style from './ArticleSortSelector.module.scss';

interface ArticleSortSelectortProps {
  className?: string;
  sort: ArticleSortField;
  order: SortOrder;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelector = memo((props: ArticleSortSelectortProps) => {
  const {
    className,
    sort,
    order,
    onChangeOrder,
    onChangeSort,
  } = props;
  const { t } = useTranslation('article');

  const orderOptions = useMemo<SelectOption[]>(() => [
    { value: 'asc', content: t('возрастанию') },
    { value: 'desc', content: t('убыванию') },
  ], [t]);

  const sortFieldOptions = useMemo<SelectOption[]>(() => [
    { value: ArticleSortField.CREATED, content: t('дате создания') },
    { value: ArticleSortField.TITLE, content: t('названию') },
    { value: ArticleSortField.VIEWS, content: t('просмотрам') },
  ], [t]);

  const changeSortHandler = useCallback((newSort: string) => {
    onChangeSort(newSort as ArticleSortField);
  }, [onChangeSort]);

  const changeOrderHandler = useCallback((newOrder: string) => {
    onChangeOrder(newOrder as SortOrder);
  }, [onChangeOrder]);

  return (
    <div className={classNames(style.ArticleSortSelector, {}, [className])}>
      <Select
        options={sortFieldOptions}
        label={t('Cортировать по:')}
        value={sort}
        onChange={changeSortHandler}
      />
      <Select
        options={orderOptions}
        label={t('по')}
        value={order}
        onChange={changeOrderHandler}
        className={style.order}
      />
    </div>
  );
});
