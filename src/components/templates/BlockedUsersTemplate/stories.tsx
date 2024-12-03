import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { BlockedUsersTemplate } from ".";
import type { IProfile, IBlockedUserItem } from "types";

const meta: Meta<typeof BlockedUsersTemplate> = {
  title: "Templates/BlockedUsersTemplate",
  component: BlockedUsersTemplate,
  tags: ["autodocs"]
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
  isBlocked
});

/**  공통 유저 아이템 생성 함수 */
const createUserItem = (isBlocked: boolean): IBlockedUserItem => ({
  profile: createProfile(isBlocked),
  onClick: () => {}
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
              profile: {
                ...item.profile,
                isBlocked: !item.profile.isBlocked
              }
            }
          : item
      )
    );
  };

  const itemsWithHandlers = blockedUserItems.map((item, index) => ({
    ...item,
    onClick: () => toggleBlockStatus(index) // onClick 핸들러 설정
  }));

  return <BlockedUsersTemplate blockedUserItems={itemsWithHandlers} />;
};
export const Default: Story = {
  render: () => <BlockedUsersTemplateWithState />
};

export default meta;
