import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/provider/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from 'enteties/Country';
import { Currency } from 'enteties/Currency';
import avatar from 'shared/assets/tests/avatar-for-storybook.jpg';
import ProfilePage from './ProfilePage';

const meta = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {},
};
Normal.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({
  profile: {
    form: {
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
})];

export const Dark: Story = {
  args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  profile: {
    form: {
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
})];
