import type { Meta, StoryObj } from "@storybook/react";
import { ChatMessages } from ".";

const meta: Meta<typeof ChatMessages> = {
  title: "Organisms/ChatMessages",
  component: ChatMessages,
  tags: ["autodocs"],
  argTypes: {},
};

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    chatBubbles: [
      {
        isMe: false,
        imgUrl: "https://github.com/ppyom.png",
        chats: [
          {
            msg: "네이버 로그인 버튼 디자인가이드",
            isLastMsg: false,
            isRead: true,
            createdAt: new Date().toString(),
          },
          {
            msg: "버튼의 형태는 네이버 고유의 이미지를 해치지 않는 범위 내에서 유연하게 디자인을 변경할 수 있습니다.",
            isLastMsg: false,
            isRead: true,
            createdAt: new Date().toString(),
          },
          {
            msg: "표시되는 메시지는 네이버 로그인 목적에 부합한다면 한글이나 영문 상관없이 변경할 수 있습니다.",
            isLastMsg: false,
            isRead: true,
            createdAt: new Date().toString(),
          },
          {
            msg: "로그인 버튼에 사용하는 네이버 로고 타입은 다음의 규정을 따릅니다. N 로고 타입을 사용하고 로고를 기준으로 최소한의 여백 공간을 확보하여 적용합니다. 로고의 형태를 변경하거나 다른 형태와의 조합은 금지합니다.",
            isLastMsg: true,
            isRead: true,
            createdAt: "2024-11-29 09:28:22",
          },
        ],
      },
      {
        isMe: true,
        imgUrl: "https://github.com/ppyom.png",
        chats: [
          {
            msg: "네이버 로그인 버튼 디자인가이드",
            isLastMsg: false,
            isRead: false,
            createdAt: new Date().toString(),
          },
          {
            msg: "버튼의 형태는 네이버 고유의 이미지를 해치지 않는 범위 내에서 유연하게 디자인을 변경할 수 있습니다.",
            isLastMsg: false,
            isRead: false,
            createdAt: new Date().toString(),
          },
          {
            msg: "표시되는 메시지는 네이버 로그인 목적에 부합한다면 한글이나 영문 상관없이 변경할 수 있습니다.",
            isLastMsg: false,
            isRead: false,
            createdAt: new Date().toString(),
          },
          {
            msg: "로그인 버튼에 사용하는 네이버 로고 타입은 다음의 규정을 따릅니다. N 로고 타입을 사용하고 로고를 기준으로 최소한의 여백 공간을 확보하여 적용합니다. 로고의 형태를 변경하거나 다른 형태와의 조합은 금지합니다.",
            isLastMsg: true,
            isRead: false,
            createdAt: new Date().toString(),
          },
        ],
      },
    ],
    onWriteMessage: (message) =>
      console.log({
        msg: message,
        createdAt: new Date().toString(),
      }),
  },
};

export default meta;
