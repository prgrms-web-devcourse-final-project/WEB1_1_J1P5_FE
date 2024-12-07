import { type Meta, StoryObj } from "@storybook/react";
import { Sticker } from ".";

const meta: Meta<typeof Sticker> = {
  title: "Atoms/Sticker",
  component: Sticker,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof meta>;

export const defaultState: Story = {
  args: {},
};

export default meta;
