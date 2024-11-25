import type { Meta, StoryObj } from "@storybook/react";
import { TabMenu } from ".";

const meta: Meta<typeof TabMenu> = {
  title: "Molecules/TabMenu",
  component: TabMenu,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    menus: ["판매중", "거래완료"],
    onClick: () => console.log("TabItem 클릭"),
  },
};

export default meta;
