import { StateShema } from 'app/provider/StoreProvider';
import { ArticleView } from 'enteties/Article';

export const getArticlesPageIsLoading = (state: StateShema) => state.articlesPage?.isLoading || false;
export const getArticlesPageError = (state: StateShema) => state.articlesPage?.error;
export const getArticlesPageView = (state: StateShema) => state.articlesPage?.view || ArticleView.SMALL;
export const getArticlesPageNumber = (state: StateShema) => state.articlesPage?.page || 1;
export const getArticlesPageLimit = (state: StateShema) => state.articlesPage?.limit || 9;
export const getArticlesPageHasMore = (state: StateShema) => state.articlesPage?.hasMore;
