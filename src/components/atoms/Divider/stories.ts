import type { Meta, StoryObj } from "@storybook/react";
import Divider from "components/atoms/Divider/index";

const meta: Meta<typeof Divider> = {
  title: "atom/Divider",
  component: Divider,
};
export default meta;
type Story = StoryObj<typeof meta>;

export const defaultState: Story = {
  args: {},
};
