import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "components/atoms";
import { ModalBottomSheet } from ".";

const meta: Meta<typeof ModalBottomSheet> = {
  title: "Molecules/ModalBottomSheet",
  component: ModalBottomSheet,
  tags: ["autodocs"],
  decorators: (story) => <div style={{ height: "300px" }}>{story()}</div>,
};

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Text variant="h5" content="ModalBottonSheet 내부 Content 영역입니다" />
        <Text content="Modal과 동일하게 open, onClose를 받아 스타일을 설정합니다." />
        <Text content="children에는 아무거나 올 수 있습니다. (다양한 컴포넌트들)" />
        <Text content="className을 지정해 Body 영역 스타일을 변경할 수 있습니다." />
      </>
    ),
    open: true,
  },
};

export const Animation: Story = {
  render: () => {
    const Component = () => {
      const [open, setOpen] = useState(false);
      return (
        <>
          <button onClick={() => setOpen(true)}>Open</button>
          <ModalBottomSheet open={open} onClose={() => setOpen(false)}>
            <Text
              variant="h5"
              content="ModalBottonSheet 내부 Content 영역입니다"
            />
            <Text content="Modal과 동일하게 open, onClose를 받아 스타일을 설정합니다." />
            <Text content="children에는 아무거나 올 수 있습니다. (다양한 컴포넌트들)" />
            <Text content="className을 지정해 Body 영역 스타일을 변경할 수 있습니다." />
          </ModalBottomSheet>
        </>
      );
    };
    return <Component />;
  },
};

export default meta;
