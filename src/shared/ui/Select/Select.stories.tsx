import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';
import AvatarIMG from './storybook.jpg';

const meta = {
  title: 'shared/Select',
  component: Select,
  tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Укажите значение',
    options: [
      { value: '123', content: 'Первый пункт' },
      { value: '456', content: 'Второй пункт' },
      { value: '789', content: 'Третий пункт' },
      { value: '012', content: 'Четвертый пункт' },
    ],
  },
};
