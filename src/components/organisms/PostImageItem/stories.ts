import type { Meta, StoryObj } from "@storybook/react";
import { PostImageItem } from ".";
import { DEFAULT_IMG_PATH } from "constants/imgPath";

const meta: Meta<typeof PostImageItem> = {
  title: "Organisms/PostImageItem",
  component: PostImageItem,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof meta>;

export const DefaultState: Story = {
  args: {
    imgUrl: DEFAULT_IMG_PATH,
    isThumbnail: false,
    onClick: () => {
      console.log("X 버튼 클릭!");
    },
  },
};

export const ThumbnailState: Story = {
  args: {
    imgUrl: DEFAULT_IMG_PATH,
    isThumbnail: true,
    onClick: () => {
      console.log("X 버튼 클릭!");
    },
  },
};

export default meta;
