import type { Meta, StoryObj } from "@storybook/react";
import { TabItem } from ".";

const meta: Meta<typeof TabItem> = {
  title: "Molecules/TabItem",
  component: TabItem,
  tags: ["autodocs"],
  argTypes: {
    state: {
      control: "inline-radio",
      options: ["default", "active"],
    },
  },
};

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    state: "default",
    title: "Title",
    onClick: () => console.log("TabItem 클릭"),
  },
  parameters: {
    docs: {
      description: {
        story: "선택되지 않은 아이템입니다.",
      },
    },
  },
};

export const Active: Story = {
  args: {
    state: "active",
    title: "Title",
    onClick: () => console.log("TabItem 클릭"),
  },
  parameters: {
    docs: {
      description: {
        story: "선택된 아이템입니다.",
      },
    },
  },
};

export default meta;
