import type { Meta, StoryObj } from '@storybook/react';

import { ConfirmTransactionButton } from './index';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Buttons/ConfirmTransactionButton',
  component: ConfirmTransactionButton,
} satisfies Meta<typeof ConfirmTransactionButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {};

