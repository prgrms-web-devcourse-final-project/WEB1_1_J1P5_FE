import type { Meta, StoryObj } from "@storybook/react";
import { Label } from ".";

const meta: Meta<typeof Label> = {
  title: "Atoms/Label",
  component: Label,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof meta>;

export const defaultState: Story = {
  args: {
    text: "Label Text",
  },
};

export default meta;
