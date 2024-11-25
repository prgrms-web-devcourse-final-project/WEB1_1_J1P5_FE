import type { Meta, StoryObj } from "@storybook/react";
import { Image } from ".";
import { DEFAULT_IMG_PATH } from "constants/imgPath";

const meta: Meta<typeof Image> = {
  title: "Atoms/Image",
  component: Image,
  tags: ["autodocs"],
  decorators: [(story) => <div style={{ maxWidth: "150px" }}>{story()}</div>],
};
export default meta;
type Story = StoryObj<typeof meta>;

export const defaultState: Story = {
  args: {
    type: "default",
    url: DEFAULT_IMG_PATH,
  },
};

export const squareState: Story = {
  args: {
    type: "square",
    url: DEFAULT_IMG_PATH,
  },
};

export const roundState: Story = {
  args: {
    type: "round",
    url: DEFAULT_IMG_PATH,
  },
};
