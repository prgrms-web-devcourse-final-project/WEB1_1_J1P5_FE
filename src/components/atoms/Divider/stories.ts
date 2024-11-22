import type { Meta, StoryObj } from "@storybook/react";
import { Divider } from ".";

const meta: Meta<typeof Divider> = {
  title: "atoms/Divider",
  component: Divider,
};
export default meta;
type Story = StoryObj<typeof meta>;

export const defaultState: Story = {
  args: {},
};
