import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { PostImageManager } from ".";

const meta: Meta<typeof PostImageManager> = {
  title: "Organisms/PostImageManager",
  component: PostImageManager,
  tags: ["autodocs"],
  argTypes: {
    imgUrls: {
      control: {
        type: "object"
      },
      description: "이미지 URL 배열"
    },
    setImgUrls: {
      action: "setImgUrls",
      description: "이미지 URL 배열을 설정하는 함수"
    }
  }
};

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const Component = () => {
      const [imgUrls, setImgUrls] = useState<string[]>([]);
      return <PostImageManager imgUrls={imgUrls} setImgUrls={setImgUrls} />;
    };
    return <Component />;
  }
};

export const ImageExist: Story = {
  args: {
    imgUrls: [
      "https://github.com/moypp.png",
      "https://github.com/ppyom.png",
      "https://github.com/moypp.png",
      "https://github.com/ppyom.png"
    ]
  },
  render: (args) => {
    const Component = () => {
      const [imgUrls, setImgUrls] = useState<string[]>(args.imgUrls);
      return <PostImageManager imgUrls={imgUrls} setImgUrls={setImgUrls} />;
    };
    return <Component />;
  }
};

export default meta;

