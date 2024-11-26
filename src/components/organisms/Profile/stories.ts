import type { Meta, StoryObj } from "@storybook/react";
import { Profile } from ".";

const meta: Meta<typeof Profile> = {
  title: "Organisms/Profile",
  component: Profile,
  tags: ["autodocs"],
  argTypes: {
    imgUrl: {
      control: "text"
    },
    nickname: {
      control: "text"
    },
    location: {
      control: "text"
    }
  }
};

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imgUrl: "https://github.com/ppyom.png",
    nickname: "nickname",
    location: "location"
  }
};

export default meta;

