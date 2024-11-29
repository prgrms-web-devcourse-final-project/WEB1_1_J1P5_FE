import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { MenuBottomSheet } from ".";

const meta: Meta<typeof MenuBottomSheet> = {
  title: "Organisms/MenuBottomSheet",
  component: MenuBottomSheet,
  tags: ["autodocs"],
  decorators: (story) => <div style={{ height: "300px" }}>{story()}</div>,
  render: (args) => {
    const Component = () => {
      const [open, setOpen] = useState(args.open);
      return (
        <>
          <button onClick={() => setOpen(true)}>Open</button>
          <MenuBottomSheet
            open={open}
            onClose={() => setOpen(false)}
            menus={args.menus}
          />
        </>
      );
    };
    return <Component />;
  },
};

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    open: true,
    menus: [
      { content: "조기 종료", onClick: () => console.log("조기 종료") },
      { content: "게시글 수정", onClick: () => console.log("게시글 수정") },
      { content: "삭제", onClick: () => console.log("삭제") },
    ],
  },
};

export default meta;
