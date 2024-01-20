import type { Meta, StoryObj } from '@storybook/react';
import AddCommentForm from './AddCommentForm';

const meta = {
  title: 'shared/AddCommentForm',
  component: AddCommentForm,
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof AddCommentForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example1: Story = {
  args: {},
};

export const Example2: Story = {
  args: {},
};
