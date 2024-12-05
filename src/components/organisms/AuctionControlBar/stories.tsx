import type { Meta, StoryObj } from "@storybook/react";
import { AuctionControlBar } from ".";

const meta: Meta = {
  title: "Organisms/AuctionControlBar",
  tags: ["autodocs"],
  argTypes: {
    // bids: {
    //   control: "object",
    //   description: "입찰가 array",
    // },
    // buttons: {
    //   control: "object",
    //   description: "버튼 array",
    // },
  },
};

type Story = StoryObj<typeof meta>;

export const SellerNoBids: Story = {
  render: () => {
    return (
      <AuctionControlBar>
        <AuctionControlBar.BidContainer>
          <AuctionControlBar.Bid title="최저 입찰가" price={30000} />
        </AuctionControlBar.BidContainer>
      </AuctionControlBar>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "판매자 시점 - 아무도 입찰하지 않은 경우",
      },
    },
  },
};

export const SellerWithBids: Story = {
  render: () => {
    return (
      <AuctionControlBar>
        <AuctionControlBar.BidContainer>
          <AuctionControlBar.Bid title="최고 입찰가" price={60000} />
        </AuctionControlBar.BidContainer>
        <AuctionControlBar.ButtonContainer>
          <AuctionControlBar.Button
            text="조기 종료"
            onClick={() => console.log("조기 종료")}
          />
        </AuctionControlBar.ButtonContainer>
      </AuctionControlBar>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "판매자 시점 - 누군가가 입찰한 경우",
      },
    },
  },
};

export const BuyerNoBid: Story = {
  render: () => {
    return (
      <AuctionControlBar>
        <AuctionControlBar.BidContainer>
          <AuctionControlBar.Bid title="최소 입찰가" price={30000} />
        </AuctionControlBar.BidContainer>
        <AuctionControlBar.ButtonContainer>
          <AuctionControlBar.Button
            text="입찰하기"
            onClick={() => console.log("입찰하기")}
          />
        </AuctionControlBar.ButtonContainer>
      </AuctionControlBar>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "구매자 시점 - 본인이 입찰하지 않은 경우",
      },
    },
  },
};

export const BuyerWithBid: Story = {
  render: () => {
    return (
      <AuctionControlBar>
        <AuctionControlBar.BidContainer>
          <AuctionControlBar.Bid title="최소 입찰가" price={30000} />
          <AuctionControlBar.Bid title="나의 입찰가" price={33000} />
        </AuctionControlBar.BidContainer>
        <AuctionControlBar.ButtonContainer>
          <AuctionControlBar.Button
            text="취소"
            onClick={() => console.log("취소")}
          />
          <AuctionControlBar.Button
            text="수정"
            onClick={() => console.log("수정")}
          />
        </AuctionControlBar.ButtonContainer>
      </AuctionControlBar>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "구매자 시점 - 본인이 입찰한 경우",
      },
    },
  },
};

export default meta;
