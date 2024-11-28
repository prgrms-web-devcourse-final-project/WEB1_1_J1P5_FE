import type { Meta, StoryObj } from "@storybook/react";
import { NavermapsProvider } from "react-naver-maps";
import { Map } from ".";

const meta: Meta<typeof Map> = {
  title: "Organisms/Map",
  component: Map,
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
    onSubmitButtonClick: {
      action: "onSubmitButtonClick",
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

export const RegisterLocation: Story = {
  args: {
    isCenterMarkerExist: true,
    onSubmitButtonClick: (coord) => {
      console.log(coord);
    }
  },
  parameters: {
    docs: {
      description: {
        story:
          "거래 희망 장소 등록 지도로, isCenterMarkerExist(true)와 onSubmitButtonClick이 포함됩니다."
      }
    }
  }
};

export const EditLocation: Story = {
  args: {
    coord: {
      lat: 37.5666805,
      lng: 126.9784147
    },
    isCenterMarkerExist: true,
    onSubmitButtonClick: (coord) => {
      console.log(coord);
    }
  },
  parameters: {
    docs: {
      description: {
        story:
          "거래 희망 장소 수정 지도로, coord, isCenterMarkerExist(true)와 onSubmitButtonClick이 포함됩니다."
      }
    }
  }
};
export const ViewLocation: Story = {
  args: {
    coord: {
      lat: 37.5666805,
      lng: 126.9784147
    },
    isCenterMarkerExist: false,
    onSubmitButtonClick: (coord) => {
      console.log(coord);
    }
  },
  parameters: {
    docs: {
      description: {
        story:
          "거래 희망 장소 조회 지도로, coord, isCenterMarkerExist(false)가 포함됩니다."
      }
    }
  }
};
export const VerifyNeighborhood: Story = {
  args: {
    isCenterMarkerExist: false,
    onSubmitButtonClick: (coord) => {
      console.log(coord);
    }
  },
  parameters: {
    docs: {
      description: {
        story:
          "동네 인증하기 지도로, isCenterMarkerExist(false)와 onSubmitButtonClick이 포함됩니다."
      }
    }
  }
};

export default meta;
