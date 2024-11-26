import { type Meta, StoryObj } from "@storybook/react";
import { Header } from ".";

const funcArgs = {
  handleLocationClick: () => {
    console.log("내 동네 선택");
  },
  handleSearchClick: () => {
    console.log("/search");
  },
  handleNotificationClick: () => {
    console.log("/notification");
  },
} as const;

const meta: Meta<typeof Header> = {
  title: "Organisms/Header",
  component: Header,
  tags: ["autodocs"],
  args: {
    onLocationClick: funcArgs.handleLocationClick,
    onSearchClick: funcArgs.handleSearchClick,
    onNotificationClick: funcArgs.handleNotificationClick,
  },
};

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: "default",
    title: "홈 이외의 다른 페이지 Title",
  },
};

export const Home: Story = {
  args: {
    type: "home",
    title: "신림동",
  },
};

export default meta;
