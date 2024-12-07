import type { Meta, StoryObj } from "@storybook/react";
import { ProfileRegistrationTemplate } from ".";

const meta: Meta<typeof ProfileRegistrationTemplate> = {
  title: "Templates/ProfileRegistrationTemplate",
  component: ProfileRegistrationTemplate,
  tags: ["autodocs"],
  decorators: (story) => (
    <div style={{ width: "375px", height: "600px", display: "flex" }}>
      {story()}
    </div>
  ),
};

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onSubmit: async (data) => {
      console.log("onSubmit");
      console.log(data);
    },
  },
};

export const HasUser: Story = {
  args: {
    user: {
      nickname: "ppyom",
      profile: "https://github.com/ppyom.png",
    },
    onSubmit: async (data) => {
      console.log("onSubmit");
      console.log(data);
    },
  },
};
export default meta;
