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
    locationErrorEvent: (message: string) => console.log(message)
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
  // 거래희망장소: 경복궁
  args: {
    coord: {
      lat: 37.58,
      lng: 126.9784147
    },
    isCenterMarkerExist: true,
    locationErrorEvent: (message: string) => console.log(message)
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
    locationErrorEvent: (message: string) => console.log(message)
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

export const ViewLocationWithInfo: Story = {
  args: {
    coord: {
      lat: 37.5666805,
      lng: 126.9784147
    },
    isCenterMarkerExist: false,
    markerInfo: "서울 시청",
    locationErrorEvent: (message: string) => console.log(message)
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
    locationErrorEvent: (message: string) => console.log(message)
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
