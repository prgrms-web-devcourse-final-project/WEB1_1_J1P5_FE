import type { Meta, StoryObj } from "@storybook/react";
import { KebabIcon } from "components/atoms/Icon";
import { PostItem } from ".";

const meta: Meta = {
  title: "Organisms/PostItem",
  tags: ["autodocs"],
  argTypes: {
    onPostItemClick: {
      name: "onClick",
      description: "PostItem 클릭 시 실행될 함수",
    },
    // Image
    imgUrl: {
      name: "Image.imgUrl",
      description: "PostItem의 메인 이미지",
    },
    size: {
      name: "Image.size",
      description: "이미지 사이즈",
      control: "inline-radio",
      options: ["default", "mini"],
    },
    // Title
    title: {
      name: "Title.title",
      description: "타이틀",
    },
    // LocationAndTime
    address: {
      name: "LocationAndTime.address",
      description: "주소(동네)",
    },
    uploadedTime: {
      name: "LocationAndTime.uploadedTime",
      description: "게시일",
    },
    // Price(1)
    price: {
      name: "Price.price",
      description: "판매자가 입력한 가격",
    },
    // RemainingTime
    expiredTime: {
      name: "RemainingTime.expiredTime",
      description: "마감일",
    },
    // Price(2)
    maxPriceTitle: {
      name: "Price.title",
      description: "(Price) Price 제목",
    },
    maxPrice: {
      name: "Price.price",
      description: "(Price) 최고 입찰가",
    },
    // ButtonContainer
    buttonText: {
      name: "ButtonContainer.buttonText",
      description: "텍스트 버튼의 텍스트",
    },
    onTextButtonClick: {
      name: "ButtonContainer.onTextButtonClick",
      description: "텍스트 버튼 클릭시 실행될 함수",
    },
    icon: {
      name: "ButtonContainer.icon",
      description: "아이콘 버튼의 아이콘",
    },
    onIconButtonClick: {
      name: "ButtonContainer.onIconButtonClick",
      description: "아이콘 버튼 클릭 시 실행될 함수",
    },
  },
};

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: "기본적인 PostItem 스타일을 확인할 수 있습니다.",
      },
    },
  },
  args: {
    // Root
    onPostItemClick: () => console.log("PostItem Click"),
    // Image
    imgUrl: "https://github.com/moypp.png",
    size: "default",
    // Title
    title: "Title",
    // LocationAndTime
    address: "신림동",
    uploadedTime: "2024-11-28 11:29:36",
    // Price(1)
    price: 30000,
    // RemainingTime
    expiredTime: "2024-12-10 09:00:00",
    // Price(2)
    maxPriceTitle: "최고 입찰가",
    maxPrice: 45000,
    // ButtonContainer
    buttonText: "받은 후기 보기",
    onTextButtonClick: () => console.log("TextButton 클릭"),
    icon: KebabIcon,
    onIconButtonClick: () => console.log("IconButton 클릭"),
  },
  render: (args) => {
    return (
      <PostItem onClick={args.onPostItemClick}>
        <PostItem.Image imgUrl={args.imgUrl} size={args.size} />
        <PostItem.Container>
          <PostItem.Title title={args.title} />
          <PostItem.LocationAndTime
            address={args.address}
            uploadTime={args.uploadedTime}
          />
          <PostItem.Price price={args.price} />
          <PostItem.RemainingTime expiredTime={args.expiredTime} />
          <PostItem.Price title={args.maxPriceTitle} price={args.maxPrice} />
        </PostItem.Container>
        <PostItem.ButtonContainer
          buttonText={args.buttonText}
          onTextButtonClick={args.onTextButtonClick}
          icon={args.icon}
          onIconButtonClick={args.onIconButtonClick}
        />
      </PostItem>
    );
  },
};

export const Mini: Story = {
  parameters: {
    docs: {
      description: {
        story: "채팅방에서 사용되는 PostItem 형태입니다.",
      },
    },
  },
  args: {
    // Root
    onPostItemClick: () => console.log("PostItem Click"),
    // Image
    imgUrl: "https://github.com/ppyom.png",
    // Title
    title: "Mini Item",
    // Price
    price: 30000,
  },
  render: (args) => {
    return (
      <PostItem onClick={args.onPostItemClick}>
        <PostItem.Image size="mini" imgUrl={args.imgUrl} />
        <PostItem.Container>
          <PostItem.Title title={args.title} />
          <PostItem.Price price={args.price} />
        </PostItem.Container>
      </PostItem>
    );
  },
};

export const PostList: Story = {
  parameters: {
    docs: {
      description: {
        story: "PostList에서 사용되는 PostItem 형태입니다.",
      },
    },
  },
  args: {
    // Root
    onPostItemClick: () => console.log("PostItem Click"),
    // Image
    imgUrl: "https://github.com/ppyom.png",
    // Title
    title: "PostList Item",
    // LocationAndTime
    address: "신림동",
    uploadedTime: "2024-11-28 11:29:36",
    // Price
    price: 30000,
  },
  render: (args) => {
    return (
      <PostItem onClick={args.onPostItemClick}>
        <PostItem.Image imgUrl={args.imgUrl} />
        <PostItem.Container>
          <PostItem.Title title={args.title} />
          <PostItem.LocationAndTime
            address={args.address}
            uploadTime={args.uploadedTime}
          />
          <PostItem.Price price={args.price} />
        </PostItem.Container>
      </PostItem>
    );
  },
};

export default meta;
