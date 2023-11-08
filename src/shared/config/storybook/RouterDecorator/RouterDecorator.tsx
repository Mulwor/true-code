import { StoryFn } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

// Роль данного декаротора подключения роутеров
export const RouterDecorator = (story: () => StoryFn) => (
  <BrowserRouter>{story()}</BrowserRouter>
);
