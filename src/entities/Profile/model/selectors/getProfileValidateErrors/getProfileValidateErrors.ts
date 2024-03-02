import { StateShema } from 'app/provider/StoreProvider';

export const getProfileValidateErrors = (state: StateShema) => state.profile?.validateErrors;
