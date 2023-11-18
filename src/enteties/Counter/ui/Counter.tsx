import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/ui/Button/Button';
import { StateShema } from 'app/provider/StoreProvider/config/StateSchema';
import { CounterActions } from '../model/slice/counterSlice';

export const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state: StateShema) => state.counter.value);

  const increment = () => {
    dispatch(CounterActions.decrement());
  };
  const decrement = () => {
    dispatch(CounterActions.increment());
  };

  return (
    <div>
      <h1>{counter}</h1>
      <Button onClick={increment}>+</Button>
      <Button onClick={decrement}>-</Button>
    </div>
  );
};
