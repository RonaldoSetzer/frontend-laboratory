import type { Meta, StoryObj } from '@storybook/react';
import Navigation from './basic-hamburger-menu';

const meta = {
  title: 'Menu/ Beginner/ Basic Hamburger Menu',
  component: Navigation,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Navigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = { };

