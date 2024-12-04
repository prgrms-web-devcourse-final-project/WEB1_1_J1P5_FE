import type { Meta, StoryObj } from "@storybook/react";
import { DetailTemplate } from ".";

const meta: Meta<typeof DetailTemplate> = {
  title: "Templates/DetailTemplate",
  component: DetailTemplate,
  tags: ["autodocs"],
  args: {
    //
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
      coordinate: {
        lat: 37.5666805,
        lng: 126.9784147,
      },
      address: "관악구 신림동",
      location: "보라매공원 CU",
    },
    onLocationClick: () => {
      console.log("거래 희망 장소 클릭!!");
    },
    // 댓글
    comments: [],
    onWriteComment: (comment) => {
      console.log(comment);
    },
    // AuctionControlBar
    bids: [
      { title: "최소 입찰가", price: 35000 },
      { title: "내 입찰가", price: 38000 },
    ],
    buttons: [
      {
        title: "입찰하기",
        onClick: () => {
          console.log("BottomBidBar 오픈");
        },
      },
      {
        title: "취소하기",
        onClick: () => {
          console.log("취소 모달 오픈");
        },
      },
    ],
  },
  decorators: (story) => <div style={{ maxWidth: "375px" }}>{story()}</div>,
};

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export default meta;
