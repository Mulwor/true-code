import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/provider/StoreProvider';
import { Comment } from 'enteties/Comment';
import { getUserAuthData } from 'enteties/User';
import { getArticleDetailsData } from 'enteties/Article/model/selectors/articleDetails';
import { getAddCommentFormText } from '../../selectors/addCommentFormSelectors';

export const sendComment = createAsyncThunk<
    Comment,
    void,
    ThunkConfig<string>
    >(
      'addCommentForm/sendComment',
      async (authData, thunkApi) => {
        const {
          extra, rejectWithValue, getState,
        } = thunkApi;

        const userData = getUserAuthData(getState());
        // Нужен для того, чтобы достать текст - содержимое инпута
        const text = getAddCommentFormText(getState());
        // Нужен для получения статьи
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

          return response.data;
        } catch (e) {
          return rejectWithValue('error');
        }
      },
    );
