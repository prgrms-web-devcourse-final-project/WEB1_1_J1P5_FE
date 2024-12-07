import type { Meta, StoryObj } from "@storybook/react";
import { Loading } from ".";

const meta: Meta<typeof Loading> = {
  title: "Molecules/Loading",
  component: Loading,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export default meta;
