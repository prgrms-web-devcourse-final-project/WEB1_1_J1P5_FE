import type { Meta, StoryObj } from "@storybook/react";
import { BlockedUserItem } from ".";
import type { IBlockedUserItem } from "types";
const meta: Meta<typeof BlockedUserItem> = {
  title: "Organisms/BlockedUserItem",
  component: BlockedUserItem,
  tags: ["autodocs"]
};

type Story = StoryObj<typeof meta>;

const blockedUserItem: IBlockedUserItem = {
 userId: 1,
  imageUrl: "https://github.com/ppyom.png",
  nickname: "11시27분",
  emdName: "망원동",
  isBlocked: true
};
const unblockedUserItem: IBlockedUserItem = {
  userId: 1,
  imageUrl: "https://github.com/ppyom.png",
  nickname: "11시27분",
  emdName: "망원동",
  isBlocked: false
};

export const DefaultState: Story = {
  args: {
    blockedUserItem,
    onClick: () => console.log("차단하기 클릭")
  }
};

export const UnBlockedState: Story = {
  args: {
    blockedUserItem: unblockedUserItem,
    onClick: () => console.log("차단해제 클릭")
  }
};
export default meta;
