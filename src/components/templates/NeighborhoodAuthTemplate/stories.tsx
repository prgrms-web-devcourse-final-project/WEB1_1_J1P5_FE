import type { Meta, StoryObj } from "@storybook/react";
import { NavermapsProvider } from "react-naver-maps";
import { NeighborhoodAuthTemplate } from ".";
import { ILocation } from "types";

const meta: Meta<typeof NeighborhoodAuthTemplate> = {
  title: "Templates/NeighborhoodAuthTemplate",
  component: NeighborhoodAuthTemplate,
  tags: ["autodocs"],
  argTypes: {
    onSubmitButtonClick: {
      action: "onSubmitButtonClick",
      description: "동네 인증 완료 버튼 클릭 이벤트"
    },
    locationErrorEvent: {
      action: "locationErrorEvent",
      description: "위치 권한 가져오기 실패 시 모달을 실행할 함수"
    }
  },
  decorators: (story) => (
    <NavermapsProvider
      ncpClientId={import.meta.env.VITE_NAVER_MAP_CLIENT_ID}
      submodules={["geocoder"]}
    >
      {story()}
    </NavermapsProvider>
  )
};

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onSubmitButtonClick: (location: ILocation) => console.log(location),
    locationErrorEvent: (message: string) => console.log(message)
  },
  render: (args) => <NeighborhoodAuthTemplate {...args} />
};

export default meta;
