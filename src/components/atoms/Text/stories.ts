import type { Meta, StoryObj } from "@storybook/react";
import { Text } from ".";

const meta: Meta<typeof Text> = {
  title: "Atoms/Text",
  component: Text,
  tags: ["autodocs"]
};
export default meta;

type Story = StoryObj<typeof meta>;

export const H1: Story = {
  args: {
    variant: "h1",
    content: "This is an H1"
  }
};

export const H5: Story = {
  args: {
    variant: "h5",
    content: "This is an H5"
  }
};

export const Body1: Story = {
  args: {
    variant: "body1",
    content: "This is a body1 text"
  }
};

export const Button: Story = {
  args: {
    variant: "button",
    content: "This is a button text"
  }
};
