import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/provider/StoreProvider';
import { ArticleSortField } from 'enteties/Article';
import { SortOrder } from 'shared/types';
import { articlesPageActions } from '../../slices/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { getArticlesPageInited } from '../../selectors/articlePageSelectors';

export const initArticlesPage = createAsyncThunk<
    void,
    URLSearchParams,
    ThunkConfig<string>
    >(
      'articlesPage/initArticlesPage',
      async (searchParams, thunkApi) => {
        const { getState, dispatch } = thunkApi;
        const inited = getArticlesPageInited(getState());

        if (!inited) {
          const orderFromUrl = searchParams.get('order') as SortOrder;
          const sortFromUrl = searchParams.get('sort') as ArticleSortField;
          const setFromUrl = searchParams.get('search');

          if (orderFromUrl) {
            dispatch(articlesPageActions.setOrder(orderFromUrl));
          }

          if (sortFromUrl) {
            dispatch(articlesPageActions.setSort(sortFromUrl));
          }

          if (setFromUrl) {
            dispatch(articlesPageActions.setSearch(setFromUrl));
          }

          dispatch(articlesPageActions.initState());
          dispatch(fetchArticlesList({}));
        }
      },
    );
