import { StoreProvider } from './ui/StoreProvider';
import { createReduxStore, AppDispatch } from './config/store';

import type {
  StateShema,
  ThunkConfig,
} from './config/StateSchema';

export {
  StoreProvider,
  createReduxStore,
  StateShema,
  AppDispatch,
  ThunkConfig,
};
