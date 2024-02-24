import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleView } from 'enteties/Article';
import { ArticleSortField } from 'enteties/Article/model/types/article';
import { SortOrder } from 'shared/types';

export interface ArticlesPageSchema extends EntityState<Article>{
  isLoading?: boolean;
  error?: string;

  view: ArticleView;

  // Для будущей пагинации
  page: number; // номер страницы
  limit: number; // сколько статьей будет отображаться
  hasMore: boolean; // Загрузили мы все статьи или есть еще какие-то статьи, которые должны подгрузить

  // Для фильтрации
  order: SortOrder; // 'asc' | 'desc';
  sort: ArticleSortField;
  search: string; // поисковая строка в которой мы будем искать статьи

  _inited: boolean
}
