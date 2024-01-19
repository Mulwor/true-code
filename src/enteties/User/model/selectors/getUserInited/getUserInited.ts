import { StateShema } from 'app/provider/StoreProvider';

export const getUserInited = (state: StateShema) => state.user._inited;
