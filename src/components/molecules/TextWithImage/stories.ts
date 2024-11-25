import type { Meta, StoryObj } from "@storybook/react";
import { TextWithImage } from ".";
import { DEFAULT_IMG_PATH } from "constants/imgPath";

const meta: Meta<typeof TextWithImage> = {
  title: "Molecules/TextWithImage",
  component: TextWithImage,
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    desc: { control: "text" },
    imgUrl: { control: "text" }
  }
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "This is title.",
    desc: "This is description.",
    imgUrl: DEFAULT_IMG_PATH,
    onClick: () => {
      console.log("Default 클릭!");
    }
  }
};

export const LongDescription: Story = {
  args: {
    title: "This is title.",
    desc: "This is description. This is description. This is description. This is description. This is description. This is description. This is description. This is description. This is description.",
    imgUrl: DEFAULT_IMG_PATH,
    onClick: () => {
      console.log("LongDescription 클릭!");
    }
  }
};

