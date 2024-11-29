import type { Meta, StoryObj } from "@storybook/react";
import { ChatOverview } from ".";

const meta: Meta = {
  title: "Organisms/ChatOverview",
  tags: ["autodocs"],
  argTypes: {
    allChatItems: {
      control: "object",
      description: "전체 채팅방 목록"
    },
    sellingChatItems: {
      control: "object",
      description: "판매 채팅방 목록"
    },
    buyingChatItems: {
      control: "object",
      description: "구매 채팅방 목록"
    },
    unreadChatItems: {
      control: "object",
      description: "읽지 않은 채팅방 목록"
    }
  }
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

  onClick: () => console.log("chatItem 클릭")
};

export const Default: Story = {
  args: {
    allChatItems: [
      {
        ...commonArgs,
        lastMsg: "(판매) last message",
        lastMsgCnt: 0,
        lastMsgTime: "2024-11-26T06:24:31:22"
      },
      {
        ...commonArgs,
        lastMsg: "(구매) last message",
        lastMsgCnt: 100,
        lastMsgTime: "2024-11-17T06:24:31:22"
      },
      {
        ...commonArgs,
        lastMsg: "(구매) last message",
        lastMsgCnt: 0,
        lastMsgTime: "2024-11-17T06:24:31:22"
      }
    ],
    sellingChatItems: [
      {
        ...commonArgs,
        lastMsg: "(판매) last message",
        lastMsgCnt: 0,
        lastMsgTime: "2024-11-26T06:24:31:22"
      }
    ],
    buyingChatItems: [
      {
        ...commonArgs,
        lastMsg: "(구매) last message",
        lastMsgCnt: 100,
        lastMsgTime: "2024-11-26T06:24:31:22"
      },
      {
        ...commonArgs,
        lastMsg: "(구매) last message",
        lastMsgCnt: 0,
        lastMsgTime: "2024-11-17T06:24:31:22"
      }
    ],
    unreadChatItems: [
      {
        ...commonArgs,
        lastMsg: "(구매) last message",
        lastMsgCnt: 100,
        lastMsgTime: "2024-11-26T06:24:31:22"
      }
    ]
  },
  render: (args) => {
    return (
      <ChatOverview>
        <ChatOverview.List>
          <ChatOverview.Trigger index={0} title="전체" />
          <ChatOverview.Trigger index={1} title="판매" />
          <ChatOverview.Trigger index={2} title="구매" />
          <ChatOverview.Trigger index={3} title="안 읽은 채팅방" />
        </ChatOverview.List>
        <ChatOverview.Panel index={0} chatItems={args.allChatItems} />
        <ChatOverview.Panel index={1} chatItems={args.sellingChatItems} />
        <ChatOverview.Panel index={2} chatItems={args.buyingChatItems} />
        <ChatOverview.Panel index={3} chatItems={args.unreadChatItems} />
      </ChatOverview>
    );
  }
};

export default meta;

