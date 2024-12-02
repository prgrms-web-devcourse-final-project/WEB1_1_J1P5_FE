import type { Meta, StoryObj } from "@storybook/react";
import { LoginTemplate } from ".";

const meta: Meta<typeof LoginTemplate> = {
  title: "Templates/LoginTemplate",
  component: LoginTemplate,
  tags: ["autodocs"],
  decorators: (story) => (
    <div style={{ maxWidth: "375px", height: "600px", display: "flex" }}>
      {story()}
    </div>
  ),
};

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onNaverLoginClick: () => console.log("네이버 로그인"),
    onKakaoLoginClick: () => console.log("카카오 로그인"),
  },
};

export default meta;
