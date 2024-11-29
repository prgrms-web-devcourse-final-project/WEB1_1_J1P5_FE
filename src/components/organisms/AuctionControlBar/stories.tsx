import type { Meta, StoryObj } from "@storybook/react";
import { AuctionControlBar } from ".";

const meta: Meta = {
  title: "Organisms/AuctionControlBar",
  tags: ["autodocs"],
  argTypes: {
    bids: {
      control: "object",
      description: "입찰가 array"
    },
    buttons: {
      control: "object",
      description: "버튼 array"
    }
  }
};

type Story = StoryObj<typeof meta>;

export const SellerNoBids: Story = {
  args: {
    bids: [
      {
        title: "최저 입찰가",
        price: 30000
      }
    ]
  },
  render: (args) => {
    return (
      <AuctionControlBar>
        <AuctionControlBar.BidContainer bids={args.bids} />
      </AuctionControlBar>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "판매자 시점 - 아무도 입찰하지 않은 경우"
      }
    }
  }
};

export const SellerWithBids: Story = {
  args: {
    bids: [
      {
        title: "최고 입찰가",
        price: 60000
      }
    ],
    buttons: [
      {
        title: "조기 종료",
        onClick: () => {
          console.log("조기 종료");
        }
      }
    ]
  },
  render: (args) => {
    return (
      <AuctionControlBar>
        <AuctionControlBar.BidContainer bids={args.bids} />
        <AuctionControlBar.ButtonContainer buttons={args.buttons} />
      </AuctionControlBar>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "판매자 시점 - 누군가가 입찰한 경우"
      }
    }
  }
};

export const BuyerNoBid: Story = {
  args: {
    bids: [
      {
        title: "최소 입찰가",
        price: 30000
      }
    ],
    buttons: [
      {
        title: "입찰하기",
        onClick: () => {
          console.log("입찰하기");
        }
      }
    ]
  },
  render: (args) => {
    return (
      <AuctionControlBar>
        <AuctionControlBar.BidContainer bids={args.bids} />
        <AuctionControlBar.ButtonContainer buttons={args.buttons} />
      </AuctionControlBar>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "구매자 시점 - 본인이 입찰하지 않은 경우"
      }
    }
  }
};

export const BuyerWithBid: Story = {
  args: {
    bids: [
      {
        title: "최소 입찰가",
        price: 30000
      },
      {
        title: "나의 입찰가",
        price: 33000
      }
    ],
    buttons: [
      {
        title: "취소",
        onClick: () => {
          console.log("취소");
        }
      },
      {
        title: "수정",
        onClick: () => {
          console.log("수정");
        }
      }
    ]
  },
  render: (args) => {
    return (
      <AuctionControlBar>
        <AuctionControlBar.BidContainer bids={args.bids} />
        <AuctionControlBar.ButtonContainer buttons={args.buttons} />
      </AuctionControlBar>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "구매자 시점 - 본인이 입찰한 경우"
      }
    }
  }
};

export default meta;

