import { StateShema } from 'app/provider/StoreProvider';

export const getProfileData = (state: StateShema) => state.profile?.data;
