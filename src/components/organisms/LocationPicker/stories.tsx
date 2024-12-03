import type { Meta, StoryObj } from "@storybook/react";
import { NavermapsProvider } from "react-naver-maps";
import { LocationPicker } from ".";
import { ILocation } from "types";

const meta: Meta<typeof LocationPicker> = {
  title: "Organisms/LocationPicker",
  component: LocationPicker,
  tags: ["autodocs"],
  argTypes: {
    coord: {
      control: {
        type: "object"
      },
      description: "거래희망장소 좌표 (위도, 경도)"
    },
    onLocationSelect: {
      action: "onLocationSelect",
      description: "거래희망장소 선택 완료 버튼 클릭 이벤트"
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

export const Register: Story = {
  args: {
    onLocationSelect: (location: ILocation) => console.log(location),
    locationErrorEvent: (message: string) => console.log(message)
  },
  render: (args) => <LocationPicker {...args} />
};
export const Edit: Story = {
  args: {
    coord: {
      lat: 37.5666805,
      lng: 126.9784147
    },
    onLocationSelect: (location: ILocation) => console.log(location),
    locationErrorEvent: (message: string) => console.log(message)
  },
  render: (args) => <LocationPicker {...args} />
};

export default meta;
