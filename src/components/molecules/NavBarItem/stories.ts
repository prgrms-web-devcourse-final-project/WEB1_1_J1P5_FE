import type { Meta, StoryObj } from "@storybook/react";
import * as Icons from "components/atoms/Icon";
import { NavBarItem } from ".";

const meta: Meta<typeof NavBarItem> = {
  title: "Molecules/NavBarItem",
  component: NavBarItem,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "inline-radio",
      options: ["default", "active"],
    },
    icon: {
      options: Object.keys(Icons),
      mapping: Icons,
    },
  },
};

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: "default",
    icon: Icons.BackIcon,
    title: "Title",
    onClick: () => console.log("NavBar Item 클릭"),
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
    type: "active",
    icon: Icons.BackIcon,
    title: "Title",
    onClick: () => console.log("NavBar Item 클릭"),
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
