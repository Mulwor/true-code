import { TestAsyncThunk } from 'shared/libs/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchNextArticlesPage } from './fetchNextArticlesPage';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

jest.mock('../fetchArticlesList/fetchArticlesList');

describe('Тесты для компонента fetchNextArticlesPage', () => {
  test('Тест на проверку изменения страницы и вызова запроса', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: true,
      },
    });

    await thunk.callThunk();

    // Проверим, что диспатч вызвался у нас 4 раза
    expect(thunk.dispatch).toBeCalledTimes(4);
    // Проверям, что фетчартикллист была вызвана с нужным нам аргументом
    expect(fetchArticlesList).toHaveBeenCalledWith({ page: 3 });
  });

  test('Вызвалась ошибка и новая порция данных у нас не подгрузилось', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: false,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(fetchArticlesList).not.toHaveBeenCalled();
  });
});
