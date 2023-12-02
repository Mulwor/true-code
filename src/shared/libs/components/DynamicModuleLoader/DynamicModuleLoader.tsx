import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManager, StateSchemaKey } from 'app/provider/StoreProvider/config/StateSchema';
import { FC, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';

interface DynamicModuleLoaderProps {
  name: StateSchemaKey;
  reducer: Reducer;
  removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
  const {
    children,
    name,
    reducer,
    removeAfterUnmount,
  } = props;
  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useDispatch();

  useEffect(() => {
    // В момент монтирование компонента, мы добавляем редюсер
    store.reducerManager.add(name, reducer);

    dispatch({ type: `@INIT ${name} reducer` });

    return () => {
      if (removeAfterUnmount) {
        // Когда компонент нам не нужен (демонтируется) мы этот редюсер
        // снова удаляем
        store.reducerManager.remove(name);
        dispatch({ type: `@DESTROY ${name} reducer` });
      }
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {children}
    </div>
  );
};
