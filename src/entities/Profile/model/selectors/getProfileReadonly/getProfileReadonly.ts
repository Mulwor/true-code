import { StateShema } from 'app/provider/StoreProvider';

export const getProfileReadonly = (state: StateShema) => state.profile?.readonly;
