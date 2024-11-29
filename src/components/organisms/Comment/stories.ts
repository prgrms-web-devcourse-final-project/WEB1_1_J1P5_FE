import type { Meta, StoryObj } from "@storybook/react";
import { Comment } from ".";
import { DEFAULT_IMG_PATH } from "constants/imgPath";

const meta: Meta<typeof Comment> = {
  title: "Organisms/Comment",
  component: Comment,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onWriteComment: (comment) => console.log(comment),
    comments: [
      {
        commentId: 1,
        imgUrl: DEFAULT_IMG_PATH,
        nickname: "작성자",
        createdAt: "2024-11-29 09:40:27",
        content:
          "내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용용",
        isMyComment: false,
      },
      {
        commentId: 2,
        imgUrl: "https://github.com/ppyom.png",
        nickname: "작성자는바로나",
        createdAt: "2024-11-29 15:40:27",
        content:
          "내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용용",
        isMyComment: true,
      },
      {
        commentId: 3,
        imgUrl: DEFAULT_IMG_PATH,
        nickname: "작성자",
        createdAt: new Date().toString(),
        content: "내용",
        isMyComment: false,
      },
    ],
  },
};

export default meta;
