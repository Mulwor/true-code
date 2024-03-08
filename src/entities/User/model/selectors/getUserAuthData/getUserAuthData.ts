import { StateShema } from 'app/provider/StoreProvider';

export const getUserAuthData = (state: StateShema) => state.user.authData;
