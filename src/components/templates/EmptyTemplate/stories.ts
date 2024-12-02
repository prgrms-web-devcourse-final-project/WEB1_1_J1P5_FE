import type { Meta, StoryObj } from "@storybook/react";
import { EmptyTemplate } from ".";

const meta: Meta<typeof EmptyTemplate> = {
  title: "Templates/EmptyTemplate",
  component: EmptyTemplate,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: "default",
  },
};
export const Search: Story = {
  args: {
    type: "search",
  },
};
export const Chat: Story = {
  args: {
    type: "chat",
  },
};

export const Selling: Story = {
  args: {
    type: "selling",
  },
};
export const Buying: Story = {
  args: {
    type: "buying",
  },
};
export const Completed: Story = {
  args: {
    type: "completed",
  },
};
export default meta;
