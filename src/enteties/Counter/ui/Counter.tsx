import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/ui/Button/Button';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selector/getCounterValue/getCounterValue';

export const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(getCounterValue);

  const increment = () => {
    dispatch(counterActions.increment());
  };

  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <h1 data-testid="value-title">{counter}</h1>
      <Button onClick={increment} data-testid="plus">+</Button>
      <Button onClick={decrement} data-testid="minus">-</Button>
    </div>
  );
};
