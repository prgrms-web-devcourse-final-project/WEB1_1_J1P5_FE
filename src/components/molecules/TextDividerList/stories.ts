import type { Meta, StoryObj } from "@storybook/react";
import { TextDividerList } from ".";

const meta: Meta<typeof TextDividerList> = {
  title: "Molecules/TextDividerList",
  component: TextDividerList,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      "서울 관악구 신림동",
      "서울 관악구 봉천동",
      "서울 관악구 남현동",
      "서울 동작구 노량진1-2동",
      "서울 동작구 상도1-4동",
      "서울 동작구 흑석동",
      "서울 동작구 사당1-5동",
      "서울 동작구 대방동",
      "서울 동작구 신대방1-2동",
    ],
    onClick: (item) => console.log(item),
  },
};

export default meta;
