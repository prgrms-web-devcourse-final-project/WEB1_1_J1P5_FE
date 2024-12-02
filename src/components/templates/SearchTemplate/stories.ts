import type { Meta, StoryObj } from "@storybook/react";
import { SearchTemplate } from ".";

const meta: Meta<typeof SearchTemplate> = {
  title: "Templates/SearchTemplate",
  component: SearchTemplate,
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
    onCategoryBtnClick: () => {
      console.log("카테고리 클릭");
    },
  },
};
export const Many: Story = {
  args: {
    searchTerms: [
      "검색어",
      "검색어",
      "검색어",
      "검색어",
      "검색어",
      "검색어",
      "검색어",
      "검색어",
      "검색어",
      "검색어",
      "검색어",
      "검색어",
      "검색어",
      "검색어",
      "검색어",
      "검색어",
    ],
    onAllDeleteButtonClick: () => {
      console.log("전체 삭제 클릭");
    },
    onDeleteButtonClick: (idx) => {
      console.log(idx + " 클릭!");
    },
    onHistoryItemClick: (searchTerm) => {
      console.log(searchTerm + " 클릭!");
    },
    onCategoryBtnClick: () => {
      console.log("카테고리 클릭");
    },
  },
};
export const Empty: Story = {
  args: {
    searchTerms: [],
    onAllDeleteButtonClick: () => {
      console.log("전체 삭제 클릭");
    },
    onDeleteButtonClick: (idx) => {
      console.log(idx + " 클릭!");
    },
    onHistoryItemClick: (searchTerm) => {
      console.log(searchTerm + " 클릭!");
    },
    onCategoryBtnClick: () => {
      console.log("카테고리 클릭");
    },
  },
};
export default meta;
