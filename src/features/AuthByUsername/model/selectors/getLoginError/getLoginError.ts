import { StateShema } from 'app/provider/StoreProvider';

export const getLoginError = (state: StateShema) => state?.loginForm?.error;
