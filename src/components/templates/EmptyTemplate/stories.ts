import type { Meta, StoryObj } from "@storybook/react";
import { EmptyTemplate } from ".";

const meta: Meta<typeof EmptyTemplate> = {
  title: "Templates/EmptyTemplate",
  component: EmptyTemplate,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export default meta;
