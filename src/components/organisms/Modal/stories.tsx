import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Input, Text } from "components/atoms";
import { type IButton, Modal } from ".";

const meta: Meta = {
  title: "Organisms/Modal",
  tags: ["autodocs"],
  decorators: (story) => <div style={{ height: "30vh" }}>{story()}</div>,
};

type Story = StoryObj<typeof meta>;

const buttons: IButton[] = Array.from({ length: 3 }).map((_, i) => ({
  title: `Button ${i}`,
  onClick: () => console.log(`Button ${i} click`),
}));

export const Default: Story["argTypes"] = {
  parameters: {
    docs: {
      description: {
        story: "기본적인 Modal 스타일을 확인할 수 있습니다.",
      },
    },
  },
  argTypes: {
    // Root
    onClose: {
      description: "close 함수",
    },
    // Background
    hasBackgroundClickEvent: {
      name: "hasClickEvent",
      description: "배경 클릭 시 close event 발생 여부",
    },
    // Header
    title: {
      description: "타이틀 텍스트",
    },
    hasCloseButton: {
      description: "CloseButton(X버튼) 포함 여부",
      defaultValue: true,
    },
    // Body
    bodyText: {
      description: "Body에 출력 될 메시지 (실제 사용 시 다를 수 있음)",
    },
    // ButtonContainer
    buttons: {
      description: "버튼 목록",
    },
    direction: {
      control: "inline-radio",
      options: ["horizontal", "vertical"],
      description: "버튼 목록이 출력 될 방향",
      defaultValue: "horizontal",
    },
  },
  args: {
    title: "타이틀 텍스트",
    bodyText: "내부에 들어갈 내용 (Text, Input 등등 아무거나 상관 X~!)",
    direction: "horizontal",
    buttons: buttons,
    onClose: () => {
      console.log("onClose");
    },
    hasCloseButton: true,
    hasBackgroundClickEvent: false,
  },
  render: (args: Story["args"]) => {
    return (
      <Modal open={true} onClose={args?.onClose}>
        <Modal.Background hasClickEvent={args?.hasBackgroundClickEvent} />
        <Modal.Container>
          <Modal.Header
            title={args?.title}
            hasCloseButton={args?.hasCloseButton}
          />
          <Modal.Body>{args?.bodyText}</Modal.Body>
          <Modal.ButtonContainer
            direction={args?.direction}
            buttons={args?.buttons}
          />
        </Modal.Container>
      </Modal>
    );
  },
};

export const CommonModal: Story = {
  parameters: {
    docs: {
      description: {
        story: "아무것도 없는 Modal의 형태입니다.",
      },
    },
  },
  args: {
    title: "",
    bodyText: "텍스트입니다.",
  },
  render: (args: Story["args"]) => {
    const Component = () => {
      const [open, setOpen] = useState(false);
      return (
        <>
          <button onClick={() => setOpen(true)}>Open</button>
          <Modal open={open} onClose={() => setOpen(false)}>
            <Modal.Background />
            <Modal.Container>
              <Modal.Header title={args?.title} />
              <Modal.Body>
                <Text content={args?.bodyText} />
              </Modal.Body>
            </Modal.Container>
          </Modal>
        </>
      );
    };
    return <Component />;
  },
};

export const AlertModal: Story = {
  parameters: {
    docs: {
      description: {
        story: "간단한 메시지와 확인 버튼이 있는 형태입니다.",
      },
    },
  },
  args: {
    bodyText: "Alert 입니다.",
  },
  render: (args: Story["args"]) => {
    const Component = () => {
      const [open, setOpen] = useState(false);
      const handleOpenModal = () => setOpen(true);
      const handleCloseModal = () => setOpen(false);
      return (
        <>
          <button onClick={handleOpenModal}>Open</button>
          <Modal open={open} onClose={handleCloseModal}>
            <Modal.Background />
            <Modal.Container>
              <Modal.Body>
                <Text content={args?.bodyText} />
              </Modal.Body>
              <Modal.ButtonContainer
                buttons={[
                  {
                    title: "확인",
                    onClick: () => {
                      console.log("확인 버튼 클릭");
                      handleCloseModal();
                    },
                  },
                ]}
              />
            </Modal.Container>
          </Modal>
        </>
      );
    };
    return <Component />;
  },
};

export const ConfirmModal: Story = {
  parameters: {
    docs: {
      description: {
        story: "간단한 메시지와 취소 / 확인 버튼이 있는 형태입니다.",
      },
    },
  },
  args: {
    bodyText: "Confirm 입니다.",
  },
  render: (args: Story["args"]) => {
    const Component = () => {
      const [open, setOpen] = useState(false);
      const handleOpenModal = () => setOpen(true);
      const handleCloseModal = () => setOpen(false);
      return (
        <>
          <button onClick={handleOpenModal}>Open</button>
          <Modal open={open} onClose={handleCloseModal}>
            <Modal.Background />
            <Modal.Container>
              <Modal.Body>
                <Text content={args?.bodyText} />
              </Modal.Body>
              <Modal.ButtonContainer
                buttons={[
                  {
                    title: "취소",
                    onClick: () => {
                      console.log("취소 버튼 클릭");
                      handleCloseModal();
                    },
                  },
                  {
                    title: "확인",
                    onClick: () => {
                      console.log("확인 버튼 클릭");
                      handleCloseModal();
                    },
                  },
                ]}
              />
            </Modal.Container>
          </Modal>
        </>
      );
    };
    return <Component />;
  },
};

export const InputModal: Story = {
  parameters: {
    docs: {
      description: {
        story: "메시지를 입력받을 수 있고, 취소 / 확인 버튼이 있는 형태입니다.",
      },
    },
  },
  args: {
    title: "Input",
  },
  render: (args: Story["args"]) => {
    const Component = () => {
      const [open, setOpen] = useState(false);
      const [value, setValue] = useState("");
      const handleOpenModal = () => setOpen(true);
      const handleCloseModal = () => setOpen(false);
      return (
        <>
          <button onClick={handleOpenModal}>Open</button>
          <Modal open={open} onClose={handleCloseModal}>
            <Modal.Background />
            <Modal.Container>
              <Modal.Header title={args?.title} />
              <Modal.Body>
                <Input
                  value={value}
                  setValue={setValue}
                  placeholder="내용을 입력"
                />
              </Modal.Body>
              <Modal.ButtonContainer
                buttons={[
                  {
                    title: "취소",
                    onClick: () => {
                      console.log("취소 버튼 클릭");
                      handleCloseModal();
                    },
                  },
                  {
                    title: "확인",
                    onClick: () => {
                      console.log("확인 버튼 클릭");
                      console.log(value);
                      handleCloseModal();
                    },
                  },
                ]}
              />
            </Modal.Container>
          </Modal>
        </>
      );
    };
    return <Component />;
  },
};

export const CustomModal: Story = {
  parameters: {
    docs: {
      description: {
        story: "자유로운 형태입니다.",
      },
    },
  },
  args: {
    bodyText: "Custom Modal",
  },
  render: (args: Story["args"]) => {
    const Component = () => {
      const [open, setOpen] = useState(false);
      const handleOpenModal = () => setOpen(true);
      const handleCloseModal = () => setOpen(false);
      return (
        <>
          <button onClick={handleOpenModal}>Open</button>
          <Modal open={open} onClose={handleCloseModal}>
            <Modal.Background hasClickEvent={true} />
            <Modal.Container>
              <Modal.Body>
                <Text content={args?.bodyText} />
              </Modal.Body>
              <Modal.ButtonContainer buttons={buttons} direction="vertical" />
            </Modal.Container>
          </Modal>
        </>
      );
    };
    return <Component />;
  },
};

export default meta;
