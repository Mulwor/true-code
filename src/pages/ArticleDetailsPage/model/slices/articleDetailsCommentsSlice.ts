import {
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import { StateShema } from 'app/provider/StoreProvider';

import { Comment } from 'enteties/Comment';
import { ArticleDetailCommentsShema } from '../types/ArticleDetailCommentsSchema';

const commentsAdapter = createEntityAdapter<Comment>({
  // Фукция, которая принимает один аргумент и возвращает уникальный id этого
  // объекта. Он используется для эффективного управления коллекцией объектов.
  selectId: (comment) => comment.id,
});

// Селектор с помощью которого получаем комментарии
export const getArticleComments = commentsAdapter.getSelectors<StateShema>(
  (state) => state.articleDetailsComment || commentsAdapter.getInitialState(),
);

const articleDetailsCommentsSlice = createSlice({
  name: 'articleDetailsCommentSlice',
  // <ArticleDetailCommentsShema> - необходим для того, чтобы добавить поля загрузки и ошибки
  initialState: commentsAdapter.getInitialState<ArticleDetailCommentsShema>({
    isLoading: false,
    error: undefined,
    ids: ['1', '2'],
    entities: {
      1: {
        id: '1',
        text: 'comment 1',
        user: {
          id: '1',
          username: '1',
        },
      },
      2: {
        id: '2',
        text: 'comment 2',
        user: {
          id: '2',
          username: '2',
        },
      },
    },
  }),
  reducers: {},
});

export const { reducer: articleDetailsCommentsReducer } = articleDetailsCommentsSlice;
