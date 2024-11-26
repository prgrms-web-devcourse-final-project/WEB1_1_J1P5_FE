import type { Meta, StoryObj } from "@storybook/react";
import { BottomNavBar } from ".";

const meta: Meta<typeof BottomNavBar> = {
  title: "Organisms/BottomNavBar",
  component: BottomNavBar,
};

type Story = StoryObj<typeof BottomNavBar>;

export const Default: Story = {
  args: {},
};

export default meta;
