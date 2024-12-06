import type { Meta, StoryObj } from "@storybook/react";
import ChatDay from "./ChatDay";

const meta: Meta<typeof ChatDay> = {
  title: "Organisms/ChatDay",
  component: ChatDay,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    date: new Date().toString(),
  },
};

export default meta;
