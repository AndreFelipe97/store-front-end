import type { Meta, StoryObj } from '@storybook/react';

import { SearchTransactionButton } from './index';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Buttons/SearchTransactionButton',
  component: SearchTransactionButton,
} satisfies Meta<typeof SearchTransactionButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {};

