import { StateShema } from 'app/provider/StoreProvider';

export const getProfileForm = (state: StateShema) => state.profile?.form;
