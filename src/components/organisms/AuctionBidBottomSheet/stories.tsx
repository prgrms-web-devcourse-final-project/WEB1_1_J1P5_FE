import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { AuctionBidBottomSheet } from ".";

const meta: Meta<typeof AuctionBidBottomSheet> = {
  title: "Organisms/AuctionBidBottomSheet",
  component: AuctionBidBottomSheet,
  tags: ["autodocs"],
  argTypes: {
    open: {
      control: {
        type: "boolean"
      }
    },
    minPrice: {
      control: {
        type: "number"
      }
    },
    beforePrice: {
      control: {
        type: "number"
      }
    }
  },
  decorators: [(story) => <div style={{ height: "300px" }}>{story()}</div>],
  render: (args) => {
    const Component = () => {
      const [open, setOpen] = useState(args.open);
      const [price, setPrice] = useState("");
      const handleBid = () => {
        if (!price) {
          console.log(`입찰가를 입력해주세요.`);
        }
        if (parseInt(price) <= args.minPrice) {
          console.log(`최소 입찰가보다 낮은 입찰가는 입력할 수 없어요.`);
        } else {
          console.log(`입찰가 ${price}원으로 입찰 완료!`);
        }
      };
      return (
        <>
          <button onClick={() => setOpen(true)}>Open</button>
          <AuctionBidBottomSheet
            open={open}
            onClose={() => setOpen(false)}
            price={price}
            setPrice={setPrice}
            beforePrice={args.beforePrice}
            minPrice={args.minPrice}
            onBid={handleBid}
          />
        </>
      );
    };
    return <Component />;
  }
};

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    open: true,
    minPrice: 10000
  }
};

export const HasBeforePrice: Story = {
  args: {
    open: true,
    minPrice: 10000,
    beforePrice: 15000
  }
};

export default meta;

