import { EntityState } from '@reduxjs/toolkit';
import { Comment } from 'enteties/Comment';

export interface ArticleDetailCommentsShema extends EntityState<Comment> {
  isLoading?: boolean;
  error?: string;
}
