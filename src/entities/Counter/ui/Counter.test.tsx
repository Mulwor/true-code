import { componentRender } from 'shared/libs/tests/componentRender/componentRender';
import { screen } from '@testing-library/react';
import { userEvent } from '@storybook/testing-library';
import { Counter } from './Counter';

describe('Counter', () => {
  test('Проверка, что берется значения из стейта', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    expect(screen.getByTestId('value-title')).toHaveTextContent('10');
  });

  test.skip('Проверка по нажатию на инкримент кнопку', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    userEvent.click(screen.getByTestId('plus'));
    expect(screen.getByTestId('value-title')).toHaveTextContent('11');
  });

  test.skip('Проверка по нажатию на декремент кнопку', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    userEvent.click(screen.getByTestId('minus'));
    expect(screen.getByTestId('value-title')).toHaveTextContent('9');
  });
});
