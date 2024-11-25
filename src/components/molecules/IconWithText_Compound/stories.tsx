import { Meta, StoryObj } from "@storybook/react";
import { IconWithText } from ".";
import { LocationIcon } from "components/atoms/Icon";

const meta: Meta<typeof IconWithText> = {
  title: "Molecules/IconWithText_Compound",
  component: IconWithText,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const NoDescIconLeftState: Story = {
  args: {
    children: (
      <>
        <IconWithText.Icon icon={LocationIcon} size="m" />
        <IconWithText.Content content="위치" />
      </>
    ),
  },
};

export const NoDescIconRightState: Story = {
  args: {
    children: (
      <>
        <IconWithText.Content content="위치" />
        <IconWithText.Icon icon={LocationIcon} size="m" />
      </>
    ),
  },
};

export const hasDescIconRightState: Story = {
  args: {
    children: (
      <>
        <IconWithText.Content content="위치" desc="어디에서 사용되는지 작성" />
        <IconWithText.Icon icon={LocationIcon} size="m" />
      </>
    ), // 아이콘만 사용한 예시
  },
};

export const hasDescIconLeftState: Story = {
  args: {
    children: (
      <>
        <IconWithText.Icon icon={LocationIcon} size="m" />
        <IconWithText.Content content="위치" desc="어디에서 사용되는지 작성" />
      </>
    ), // 아이콘만 사용한 예시
  },
};
