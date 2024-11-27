import type { Meta, StoryObj } from "@storybook/react";
import { ItemDetails } from ".";

const meta: Meta<typeof ItemDetails> = {
  title: "Organisms/ItemDetails",
  component: ItemDetails,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "물품 1",
    category: "카테고리",
    createdAt: new Date().toString(),
    description:
      "물품의 설명입니다.\n\n작성 일자는 new Date().toString()으로 되어있습니다.\n\n판매가 종료되지 않은 상태입니다.",
  },
};
export const Done: Story = {
  args: {
    isDoneDeal: true,
    title: "물품 2",
    category: "카테고리",
    createdAt: "2024-11-20 09:41:27",
    description:
      "물품의 설명입니다.\n\n작성일자는 2024-11-20 09:41:27으로 되어있습니다.\n\n판매가 종료된 상태입니다.",
  },
};

export default meta;
