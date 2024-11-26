import { Meta, StoryObj } from "@storybook/react";
import { ImageSlider } from ".";

const meta: Meta<typeof ImageSlider> = {
  title: "Molecules/ImageSlider",
  component: ImageSlider,
  tags: ["autodocs"],
  argTypes: {
    imgUrls: {
      control: {
        type: "object"
      }
    }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imgUrls: [
      "https://github.com/moypp.png",
      "https://github.com/ppyom.png",
      "https://github.com/moypp.png",
      "https://github.com/ppyom.png"
    ]
  }
};

