import type { Meta, StoryObj } from "@storybook/react";
import { ChatMessage } from ".";

const meta: Meta<typeof ChatMessage> = {
  title: "Organisms/ChatMessage",
  component: ChatMessage,
  tags: ["autodocs"],
  argTypes: {
    msg: {
      description: "채팅 메시지 내용",
    },
    isLastMsg: {
      description:
        "해당 채팅이 그룹에서 마지막 메시지인지 구분,(시간 표시 유무 구분)",
    },
    isRead: {
      description: "해당 채팅을 읽었는지 구분",
    },
    createdAt: {
      description: "해당 메시지 보낸 시간",
    },
  },
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
