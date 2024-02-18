import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleView } from 'enteties/Article';

export interface ArticlesPageSchema extends EntityState<Article>{
  isLoading?: boolean;
  error?: string;

  view: ArticleView;

  // Для будущей пагинации
  page: number; // номер страницы
  limit?: number; // сколько статьей будет отображаться
  hasMore: boolean; // Загрузили мы все статьи или есть еще какие-то статьи, которые должны подгрузить

  _inited: boolean
}
