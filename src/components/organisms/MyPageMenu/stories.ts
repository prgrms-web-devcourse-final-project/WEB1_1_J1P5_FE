import type { Meta, StoryObj } from "@storybook/react";
import { MyPageMenu } from ".";

const meta: Meta<typeof MyPageMenu> = {
  title: "Organisms/MyPageMenu",
  component: MyPageMenu,
  tags: ["autodocs"],
  args: {
    onMenuClick: (pathname) => console.log(pathname),
  },
};

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export default meta;
