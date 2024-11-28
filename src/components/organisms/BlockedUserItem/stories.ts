import type { Meta, StoryObj } from "@storybook/react";
import { BlockedUserItem, IProfile } from ".";

const meta: Meta<typeof BlockedUserItem> = {
  title: "Organisms/BlockedUserItem",
  component: BlockedUserItem,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof meta>;

const blockedProfile: IProfile = {
  imgUrl: "https://github.com/ppyom.png",
  nickname: "11시27분",
  location: "망원동",
  isBlocked: true,
};
const unBlockedProfile: IProfile = {
  imgUrl: "https://github.com/ppyom.png",
  nickname: "11시27분",
  location: "망원동",
  isBlocked: false,
};
export const DefaultState: Story = {
  args: {
    profile: blockedProfile,
    onClick: () => console.log("차단하기 클릭"),
  },
};

export const UnBlockedState: Story = {
  args: {
    profile: unBlockedProfile,
    onClick: () => console.log("차단해제 클릭"),
  },
};
export default meta;
