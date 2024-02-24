import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/provider/StoreProvider';
import { Article } from 'enteties/Article';
import { addQueryParams } from 'shared/libs/url/addQueryParams/addQueryParams';
import {
  getArticlesPageLimit, getArticlesPageNumber, getArticlesPageOrder, getArticlesPageSearch, getArticlesPageSort,
} from '../../selectors/articlePageSelectors';

interface fetchArticlesListProps {
  replace?: boolean
}

export const fetchArticlesList = createAsyncThunk<
  Article[],
  fetchArticlesListProps,
  ThunkConfig<string>
>(
  'articlesPage/fetchArticlesList',
  async (props, thunkApi) => {
    const { extra, rejectWithValue, getState } = thunkApi;

    const limit = getArticlesPageLimit(getState());
    const page = getArticlesPageNumber(getState());
    const sort = getArticlesPageSort(getState());
    const order = getArticlesPageOrder(getState());
    const search = getArticlesPageSearch(getState());

    try {
      addQueryParams({
        sort,
        order,
        search,
      });
      const response = await extra.api.get<Article[]>('/articles', {
        params: {
          _expand: 'user',
          _limit: limit,
          _page: page,
          _sort: sort,
          _order: order,
          q: search,
        },
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
