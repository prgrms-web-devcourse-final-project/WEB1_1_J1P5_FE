import type { Meta, StoryObj } from "@storybook/react";
import { TextButton } from ".";

const meta: Meta<typeof TextButton> = {
  title: "Atoms/Button/TextButton",
  component: TextButton,
  tags: ["autodocs"],
  argTypes: {
    text: { control: "text", description: "버튼에 들어갈 텍스트" },
    size: {
      control: { type: "select", options: ["s", "m", "l"] },
      description: "버튼 사이즈 (default: m)"
    },
    backgroundColor: {
      control: { type: "select", options: ["default", "transparent"] },
      description: "버튼 배경색: (default | transparent)"
    },
    onClick: {
      description: "onClick 이벤트"
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "Default Button",
    size: "m",
    backgroundColor: "default",
    onClick: () => console.log("버튼 클릭")
  },
  parameters: {
    docs: {
      description: {
        story: "기본 버튼으로 사이즈는 m입니다."
      }
    }
  }
};

export const Small: Story = {
  args: {
    text: "Small Button",
    size: "s",
    backgroundColor: "default",
    onClick: () => console.log("버튼 클릭")
  },
  parameters: {
    docs: {
      description: {
        story: "s 사이즈 버튼입니다."
      }
    }
  }
};

export const Large: Story = {
  args: {
    text: "Large Button",
    size: "l",
    backgroundColor: "default",
    onClick: () => console.log("버튼 클릭")
  },
  parameters: {
    docs: {
      description: {
        story: "l 사이즈 버튼입니다."
      }
    }
  }
};

export const Transparent: Story = {
  args: {
    text: "Transparent Button",
    size: "m",
    backgroundColor: "transparent",
    onClick: () => console.log("버튼 클릭")
  },
  parameters: {
    docs: {
      description: {
        story: "m 사이즈의 투명한 버튼입니다."
      }
    }
  }
};

