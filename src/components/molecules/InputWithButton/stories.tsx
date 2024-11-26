import { type Meta, StoryObj } from "@storybook/react";
import { InputWithButton } from ".";
import { useState } from "react";

const meta: Meta<typeof InputWithButton> = {
  title: "Molecules/InputWithButton",
  component: InputWithButton,
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: false,
    },
  },
};

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "댓글을 입력하세요.",
    buttonText: "작성",
  },
  render: (args) => {
    const Component = () => {
      const [value, setValue] = useState("");
      const handleButtonClick = () => {
        console.log(value);
      };
      return (
        <InputWithButton
          value={value}
          setValue={setValue}
          buttonText={args.buttonText}
          onButtonClick={handleButtonClick}
          placeholder={args.placeholder}
        />
      );
    };
    return <Component />;
  },
};

export default meta;
