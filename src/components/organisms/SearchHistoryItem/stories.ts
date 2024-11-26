import type { Meta, StoryObj } from "@storybook/react";
import { SearchHistoryItem } from ".";

const funcArgs = {
  handleDeleteButtonClick: () => {
    console.log("검색어 삭제");
  },
  handleHistoryItemClick: () => {
    console.log("검색 결과로 이동");
  }
} as const;

const meta: Meta<typeof SearchHistoryItem> = {
  title: "Organisms/SearchHistoryItem",
  component: SearchHistoryItem,
  tags: ["autodocs"],
  argTypes: {
    searchTerm: {
      control: "text"
    }
  }
};

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    searchTerm: "검색어",
    onDeleteButtonClick: funcArgs.handleDeleteButtonClick,
    onHistoryItemClick: funcArgs.handleHistoryItemClick
  }
};

export default meta;

