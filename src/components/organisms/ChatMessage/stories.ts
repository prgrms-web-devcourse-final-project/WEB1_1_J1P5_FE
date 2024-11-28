import type { Meta, StoryObj } from "@storybook/react";
import { ChatMessage } from ".";

const meta: Meta<typeof ChatMessage> = {
  title: "Organisms/ChatMessage",
  component: ChatMessage,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isMe: false,
    isLastMsg: true,
    isRead: true,
    msg: "안녕하세요",
    createdAt: "2024-11-28 16:29:36",
  },
};

export const MyMessage: Story = {
  args: {
    isMe: true,
    isLastMsg: true,
    isRead: false,
    msg: "안녕하세요",
    createdAt: new Date().toString(),
  },
};

export default meta;
