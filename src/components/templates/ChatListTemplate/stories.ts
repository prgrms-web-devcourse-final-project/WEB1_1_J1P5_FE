import type { Meta, StoryObj } from "@storybook/react";
import { ChatListTemplate } from ".";
import { IChatItemProps } from "components/organisms/ChatItem";

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

const chatItems: IChatItemProps[] = [
  {
    ...commonArgs,
    lastMsg: "last message",
    lastMsgCnt: 1,
    lastMsgTime: "2024-11-26T06:24:31:22",
  },
  {
    ...commonArgs,
    lastMsg: "last message",
    lastMsgCnt: 1,
    lastMsgTime: "2024-11-17T06:24:31:22",
  },
  {
    ...commonArgs,
    lastMsg: "last message",
    lastMsgCnt: 0,
    lastMsgTime: "2024-10-27T06:24:31:22",
  },
  {
    ...commonArgs,
    lastMsg: "last message",
    lastMsgCnt: 0,
    lastMsgTime: "2023-11-27T06:24:31:22",
  },
  {
    ...commonArgs,
    lastMsg: "last message",
    lastMsgCnt: 0,
    lastMsgTime: "2022-11-27T06:24:31:22",
  },
  {
    ...commonArgs,
    lastMsg: "last messageeeeeeeeeeeeeeee",
    lastMsgCnt: 1,
    lastMsgTime: "2024-11-28T15:24:31:22",
  },
];
export const Default: Story = {
  args: {
    chatItems: chatItems,
    menus: ["전체", "판매", "구매", "안 읽은 채팅방"],
    onClick: (tab: string) => {
      console.log(tab + " 클릭");
    },
  },
};

export const Empty: Story = {
  args: {
    chatItems: [],
    menus: ["전체", "판매", "구매", "안 읽은 채팅방"],
    onClick: () => {
      console.log("탭 클릭");
    },
  },
};
export default meta;
