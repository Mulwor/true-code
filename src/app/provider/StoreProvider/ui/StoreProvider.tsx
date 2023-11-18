import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from '../config/store';
import { StateShema } from '../config/StateSchema';

interface StoreProviderProps {
  children?: ReactNode;
  initialState?: StateShema;
}

// Провайдер, который обычно лежит в корневом элементе App, он необходим
// для работоспособности redux
export const StoreProvider = (props: StoreProviderProps) => {
  const { children, initialState } = props;

  // Внутри стора находится функция, которая создает редюсеры с начальным значением
  const store = createReduxStore(initialState);

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
