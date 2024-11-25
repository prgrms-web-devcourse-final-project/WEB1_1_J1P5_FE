import type { Meta, StoryObj } from "@storybook/react";
import { IconButton } from ".";
import { ChatIcon } from "components/atoms/Icon";

const meta: Meta<typeof IconButton> = {
  title: "Atoms/Button/IconButton",
  component: IconButton,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof meta>;

export const defaultState: Story = {
  args: {
    icon: ChatIcon,
    type: "square",
    size: "m",
    backgroundColor: "default",
    onClick: () => {
      console.log("defaultState clicked!");
    },
  },
};

export const roundState: Story = {
  args: {
    icon: ChatIcon,
    type: "round",
    size: "m",
    backgroundColor: "default",
    onClick: () => {
      console.log("roundState clicked!");
    },
  },
};
export const transparentState: Story = {
  args: {
    icon: ChatIcon,
    type: "round",
    size: "m",
    backgroundColor: "transparent",
    onClick: () => {
      console.log("transparentState clicked!");
    },
  },
};

export const sizeSmallState: Story = {
  args: {
    icon: ChatIcon,
    type: "square",
    size: "s",
    backgroundColor: "default",
    onClick: () => {
      console.log("sizeSmallState clicked!");
    },
  },
};
export const sizeLargeState: Story = {
  args: {
    icon: ChatIcon,
    type: "square",
    size: "l",
    backgroundColor: "default",
    onClick: () => {
      console.log("sizeLargeState clicked!");
    },
  },
};
