import { useState } from "react";
import { type Meta, StoryObj } from "@storybook/react";
import { Select } from ".";

const meta: Meta<typeof Select> = {
  title: "Atoms/Select",
  component: Select,
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
    options: [
      { value: "digital_device", label: "디지털기기" },
      { value: "interior", label: "가구/인테리어" },
      { value: "childcare", label: "유아동" },
    ],
  },
  render: (args) => {
    const Component = () => {
      const [value, setValue] = useState<typeof args.value>();
      const handleChangeValue = (value: typeof args.value) => {
        setValue(value);
        console.log(value);
      };
      return (
        <Select
          value={value}
          onChange={handleChangeValue}
          options={args.options}
          placeholder={args.placeholder}
        />
      );
    };
    return <Component />;
  },
};

export default meta;
