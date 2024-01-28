import { StateShema } from 'app/provider/StoreProvider';
import { ArticleView } from 'enteties/Article';

export const getArticlesPageIsLoading = (state: StateShema) => state.articlesPage?.isLoading || false;
export const getArticlesPageError = (state: StateShema) => state.articlesPage?.error;
export const getArticlesPageView = (state: StateShema) => state.articlesPage?.view || ArticleView.SMALL;
