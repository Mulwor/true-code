import { StateShema } from 'app/provider/StoreProvider';

export const getLoginPassword = (state: StateShema) => state?.loginForm?.password || '';
