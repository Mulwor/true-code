import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/ui/Button/Button';
import { CounterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selector/getCounterValue/getCounterValue';

export const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(getCounterValue);

  const increment = () => {
    dispatch(CounterActions.increment());
  };
  const decrement = () => {
    dispatch(CounterActions.decrement());
  };

  return (
    <div>
      <h1>{counter}</h1>
      <Button onClick={increment}>+</Button>
      <Button onClick={decrement}>-</Button>
    </div>
  );
};
