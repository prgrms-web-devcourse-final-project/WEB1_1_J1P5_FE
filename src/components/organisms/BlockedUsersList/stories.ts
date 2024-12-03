import type { Meta, StoryObj } from "@storybook/react";
import { BlockedUsersList } from ".";
import type { IProfile, IBlockedUserItem } from "types";

const meta: Meta<typeof BlockedUsersList> = {
  title: "Organisms/BlockedUsersList",
  component: BlockedUsersList,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof meta>;

/** 공통 프로필 생성 함수 */
const createProfile = (
  isBlocked: boolean,
  nickname = "11시27분",
  location = "망원동"
): IProfile => ({
  imgUrl: "https://github.com/ppyom.png",
  nickname,
  location,
  isBlocked,
});

/**  공통 유저 아이템 생성 함수 */
const createUserItem = (
  isBlocked: boolean,
  onClickMessage: string
): IBlockedUserItem => ({
  profile: createProfile(isBlocked),
  onClick: () => console.log(onClickMessage),
});

/**  공통 유저 리스트 생성 함수 */
const createUserItems = (isBlocked: boolean, onClickMessage: string) =>
  Array(3).fill(createUserItem(isBlocked, onClickMessage)); // 3개 생성

export const DefaultState: Story = {
  args: {
    blockedUserItems: createUserItems(true, "차단하기 클릭"),
  },
};

export const UnBlockedState: Story = {
  args: {
    blockedUserItems: createUserItems(false, "차단해제 클릭"),
  },
};

export default meta;
