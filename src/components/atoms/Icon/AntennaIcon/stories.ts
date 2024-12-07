import { type Meta, StoryObj } from "@storybook/react";
import { AntennaIcon } from ".";
import { IconSizes } from "../styled";

const meta: Meta<typeof AntennaIcon> = {
  title: "Atoms/Icon/AntennaIcon",
  component: AntennaIcon,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: Object.keys(IconSizes)
    }
  }
};

type Story = StoryObj<typeof meta>;

export const small: Story = {
  args: {
    size: "s"
  }
};
export const medium: Story = {
  args: {
    size: "m"
  }
};
export const large: Story = {
  args: {
    size: "l"
  }
};

export default meta;

