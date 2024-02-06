import type { Meta, StoryObj } from '@storybook/react';

import { NewTransactionButton } from './index';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Buttons/NewTransactionButton',
  component: NewTransactionButton,
} satisfies Meta<typeof NewTransactionButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {};

