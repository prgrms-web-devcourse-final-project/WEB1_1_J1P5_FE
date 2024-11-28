import type { Meta, StoryObj } from "@storybook/react";
import { SearchHistory } from ".";

const meta: Meta<typeof SearchHistory> = {
  title: "Organisms/SearchHistory",
  component: SearchHistory,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    searchTerms: ["검색어", "검색어", "검색어", "검색어"],
    onAllDeleteButtonClick: () => {
      console.log("전체 삭제 클릭");
    },
    onDeleteButtonClick: (idx) => {
      console.log(idx + " 클릭!");
    },
    onHistoryItemClick: (searchTerm) => {
      console.log(searchTerm + " 클릭!");
    },
  },
};

export default meta;
