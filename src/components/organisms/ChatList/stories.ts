import type { Meta, StoryObj } from "@storybook/react";
import { ChatList } from ".";
import { IChatItemProps } from "../ChatItem";

const meta: Meta<typeof ChatList> = {
  title: "Organisms/ChatList",
  component: ChatList,
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
    chatItems,
  },
};

export default meta;
