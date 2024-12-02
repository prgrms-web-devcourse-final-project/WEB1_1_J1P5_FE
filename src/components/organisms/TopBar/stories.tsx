import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { TopBar } from ".";
import * as Icons from "components/atoms/Icon";

const meta: Meta<Partial<(typeof TopBar)[keyof typeof TopBar]>> = {
  title: "Organisms/TopBar",
  tags: ["autodocs"],
  // 필수 속성들
  args: {
    onBackIconClick: () => {
      console.log("back icon click");
    },
    onIconClick: () => {
      console.log("right icon click");
    },
  },
  argTypes: {
    onBackIconClick: {
      description: "뒤로가기 아이콘 클릭 함수",
    },
    onIconClick: {
      description: "우측 아이콘 클릭 함수",
    },
    icon: {
      description: "우측 아이콘",
      control: "select",
      options: Object.keys(Icons),
      mapping: Icons,
    },
  },
  decorators: (story) => <div style={{ maxWidth: "375px" }}>{story()}</div>,
};

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "title",
  },
  argTypes: {
    title: {
      description: "타이틀 텍스트",
      control: "text",
    },
  },
  render: (args) => {
    return (
      <TopBar>
        <TopBar.BackIcon onBackIconClick={args.onBackIconClick} />
        <TopBar.Title title={args.title} />
        <TopBar.Icon icon={args.icon} onIconClick={args.onIconClick} />
      </TopBar>
    );
  },
};

export const Search: Story = {
  args: {
    icon: Icons.SearchIcon,
  },
  argTypes: {
    placeholder: {
      description: "placeholder",
      control: "text",
    },
    value: {
      description: "input value",
      control: false,
    },
    setValue: {
      description: "input value 변경 함수",
      control: false,
    },
  },
  render: (args) => {
    const Component = () => {
      const [value, setValue] = useState("");
      return (
        <TopBar>
          <TopBar.BackIcon onBackIconClick={args.onBackIconClick} />
          <TopBar.Input
            value={value}
            setValue={setValue}
            placeholder={args.placeholder}
          />
          {args.icon && (
            <TopBar.Icon icon={args.icon} onIconClick={args.onIconClick} />
          )}
        </TopBar>
      );
    };
    return <Component />;
  },
};

export default meta;
