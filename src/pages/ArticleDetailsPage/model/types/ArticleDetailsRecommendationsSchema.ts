import { EntityState } from '@reduxjs/toolkit';
import { Article } from 'enteties/Article';

export interface ArticleDetailRecommendationsShema extends EntityState<Article> {
  isLoading?: boolean;
  error?: string;
}
