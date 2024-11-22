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
  },
  parameters: {
    docs: {
      description: {
        story: "H1에 쓰이는 텍스트로 사이즈는 6rem입니다."
      }
    }
  }
};

export const H5: Story = {
  args: {
    variant: "h5",
    content: "This is an H5"
  },
  parameters: {
    docs: {
      description: {
        story: "H5에 쓰이는 텍스트로 사이즈는 1.5rem입니다."
      }
    }
  }
};

export const Body1: Story = {
  args: {
    variant: "body1",
    content: "This is a body1 text"
  },
  parameters: {
    docs: {
      description: {
        story: "바디에 쓰이는 텍스트로 사이즈는 1rem입니다."
      }
    }
  }
};

export const Button: Story = {
  args: {
    variant: "button",
    content: "This is a button text"
  },
  parameters: {
    docs: {
      description: {
        story: "버튼에 쓰이는 텍스트로 사이즈는 0.875rem입니다."
      }
    }
  }
};
