import type { Meta, StoryObj } from "@storybook/react";
import { NavermapsProvider } from "react-naver-maps";
import { NeighborhoodAuthForm } from ".";
import { ICoord } from "types";

const meta: Meta<typeof NeighborhoodAuthForm> = {
  title: "Organisms/NeighborhoodAuthForm",
  component: NeighborhoodAuthForm,
  tags: ["autodocs"],
  argTypes: {
    onSubmitButtonClick: {
      action: "onSubmitButtonClick",
      description: "동네 인증 완료 버튼 클릭 이벤트"
    }
  },
  decorators: (story) => (
    <NavermapsProvider ncpClientId={import.meta.env.VITE_NAVER_MAP_CLIENT_ID}>
      {story()}
    </NavermapsProvider>
  )
};

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { onSubmitButtonClick: (coord: ICoord) => console.log(coord) },
  render: (args) => <NeighborhoodAuthForm {...args} />
};

export default meta;

