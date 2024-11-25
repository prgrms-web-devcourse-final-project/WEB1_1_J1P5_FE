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
    onFileChange: () => {},
  },
};