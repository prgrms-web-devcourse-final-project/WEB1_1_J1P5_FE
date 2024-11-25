import { type Meta, StoryObj } from "@storybook/react";
import { LabeledInput } from ".";
import { useState } from "react";

const meta: Meta<typeof LabeledInput> = {
  title: "Molecules/LabeledInput",
  component: LabeledInput,
  tags: ["autodocs"],
  argTypes: {
    id: { control: "text" },
    label: { control: "text" },
    value: { control: "text" },
    placeholder: { control: "text" }
  }
};

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "default",
    label: "Default Label",
    placeholder: "Default LabeledInput"
  },
  render: (args) => {
    const Component = () => {
      const [value, setValue] = useState(args.value || "");
      return <LabeledInput {...args} value={value} setValue={setValue} />;
    };
    return <Component />;
  },
  parameters: {
    docs: {
      description: {
        story: "일반 LabeledInput 컴포넌트입니다."
      }
    }
  }
};

export const Clickable: Story = {
  args: {
    id: "clickable",
    label: "Clickable Label",
    placeholder: "Clickable LabeledInput"
  },
  render: (args) => {
    const Component = () => {
      const [value, setValue] = useState(args.value || "");
      return (
        <LabeledInput
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
          "Click LabeledInput 컴포넌트입니다. 클릭 시 현재 시간이 출력되도록 설정되어있습니다."
      }
    }
  }
};

export default meta;

