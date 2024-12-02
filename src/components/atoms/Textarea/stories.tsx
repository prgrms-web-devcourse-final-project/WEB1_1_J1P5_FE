import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from ".";
import { useState } from "react";

const meta: Meta<typeof Textarea> = {
  title: "Atoms/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: "text"
    }
  }
};

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Default Textarea"
  },
  render: (args) => {
    const Component = () => {
      const [value, setValue] = useState(args.value || "");
      return <Textarea {...args} value={value} setValue={setValue} />;
    };
    return <Component />;
  }
};

export const HasScrollBar: Story = {
  args: {
    placeholder: "글이 길어져 스크롤이 생긴 버전입니다.",
    value:
      "글이 길어져 스크롤이 생긴 버전입니다.글이 길어져 스크롤이 생긴 버전입니다.글이 길어져 스크롤이 생긴 버전입니다.글이 길어져 스크롤이 생긴 버전입니다.글이 길어져 스크롤이 생긴 버전입니다.글이 길어져 스크롤이 생긴 버전입니다.글이 길어져 스크롤이 생긴 버전입니다.글이 길어져 스크롤이 생긴 버전입니다.글이 길어져 스크롤이 생긴 버전입니다.글이 길어져 스크롤이 생긴 버전입니다.글이 길어져 스크롤이 생긴 버전입니다.글이 길어져 스크롤이 생긴 버전입니다.글이 길어져 스크롤이 생긴 버전입니다."
  },
  render: (args) => {
    const Component = () => {
      const [value, setValue] = useState(args.value || "");
      return <Textarea {...args} value={value} setValue={setValue} />;
    };
    return <Component />;
  }
};

export default meta;

