import { StateShema } from 'app/provider/StoreProvider';

export const getArticleCommentsIsLoading = (state: StateShema) => state.articleDetailsComments?.isLoading;
export const getArticleCommentsError = (state: StateShema) => state.articleDetailsComments?.error;
