import type { Meta, StoryObj } from '@storybook/react';
import { TransactionCardValues } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Cards/TransactionCardValues',
  component: TransactionCardValues,
} satisfies Meta<typeof TransactionCardValues>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    title: 'Entrada',
    value: 1000.00,
    type: 'deposit',
  }
};

export const Secondary: Story = {
  args: {
    title: 'Saída',
    value: 500.00,
    type: 'withdraw',
  }
};
