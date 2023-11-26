import { createSelector } from '@reduxjs/toolkit';
import { getCounter } from '../getCounter/getCounter';
import { CounterScheme } from '../../types/counterScheme';

// Утилита reselect-library, данная утилита уже настроена внутри RTK,
// он генерирует уже созданный селектор и мемоизирует его.
// Чтобы не создавать новый селект, мы можем воспользовать этим вариантом
export const getCounterValue = createSelector(
  getCounter,
  (counter: CounterScheme) => counter.value,
);
