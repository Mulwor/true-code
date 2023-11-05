import { screen } from '@testing-library/react';
import { renderWithTranslation } from 'shared/libs/tests/renderWithTranslation/renderWithTranslation';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
  test('Test render and work with i18n', () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });
});
