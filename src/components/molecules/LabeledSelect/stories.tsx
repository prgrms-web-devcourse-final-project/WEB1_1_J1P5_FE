import { useState } from "react";
import { type Meta, StoryObj } from "@storybook/react";
import { LabeledSelect } from ".";

const meta: Meta<typeof LabeledSelect> = {
  title: "Molecules/LabeledSelect",
  component: LabeledSelect,
  tags: ["autodocs"],
  argTypes: {
    id: { control: "text" },
    label: { control: "text" },
    value: {
      control: false
    }
  }
};

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "default",
    label: "Default Label",
    placeholder: "Default LabeledSelect",
    options: [
      { value: "digital_device", label: "디지털기기" },
      { value: "interior", label: "가구/인테리어" },
      { value: "childcare", label: "유아동" }
    ]
  },
  render: (args) => {
    const Component = () => {
      const [value, setValue] = useState<typeof args.value>();
      const handleChangeValue = (value: typeof args.value) => {
        setValue(value);
        console.log(value);
      };
      return (
        <LabeledSelect
          label={args.label}
          id={args.id}
          value={value}
          onChange={handleChangeValue}
          options={args.options}
          placeholder={args.placeholder}
        />
      );
    };
    return <Component />;
  }
};

export default meta;
