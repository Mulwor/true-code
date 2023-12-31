import { StateShema } from 'app/provider/StoreProvider';

export const getProfileIsLoading = (state: StateShema) => state.profile?.isLoading;
