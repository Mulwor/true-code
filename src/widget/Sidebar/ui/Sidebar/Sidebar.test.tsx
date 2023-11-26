import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/libs/tests/componentRender/componentRender';
import { Sidebar } from './Sidebar';

describe.skip('Sidebar', () => {
  test('Test render and work with i18n', () => {
    componentRender(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('Открытие и закрытие сайтбара', () => {
    componentRender(<Sidebar />);
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    // Запускает события
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
