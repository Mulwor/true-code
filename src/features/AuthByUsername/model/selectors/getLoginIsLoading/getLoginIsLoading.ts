import { StateShema } from 'app/provider/StoreProvider';

export const getLoginIsLoading = (state: StateShema) => state?.loginForm?.isLoading || false;
