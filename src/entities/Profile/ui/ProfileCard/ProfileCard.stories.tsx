import type { Meta, StoryObj } from '@storybook/react';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import avatar from 'shared/assets/tests/avatar-for-storybook.jpg';
import { ProfileCard } from './ProfileCard';

const meta = {
  title: 'entities/ProfileCard',
  component: ProfileCard,
} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    data: {
      username: 'admin',
      age: 26,
      country: Country.Ukraine,
      lastname: 'Adigezalli',
      city: 'Saint-Petersburg',
      avatar,
      first: 'Ali',
      currency: Currency.USD,
    },
  },
};

export const IsLoading: Story = {
  args: {
    isLoading: true,
  },
};

export const WithError: Story = {
  args: {
    error: 'Возникла ошибка',
  },
};
