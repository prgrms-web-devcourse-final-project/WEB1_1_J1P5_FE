import type { Meta, StoryObj } from "@storybook/react";
import { TabIndicator } from ".";

const meta: Meta<typeof TabIndicator> = {
  title: "Atoms/TabIndicator",
  component: TabIndicator,
  tags: ["autodocs"],
  argTypes: {
    isActive: {
      control: {
        type: "boolean"
      }
    }
  }
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isActive: false
  }
};

export const Active: Story = {
  args: {
    isActive: true
  }
};

