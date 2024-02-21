import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/libs/classNames/classNames';
import { useAppDispatch } from 'shared/libs/hooks/useAppDispatch/useAppDispatch';
import {
  ArticleSortField, ArticleSortSelector, ArticleView, ArticleViewSelector,
} from 'enteties/Article';
import { useTranslation } from 'react-i18next';
import { Card } from 'shared/ui/Card/Card';
import { Input } from 'shared/ui/Input/Input';
import { SortOrder } from 'shared/types';
import { useDebounce } from 'shared/libs/hooks/useDebounce/useDebounce';
import { articlesPageActions } from '../../model/slices/articlesPageSlice';
import {
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageView,
} from '../../model/selectors/articlePageSelectors';
import style from './ArticlePageFilters.module.scss';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';

interface ArticlePageProps {
  className?: string;
}

export const ArticlesPageFilters = memo((props: ArticlePageProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const view = useSelector(getArticlesPageView);
  const sort = useSelector(getArticlesPageSort);
  const order = useSelector(getArticlesPageOrder);
  const search = useSelector(getArticlesPageSearch);

  // Место от куда будем данные подгружать
  const fetchData = useCallback(() => {
    dispatch(fetchArticlesList({
      replace: true,
    }));
  }, [dispatch]);

  const debouncedFetchData = useDebounce(fetchData, 500);

  const onChangeView = useCallback((view: ArticleView) => {
    dispatch(articlesPageActions.setView(view));
  }, [dispatch]);

  const onChangeOrder = useCallback((newSort: SortOrder) => {
    dispatch(articlesPageActions.setOrder(newSort));
    dispatch(articlesPageActions.setPage(1));
    fetchData();
  }, [dispatch, fetchData]);

  const onChangeSort = useCallback((newOrder: ArticleSortField) => {
    dispatch(articlesPageActions.setSort(newOrder));
    dispatch(articlesPageActions.setPage(1));
    fetchData();
  }, [dispatch, fetchData]);

  const onChangeSearch = useCallback((search: string) => {
    dispatch(articlesPageActions.setSearch(search));
    dispatch(articlesPageActions.setPage(1));
    debouncedFetchData();
  }, [dispatch, debouncedFetchData]);

  return (
    <div className={classNames(style.ArticlePageFilters, {}, [className])}>
      <div className={style.sortWrapper}>
        <ArticleSortSelector
          sort={sort}
          order={order}
          onChangeOrder={onChangeOrder}
          onChangeSort={onChangeSort}
        />
        <ArticleViewSelector view={view} onViewClick={onChangeView} />
      </div>
      <Card className={style.search}>
        <Input
          onChange={onChangeSearch}
          value={search}
          placeholder={t('Поиск')}
        />
      </Card>
    </div>
  );
});
