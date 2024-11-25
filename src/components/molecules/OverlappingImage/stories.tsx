import type { Meta } from "@storybook/react";
import { OverlappingImage } from ".";

const meta: Meta<typeof OverlappingImage> = {
  title: "Molecules/OverlappingImage",
  component: OverlappingImage,
  tags: ["autodocs"],
  decorators: [(story) => <div style={{ maxWidth: "80px" }}>{story()}</div>],
};

type Story = typeof meta;

export const Default: Story = {
  args: {
    frontImgUrl: "https://github.com/moypp.png",
    backImgUrl: "https://github.com/ppyom.png",
    type: "round",
  },
  parameters: {
    docs: {
      description: {
        story: "뒤쪽 이미지가 round",
      },
    },
  },
};

export const Square: Story = {
  args: {
    frontImgUrl: "https://github.com/moypp.png",
    backImgUrl: "https://github.com/ppyom.png",
    type: "square",
  },
  parameters: {
    docs: {
      description: {
        story: "뒤쪽 이미지가 square",
      },
    },
  },
};

export default meta;
