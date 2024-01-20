import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/provider/StoreProvider';
import { Comment } from 'enteties/Comment';
import { getUserAuthData } from 'enteties/User';
import { getArticleDetailsData } from 'enteties/Article/model/selectors/articleDetails';
import { fetchCommentsByArticleId } from '../../services/fetchCommentsByArticleId/fetchCommentsByArticleId';

export const addCommentForArticle = createAsyncThunk<
    Comment,
    string,
    ThunkConfig<string>
    >(
      'articleDetails/addCommentForArticle',
      async (text, thunkApi) => {
        const {
          extra, rejectWithValue, getState, dispatch,
        } = thunkApi;

        const userData = getUserAuthData(getState());
        const article = getArticleDetailsData(getState());

        if (!userData || !text || !article) {
          return rejectWithValue('no data');
        }

        try {
          const response = await extra.api.post<Comment>('/comments', {
            article: article.id,
            userId: userData.id,
            text,
          });

          if (!response.data) {
            throw new Error();
          }

          // После того как нажали на enter, комментарий удаляется
          dispatch(fetchCommentsByArticleId(article.id));

          return response.data;
        } catch (e) {
          return rejectWithValue('error');
        }
      },
    );
