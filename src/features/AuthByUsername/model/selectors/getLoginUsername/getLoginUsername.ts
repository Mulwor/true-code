import { StateShema } from 'app/provider/StoreProvider';

export const getLoginUsername = (state: StateShema) => state?.loginForm?.username || '';
