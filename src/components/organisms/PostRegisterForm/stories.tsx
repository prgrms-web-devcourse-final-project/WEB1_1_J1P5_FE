import type { Meta, StoryObj } from "@storybook/react";
import { PostRegisterForm } from ".";
import type { Category } from "types";

const meta: Meta<typeof PostRegisterForm> = {
  title: "Organisms/PostRegisterForm",
  component: PostRegisterForm,
  tags: ["autodocs"],
  decorators: (story) => (
    <div style={{ width: "375px", height: "680px", padding: "1rem 0" }}>
      {story()}
    </div>
  )
};

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: "product 정보가 없는 상태의 Form입니다."
      }
    }
  },
  args: {
    onSubmit: (data) => {
      console.log("onSubmit");
      console.log(data);
    },
    onClick: () => {
      return "보라매공원 CU";
    }
  }
};

export const HasProduct: Story = {
  parameters: {
    docs: {
      description: {
        story: "product 정보가 있는 상태의 Form입니다."
      }
    }
  },
  args: {
    productId: 1,
    postForm: {
      category: "디지털/가전" as Category,
      title: "1번 product입니다.",
      content: "상태 너무 좋습니다. 강추합니다.",
      minimumPrice: "30000",
      expiredTime: "3일 후",
      location: "보라매공원 CU 옆 떡볶이집",
      imgUrls: [
        { url: "https://github.com/ppyom.png", base64Url: "", file: undefined },
        { url: "https://github.com/ppyom.png", base64Url: "", file: undefined },
        { url: "https://github.com/moypp.png", base64Url: "", file: undefined }
      ]
    },
    onSubmit: (data) => {
      console.log("onSubmit");
      console.log(data);
    },
    onClick: () => {
      return "보라매공원 CU";
    }
  }
};

export default meta;
