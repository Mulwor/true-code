import { StateShema } from 'app/provider/StoreProvider';

export const getLoginState = (state: StateShema) => state?.loginForm;
