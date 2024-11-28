import type { Meta, StoryObj } from "@storybook/react";
import { IconWithTextLegacy } from ".";
import { LocationIcon } from "components/atoms/Icon";

const meta: Meta<typeof IconWithTextLegacy> = {
  title: "Molecules/IconWithText_Legacy",
  component: IconWithTextLegacy,
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
