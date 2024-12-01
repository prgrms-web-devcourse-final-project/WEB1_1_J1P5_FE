/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { TransactionOverview } from ".";
import { IPost, PostItemType } from "../PostList";
import { DEFAULT_IMG_PATH } from "constants/imgPath";

const meta: Meta<typeof TransactionOverview> = {
  title: "Organisms/TransactionOverview",
  component: TransactionOverview,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "radio",
      options: ["selling", "buying", "completed"],
    },
  },
};

type Story = StoryObj<typeof TransactionOverview>; // 컴포넌트 타입 명시

const tempPosts: IPost[] = Array.from({ length: 5 }, (_, index) => ({
  productId: index + 1,
  imgUrl: DEFAULT_IMG_PATH,
  title: `물품 ${index + 1}`,
  price: 3500 + index * 1000,
  address: "신림동",
  uploadTime: `2024-11-28 ${11 + index}:00:00`,
  onClick: () => {
    console.log(`클릭 ${index + 1}`);
  },
  expiredTime: `2024-12-29 ${11 + index}:00:00`,
  maxPrice: 30000,
  onTextButtonClick: () => {
    console.log("Text Button 클릭");
  },
  onIconButtonClick: () => {
    console.log("Icon Button 클릭");
  },
}));

export const SellHistory: Story = {
  args: {
    menus: ["판매중", "거래완료"],
    posts: tempPosts,
    type: "selling",
  },
  render: (args) => {
    const [type, setType] = useState<PostItemType>(args.type);

    useEffect(() => {
      setType(args.type);
    }, [args.type]);

    const handleTabClick = (tab: string) => {
      const newType = tab === "판매중" ? "selling" : "completed";
      setType(newType); // 상태 업데이트
      console.log(`탭 클릭: ${tab}, type: ${newType}`);
    };

    return (
      <TransactionOverview
        {...args}
        type={type} // 현재 상태의 type 전달
        onClick={handleTabClick} // 탭 클릭 핸들러 설정
      />
    );
  },
};

export const BuyHistory: Story = {
  args: {
    menus: ["입찰중", "거래완료"],
    posts: tempPosts,
    type: "buying",
  },
  render: (args) => {
    const [type, setType] = useState<PostItemType>(args.type);

    useEffect(() => {
      setType(args.type);
    }, [args.type]);

    const handleTabClick = (tab: string) => {
      const newType = tab === "입찰중" ? "buying" : "completed";
      setType(newType); // 상태 업데이트
      console.log(`탭 클릭: ${tab}, type: ${newType}`);
    };

    return (
      <TransactionOverview
        {...args}
        type={type} // 현재 상태의 type 전달
        onClick={handleTabClick} // 탭 클릭 핸들러 설정
      />
    );
  },
};
export default meta;
