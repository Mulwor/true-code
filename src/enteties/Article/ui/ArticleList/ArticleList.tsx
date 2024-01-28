import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/libs/classNames/classNames';
import { memo } from 'react';
import style from './ArticleList.module.scss';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  // Отображение в виде списка либо в виде плитки
  view?: ArticleView
}

export const ArticleList = memo((props: ArticleListProps) => {
  const {
    className,
    articles,
    isLoading,
    view = ArticleView.SMALL,
  } = props;
  const { t } = useTranslation('article');

  const renderArticle = (article: Article) => (
    <ArticleListItem
      article={article}
      view={view}
      className={style.card}
      key={article.id}
    />
  );

  return (
    <div className={classNames(style.ArticleList, {}, [className, style[view]])}>
      { articles.length > 0
        ? articles.map(renderArticle)
        : null}
    </div>
  );
});
