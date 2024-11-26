import type { Meta, StoryObj } from "@storybook/react";
import { ImageUpload } from ".";

const meta: Meta<typeof ImageUpload> = {
  title: "Atoms/ImageUpload",
  component: ImageUpload,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof meta>;

export const defaultState: Story = {
  args: {
    onFileChange: (file) => {
      // 파일명을 콘솔에 출력
      console.log("Selected file:", file.name);
    },
  },
};
