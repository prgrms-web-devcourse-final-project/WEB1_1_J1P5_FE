import type { Meta, StoryObj } from "@storybook/react";
import { LoginButton } from ".";

const meta: Meta<typeof LoginButton> = {
  title: "Atoms/Button/LoginButton",
  component: LoginButton,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof meta>;

export const Naver: Story = {
  args: {
    type: "naver",
    onClick: () => console.log("로그인 버튼 클릭"),
  },
  argTypes: {
    type: {
      control: false,
    },
  },
};

export const Kakao: Story = {
  args: {
    type: "kakao",
    onClick: () => console.log("로그인 버튼 클릭"),
  },
  argTypes: {
    type: {
      control: false,
    },
  },
};

export default meta;
