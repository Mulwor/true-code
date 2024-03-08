import { StateShema } from 'app/provider/StoreProvider';

export const getProfileError = (state: StateShema) => state.profile?.error;
