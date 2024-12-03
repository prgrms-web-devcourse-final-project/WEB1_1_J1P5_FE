import type { Meta, StoryObj } from "@storybook/react";
import { ChatListTemplate } from ".";

const meta: Meta<typeof ChatListTemplate> = {
  title: "Templates/ChatListTemplate",
  component: ChatListTemplate,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof meta>;

const commonArgs: {
  profileImgUrl: string;
  itemImgUrl: string;
  name: string;
  onClick: () => void;
} = {
  profileImgUrl: "https://github.com/moypp.png",
  itemImgUrl: "https://github.com/ppyom.png",
  name: "username",

  onClick: () => console.log("chatItem 클릭"),
};
export const Default: Story = {
  args: {
    allChatItems: [
      {
        ...commonArgs,
        lastMsg: "(판매) last message",
        lastMsgCnt: 0,
        lastMsgTime: "2024-11-26T06:24:31:22",
      },
      {
        ...commonArgs,
        lastMsg: "(구매) last message",
        lastMsgCnt: 100,
        lastMsgTime: "2024-11-17T06:24:31:22",
      },
      {
        ...commonArgs,
        lastMsg: "(구매) last message",
        lastMsgCnt: 0,
        lastMsgTime: "2024-11-17T06:24:31:22",
      },
    ],
    sellingChatItems: [
      {
        ...commonArgs,
        lastMsg: "(판매) last message",
        lastMsgCnt: 0,
        lastMsgTime: "2024-11-26T06:24:31:22",
      },
    ],
    buyingChatItems: [
      {
        ...commonArgs,
        lastMsg: "(구매) last message",
        lastMsgCnt: 100,
        lastMsgTime: "2024-11-26T06:24:31:22",
      },
      {
        ...commonArgs,
        lastMsg: "(구매) last message",
        lastMsgCnt: 0,
        lastMsgTime: "2024-11-17T06:24:31:22",
      },
    ],
    unreadChatItems: [
      {
        ...commonArgs,
        lastMsg: "(구매) last message",
        lastMsgCnt: 100,
        lastMsgTime: "2024-11-26T06:24:31:22",
      },
    ],
  },
};

export const Empty: Story = {
  args: {
    allChatItems: [],
    sellingChatItems: [],
    buyingChatItems: [],
    unreadChatItems: [],
  },
};
export default meta;
