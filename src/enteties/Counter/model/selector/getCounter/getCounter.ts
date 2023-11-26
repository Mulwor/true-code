import { StateShema } from 'app/provider/StoreProvider';

export const getCounter = (state: StateShema) => state.counter;
