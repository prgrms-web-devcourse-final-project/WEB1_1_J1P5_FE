import { NavermapsProvider } from "react-naver-maps";
import type { Meta, StoryObj } from "@storybook/react";
import { DetailTemplate } from ".";

const meta: Meta<typeof DetailTemplate> = {
  title: "Templates/DetailTemplate",
  component: DetailTemplate,
  tags: ["autodocs"],
  decorators: (story) => (
    <NavermapsProvider
      ncpClientId={import.meta.env.VITE_NAVER_MAP_CLIENT_ID}
      submodules={["geocoder"]}
    >
      <div style={{ maxWidth: "375px" }}>{story()}</div>
    </NavermapsProvider>
  ),
};

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    productId: 1,
    images: [
      "https://github.com/moypp.png",
      "https://github.com/ppyom.png",
      "https://github.com/moypp.png",
      "https://github.com/ppyom.png",
    ],
    //
    expiredTime: "2024-12-10 11:00:00",
    //
    title: "물품 1",
    category: "카테고리",
    uploadTime: new Date().toString(),
    content: "물품의 설명입니다.",
    // 판매자 정보
    seller: {
      id: 1,
      name: "ppyom",
      image: "https://github.com/ppyom.png",
    },
    // 거래 희망 장소
    productLocation: {
      longitude: 126.9784147,
      latitube: 37.5666805,
      address: "관악구 신림동",
      location: "보라매공원 CU",
    },
    minimumPrice: 35000,
    hasBuyer: false,
    isEarly: false,
    myPrice: 36000,
    // 댓글
    comments: [],
    onCancel: () => {},
    onEarlyClosing: () => {},
  },
  render: (args) => <DetailTemplate {...args} />,
};

export default meta;
