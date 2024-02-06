import type { Meta, StoryObj } from '@storybook/react';
import { TotalCardValues } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Cards/TotalCardValues',
  component: TotalCardValues,
} satisfies Meta<typeof TotalCardValues>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {};
