import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { UserLocationBottomSheet } from ".";

const meta: Meta<typeof UserLocationBottomSheet> = {
  title: "Organisms/UserLocationBottomSheet",
  component: UserLocationBottomSheet,
  tags: ["autodocs"],
  decorators: (story) => <div style={{ height: "300px" }}>{story()}</div>,
  render: (args) => {
    const Component = () => {
      const [open, setOpen] = useState(args.open);
      const onSubmitButtonClick = () => {
        console.log("submit!");
      };
      return (
        <>
          <button onClick={() => setOpen(true)}>Open</button>
          <UserLocationBottomSheet
            nickname="알비노 라쿤"
            myAddress="서울특별시 강남구 역삼동"
            address="서울특별시 강남구 역삼동"
            open={open}
            onClose={() => setOpen(false)}
            onSubmitButtonClick={onSubmitButtonClick}
          />
        </>
      );
    };
    return <Component />;
  }
};

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    open: true
  }
};

export default meta;

