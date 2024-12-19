import type { Meta, StoryObj } from "@storybook/react";
import { MyPageTemplate } from ".";

const meta: Meta<typeof MyPageTemplate> = {
  title: "Templates/MyPageTemplate",
  component: MyPageTemplate,
  tags: ["autodocs"],
  argTypes: {
    imgUrl: {
      control: "text",
    },
    nickname: {
      control: "text",
    },
    location: {
      control: "text",
    },
  },
};

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imgUrl: "https://github.com/ppyom.png",
    nickname: "nickname",
    location: "location",
    onProfileEditButtonClick: () => console.log("프로필 수정 버튼 클릭"),
    onMenuClick: (pathname) => console.log(pathname),
    onLogout: () => console.log("로그아웃"),
    onServiceExit: () => console.log("회원탈퇴"),
  },
};

export default meta;
