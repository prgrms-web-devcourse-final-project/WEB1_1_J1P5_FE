import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { UploadedImageCounter } from ".";

const meta: Meta<typeof UploadedImageCounter> = {
  title: "Molecules/UploadedImageCounter",
  component: UploadedImageCounter,
  tags: ["autodocs"],
  argTypes: {
    currentCount: {
      control: false,
    },
  },
};

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "사진 등록",
    totalCount: 1,
  },
  render: (args) => {
    const Component = () => {
      const [images, setImages] = useState<File[]>([]);
      const handleImageUpload = (file: File) => {
        if (images.length === (args.totalCount || 10)) {
          console.error("업로드 불가능");
          return;
        }
        setImages((prev) => [...prev, file]);
      };
      return (
        <UploadedImageCounter
          text={args.text}
          currentCount={images.length}
          totalCount={args.totalCount}
          onChange={handleImageUpload}
        />
      );
    };
    return <Component />;
  },
};

export default meta;
