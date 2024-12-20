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

/**  공통 유저 아이템 생성 함수 */
const createUserItem = (isBlocked: boolean): IBlockedUserItem => ({
  userId: 1,
  imageUrl: "https://github.com/ppyom.png",
  nickname: "11시27분",
  emdName: "망원동",
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
