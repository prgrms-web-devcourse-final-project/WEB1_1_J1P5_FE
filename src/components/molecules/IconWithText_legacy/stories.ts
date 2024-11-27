import type { Meta, StoryObj } from "@storybook/react";
import { IconWithText_Legacy } from ".";
import { LocationIcon } from "components/atoms/Icon";

const meta: Meta<typeof IconWithText_Legacy> = {
  title: "Molecules/IconWithText_Legacy",
  component: IconWithText_Legacy,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof meta>;

export const defaultState: Story = {
  args: {
    icon: LocationIcon,
    content: "위치",
    onClick: () => {
      console.log("defaultState 클릭!");
    },
    iconLocation: "default",
  },
};

export const descState: Story = {
  args: {
    icon: LocationIcon,
    content: "위치",
    desc: "어디에서 사용되는지 작성",
    onClick: () => {
      console.log("descState 클릭!");
    },
    iconLocation: "default",
  },
};
