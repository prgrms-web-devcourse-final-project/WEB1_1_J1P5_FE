import type { Meta, StoryObj } from "@storybook/react";
import { NavermapsProvider } from "react-naver-maps";
import { LocationPicker } from ".";
import { ICoord } from "types";

const meta: Meta<typeof LocationPicker> = {
  title: "Organisms/LocationPicker",
  component: LocationPicker,
  tags: ["autodocs"],
  argTypes: {
    onLocationSelect: {
      action: "onSubmitButtonClick",
      description: "거래희망장소 선택 완료 버튼 클릭 이벤트"
    }
  },
  decorators: (story) => (
    <NavermapsProvider ncpClientId={import.meta.env.VITE_NAVER_MAP_CLIENT_ID}>
      {story()}
    </NavermapsProvider>
  )
};

type Story = StoryObj<typeof meta>;

export const Register: Story = {
  args: {
    onLocationSelect: (coord: ICoord) => console.log(coord),
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
    onLocationSelect: (coord: ICoord) => console.log(coord),
    locationErrorEvent: (message: string) => console.log(message)
  },
  render: (args) => <LocationPicker {...args} />
};

export default meta;
