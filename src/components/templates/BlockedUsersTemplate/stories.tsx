import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { BlockedUsersTemplate } from ".";
import type { IBlockedUserItem } from "types";

const meta: Meta<typeof BlockedUsersTemplate> = {
  title: "Templates/BlockedUsersTemplate",
  component: BlockedUsersTemplate,
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
  memberId: 1,
  imgUrl: "https://github.com/ppyom.png",
  nickname: "11시27분",
  address: "망원동",
  isBlocked
});

/**  공통 유저 리스트 생성 함수 */
const createUserItems = (isBlocked: boolean) =>
  Array(3)
    .fill(null)
    .map(() => createUserItem(isBlocked)); // 3개 생성

const BlockedUsersTemplateWithState = () => {
  const [blockedUserItems, setBlockedUserItems] = useState(
    createUserItems(true)
  );

  const toggleBlockStatus = (index: number) => {
    setBlockedUserItems((prevItems) =>
      prevItems.map((item, i) =>
        i === index
          ? {
              ...item,
              isBlocked: !item.isBlocked
            }
          : item
      )
    );
  };

  return (
    <BlockedUsersTemplate
      blockedUserItems={blockedUserItems}
      onClick={toggleBlockStatus}
    />
  );
};

export const Default: Story = {
  render: () => <BlockedUsersTemplateWithState />
};

export default meta;
