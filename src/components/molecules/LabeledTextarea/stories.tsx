import { type Meta, StoryObj } from "@storybook/react";
import { LabeledTextarea } from ".";
import { useState } from "react";

const meta: Meta<typeof LabeledTextarea> = {
  title: "Molecules/LabeledTextarea",
  component: LabeledTextarea,
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
    placeholder: "Default LabeledTextarea"
  },
  render: (args) => {
    const Component = () => {
      const [value, setValue] = useState(args.value || "");
      return <LabeledTextarea {...args} value={value} setValue={setValue} />;
    };
    return <Component />;
  }
};

export default meta;
