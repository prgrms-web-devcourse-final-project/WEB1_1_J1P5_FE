import type { Meta, StoryObj } from "@storybook/react";
import { BlockedUsersList } from ".";
import type { IBlockedUserItem } from "types";

const meta: Meta<typeof BlockedUsersList> = {
  title: "Organisms/BlockedUsersList",
  component: BlockedUsersList,
  tags: ["autodocs"]
};

type Story = StoryObj<typeof meta>;

/** 공통 프로필 생성 함수 */
const createProfile = (
  isBlocked: boolean,
  memberId = 1,
  nickname = "11시27분",
  address = "망원동"
): IBlockedUserItem => ({
  memberId,
  imgUrl: "https://github.com/ppyom.png",
  nickname,
  address,
  isBlocked
});

/**  공통 유저 아이템 생성 함수 */
const createUserItem = (isBlocked: boolean): IBlockedUserItem => ({
  ...createProfile(isBlocked)
});

/**  공통 유저 리스트 생성 함수 */
const createUserItems = (isBlocked: boolean) =>
  Array(3)
    .fill(null)
    .map(() => createUserItem(isBlocked)); // 3개 생성

export const DefaultState: Story = {
  args: {
    blockedUserItems: createUserItems(true),
    onClick: (index: number) => console.log(`차단하기 클릭: ${index}`)
  }
};

export const UnBlockedState: Story = {
  args: {
    blockedUserItems: createUserItems(false),
    onClick: (index: number) => console.log(`차단해제 클릭: ${index}`)
  }
};

export default meta;
