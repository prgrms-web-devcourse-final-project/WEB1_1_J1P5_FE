import type { Meta, StoryObj } from "@storybook/react";
import { Logo } from ".";

const meta: Meta<typeof Logo> = {
  title: "atoms/Logo",
  component: Logo,
};
export default meta;
type Story = StoryObj<typeof meta>;

export const defaultState: Story = {
  args: {},
};
