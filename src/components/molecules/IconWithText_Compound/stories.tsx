import { Meta, StoryObj } from "@storybook/react";
import { IconWithText } from ".";
import { IconSizes } from "components/atoms/Icon/styled";
import * as Icons from "components/atoms/Icon";

const meta: Meta<(typeof IconWithText)[keyof typeof IconWithText]> = {
  title: "Molecules/IconWithText_Compound",
  // component: IconWithText,
  tags: ["autodocs"],
  argTypes: {
    icon: {
      control: "select",
      options: Object.keys(Icons),
      mapping: Icons,
    },
    size: {
      control: "select",
      options: Object.keys(IconSizes),
    },
    content: {
      control: "text",
    },
    desc: {
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const IconLeft: Story = {
  args: {
    icon: Icons.LocationIcon,
    size: "m",
    content: "위치",
  },
  render: (args) => {
    return (
      <IconWithText>
        <IconWithText.Icon icon={args.icon} size={args.size} />
        <IconWithText.Content content={args.content} desc={args.desc} />
      </IconWithText>
    );
  },
};

export const IconRight: Story = {
  args: {
    icon: Icons.LocationIcon,
    size: "m",
    content: "위치",
  },
  render: (args) => {
    return (
      <IconWithText>
        <IconWithText.Content content={args.content} desc={args.desc} />
        <IconWithText.Icon icon={args.icon} size={args.size} />
      </IconWithText>
    );
  },
};
