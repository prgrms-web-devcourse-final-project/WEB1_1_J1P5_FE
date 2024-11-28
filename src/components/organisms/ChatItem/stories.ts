import type { Meta, StoryObj } from "@storybook/react";
import { ChatItem } from ".";

const meta: Meta<typeof ChatItem> = {
  title: "Organisms/ChatItem",
  component: ChatItem,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof meta>;
const commonArgs: {
  profileImgUrl: string;
  itemImgUrl: string;
  name: string;
  lastMsgTime: string;
  onClick: () => void;
} = {
  profileImgUrl: "https://github.com/moypp.png",
  itemImgUrl: "https://github.com/ppyom.png",
  name: "username",
  lastMsgTime: "2024-11-27T06:24:31:22",
  onClick: () => {
    console.log("chatItem 클릭");
  },
};

export const Default: Story = {
  args: {
    ...commonArgs, // 공통 속성 복사
    lastMsg: "last message",
    lastMsgCnt: 1,
  },
};

export const NoUnreadMsgState: Story = {
  args: {
    ...commonArgs, // 공통 속성 복사
    lastMsg: "last message",
    lastMsgCnt: 0,
  },
};

export const MsgOverflowState: Story = {
  args: {
    ...commonArgs, // 공통 속성 복사
    lastMsg: "last messageeeeeeeeeeeeeeee",
    lastMsgCnt: 1,
  },
};

export default meta;
