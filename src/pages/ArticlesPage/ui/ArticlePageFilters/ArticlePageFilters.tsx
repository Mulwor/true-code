import { getArticlesPageView } from 'pages/ArticlesPage/model/selectors/articlePageSelectors';
import { articlesPageActions } from 'pages/ArticlesPage/model/slices/articlesPageSlice';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/libs/classNames/classNames';
import { useAppDispatch } from 'shared/libs/hooks/useAppDispatch/useAppDispatch';
import { ArticleView, ArticleViewSelector } from 'enteties/Article';
import { useTranslation } from 'react-i18next';
import { Card } from 'shared/ui/Card/Card';
import { Input } from 'shared/ui/Input/Input';
import { ArticleSortSelector } from 'enteties/Article/ui/ArticleSortSelector/ArticleSortSelector';
import style from './ArticlePageFilters.module.scss';

interface ArticlePageProps {
  className?: string;
}

export const ArticlesPageFilters = memo((props: ArticlePageProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const view = useSelector(getArticlesPageView);

  const onChangeView = useCallback((view: ArticleView) => {
    dispatch(articlesPageActions.setView(view));
  }, [dispatch]);

  return (
    <div className={classNames(style.ArticlePageFilters, {}, [className])}>
      <div className={style.sortWrapper}>
        <ArticleSortSelector />
        <ArticleViewSelector view={view} onViewClick={onChangeView} />
      </div>
      <Card className={style.search}>
        <Input placeholder={t('Поиск')} />
      </Card>
    </div>
  );
});
