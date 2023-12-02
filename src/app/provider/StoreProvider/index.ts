import { StoreProvider } from './ui/StoreProvider';
import { createReduxStore } from './config/store';

import type {
  StateShema,
  ReduxStoreWithManager,
} from './config/StateSchema';

export {
  StoreProvider,
  createReduxStore,
  StateShema,
};
