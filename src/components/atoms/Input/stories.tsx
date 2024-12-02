import { type Meta, StoryObj } from "@storybook/react";
import { Input } from ".";
import { useState } from "react";

const meta: Meta<typeof Input> = {
  title: "Atoms/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: {
        type: "select",
        options: ["text", "number"]
      }
    },
    value: {
      control: "text"
    }
  }
};

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Default Input"
  },
  render: (args) => {
    const Component = () => {
      const [value, setValue] = useState(args.value || "");
      return <Input {...args} value={value} setValue={setValue} />;
    };
    return <Component />;
  },
  parameters: {
    docs: {
      description: {
        story: "일반 Input 컴포넌트입니다."
      }
    }
  }
};

export const Clickable: Story = {
  args: {
    placeholder: "Clickable Input"
  },
  render: (args) => {
    const Component = () => {
      const [value, setValue] = useState(args.value || "");
      return (
        <Input
          {...args}
          value={value}
          onClick={() => setValue(new Date().toLocaleTimeString())}
        />
      );
    };
    return <Component />;
  },
  parameters: {
    docs: {
      description: {
        story:
          "Click Input 컴포넌트입니다. 클릭 시 현재 시간이 출력되도록 설정되어있습니다."
      }
    }
  }
};

export default meta;
