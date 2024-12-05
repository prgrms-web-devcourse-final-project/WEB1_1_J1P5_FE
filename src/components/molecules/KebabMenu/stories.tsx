import type { Meta, StoryObj } from "@storybook/react";
import type { IMenu } from "types";
import { KebabMenu } from ".";

const meta: Meta<typeof KebabMenu> = {
  title: "Molecules/KebabMenu",
  component: KebabMenu,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof meta>;

const testItems: IMenu[] = [
  {
    content: "신고하기",
    onClick: () => console.log("신고하기 클릭"),
  },
  {
    content: "차단하기",
    onClick: () => console.log("차단하기 클릭"),
  },
];

export const Default: Story = {
  render: () => (
    <KebabMenu>
      {testItems.map((menu, idx) => (
        <KebabMenu.Button
          key={idx}
          content={menu.content}
          onClick={menu.onClick}
        />
      ))}
    </KebabMenu>
  ),
};

export default meta;
