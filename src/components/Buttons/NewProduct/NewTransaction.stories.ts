import type { Meta, StoryObj } from '@storybook/react';

import { NewProductButton } from './index';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Buttons/NewProductButton',
  component: NewProductButton,
} satisfies Meta<typeof NewProductButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {};

