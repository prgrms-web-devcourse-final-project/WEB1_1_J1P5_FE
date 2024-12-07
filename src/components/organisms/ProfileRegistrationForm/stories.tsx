import type { Meta, StoryObj } from "@storybook/react";
import { ProfileRegistrationForm } from ".";

const meta: Meta<typeof ProfileRegistrationForm> = {
  title: "Organisms/ProfileRegistrationForm",
  component: ProfileRegistrationForm,
  tags: ["autodocs"],
  decorators: (story) => (
    <div style={{ width: "375px", height: "680px", padding: "1rem 0" }}>
      {story()}
    </div>
  ),
};

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: "유저 정보가 없는 상태의 Form입니다.",
      },
    },
  },
  args: {
    onSubmit: (data) => {
      console.log("onSubmit");
      console.log(data);
    },
  },
};

export const HasUser: Story = {
  parameters: {
    docs: {
      description: {
        story: "유저 정보가 있는 상태의 Form입니다.",
      },
    },
  },
  args: {
    user: {
      nickname: "ppyom",
      profile: "https://github.com/ppyom.png",
    },
    onSubmit: (data) => {
      console.log("onSubmit");
      console.log(data);
    },
  },
};

export default meta;
