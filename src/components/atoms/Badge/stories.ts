import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from ".";

const meta: Meta<typeof Badge> = {
  title: "Atoms/Badge",
  component: Badge,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof meta>;

const testText: string = "거래완료";

export const defaultState: Story = {
  args: {
    text: testText,
  },
};
