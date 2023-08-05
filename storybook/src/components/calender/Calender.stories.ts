import type { Meta, StoryObj } from '@storybook/react';
import { Calender } from './Calender.tsx';

const meta = {
    title: 'Example/Calender',
    component: Calender,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
} satisfies Meta<typeof Calender>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Primary: Story = {
    args: {
        primary: true,
        label: 'Calender',
    },
};