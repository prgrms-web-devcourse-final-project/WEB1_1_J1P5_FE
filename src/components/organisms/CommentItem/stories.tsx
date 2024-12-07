import type { Meta, StoryObj } from "@storybook/react";
import { CommentItem } from ".";
import { DEFAULT_IMG_PATH } from "constants/imgPath";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const meta: Meta<typeof CommentItem> = {
  title: "Organisms/CommentItem",
  component: CommentItem,
  tags: ["autodocs"],
  decorators: (story) => {
    return (
      <QueryClientProvider client={new QueryClient()}>
        {story()}
      </QueryClientProvider>
    );
  },
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
    parentId: null,
    replies: [],
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
    parentId: null,
    replies: [],
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
    parentId: null,
    replies: [],
  },
};
export default meta;
