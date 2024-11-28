import type { Meta, StoryObj } from "@storybook/react";
import { NavermapsProvider } from "react-naver-maps";
import { LocationMap } from ".";

const meta: Meta<typeof LocationMap> = {
  title: "Organisms/LocationMap",
  component: LocationMap,
  tags: ["autodocs"],
  argTypes: {
    coord: {
      control: {
        type: "object"
      },
      defaultValue: {
        lat: 37.5666805,
        lng: 126.9784147
      },
      description: "좌표 (위도, 경도)"
    },
    location: {
      control: "text"
    },
    onClick: {
      action: "onClick",
      description: "최종 좌표를 처리하는 버튼의 클릭 이벤트 핸들러"
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
  args: {
    coord: {
      lat: 37.5666805,
      lng: 126.9784147
    },
    location: "보라매공원 CU",
    onClick: () => {
      console.log("LocationMap 클릭!");
    }
  }
};

export default meta;

