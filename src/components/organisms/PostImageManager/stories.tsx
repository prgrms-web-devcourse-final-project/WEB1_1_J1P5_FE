import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { PostImageManager } from ".";
import { IImageInfo } from "types";

const meta: Meta<typeof PostImageManager> = {
  title: "Organisms/PostImageManager",
  component: PostImageManager,
  tags: ["autodocs"],
  argTypes: {
    imageInfos: {
      control: {
        type: "object"
      },
      description:
        "ImageInfo 배열 (url: S3에 업로드 된 이미지 url, base64Url: 아직 S3에 올라가지 않아서 미리보기만 제공되는 url, file: 아직 안올라간 이미지들을 나중에 S3에 올리기 위해 필요한 file)"
    },
    setImageInfos: {
      action: "setImageInfos",
      description: "imageInfos를 설정하는 함수"
    },
    disabled: {
      control: {
        type: "boolean"
      },
      description: "비활성화 여부"
    }
  }
};

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const Component = () => {
      const [imageInfos, setImageInfos] = useState<IImageInfo[]>([]);
      return (
        <PostImageManager
          imageInfos={imageInfos}
          setImageInfos={setImageInfos}
        />
      );
    };
    return <Component />;
  }
};

export const ImageExist: Story = {
  args: {
    imageInfos: [
      { url: "https://github.com/moypp.png", base64Url: "", file: undefined },
      { url: "https://github.com/ppyom.png", base64Url: "", file: undefined },
      { url: "https://github.com/moypp.png", base64Url: "", file: undefined },
      { url: "https://github.com/ppyom.png", base64Url: "", file: undefined }
    ]
  },
  render: (args) => {
    const Component = () => {
      const [imageInfos, setImageInfos] = useState<IImageInfo[]>(
        args.imageInfos
      );
      return (
        <PostImageManager
          imageInfos={imageInfos}
          setImageInfos={setImageInfos}
        />
      );
    };
    return <Component />;
  }
};

export const Disabled: Story = {
  args: {
    imageInfos: [
      { url: "https://github.com/moypp.png", base64Url: "", file: undefined },
      { url: "https://github.com/ppyom.png", base64Url: "", file: undefined },
      { url: "https://github.com/moypp.png", base64Url: "", file: undefined },
      { url: "https://github.com/ppyom.png", base64Url: "", file: undefined }
    ]
  },
  render: (args) => {
    const Component = () => {
      const [imageInfos, setImageInfos] = useState<IImageInfo[]>(
        args.imageInfos
      );
      return (
        <PostImageManager
          imageInfos={imageInfos}
          setImageInfos={setImageInfos}
          disabled={true}
        />
      );
    };
    return <Component />;
  }
};

export default meta;
