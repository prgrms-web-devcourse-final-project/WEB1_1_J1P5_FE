import type { Meta, StoryObj } from "@storybook/react";
import { CommentItem } from ".";
import { DEFAULT_IMG_PATH } from "constants/imgPath";

const meta: Meta<typeof CommentItem> = {
  title: "Organisms/CommentItem",
  component: CommentItem,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    commentId: 1,
    imgUrl: DEFAULT_IMG_PATH,
    nickname: "작성자",
    createdAt: new Date().toString(),
    content: "내용",
    isMyComment: false,
  },
};

export const LongContent: Story = {
  args: {
    commentId: 1,
    imgUrl: DEFAULT_IMG_PATH,
    nickname: "작성자",
    createdAt: new Date().toString(),
    content:
      "내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용용",
    isMyComment: false,
  },
};

export const MyComment: Story = {
  args: {
    commentId: 1,
    imgUrl: DEFAULT_IMG_PATH,
    nickname: "작성자",
    createdAt: new Date().toString(),
    content:
      "내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용용",
    isMyComment: true,
  },
};
export default meta;
