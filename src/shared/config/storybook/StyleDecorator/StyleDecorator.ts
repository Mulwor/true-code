import { StoryFn } from '@storybook/react';
import 'app/styles/index.scss';

// Роль данного декаротора подключения глобальных стилей в сторибук
export const StyleDecorator = (story: () => StoryFn) => story();
