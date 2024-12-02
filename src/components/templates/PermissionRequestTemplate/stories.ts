import type { Meta, StoryObj } from "@storybook/react";
import { LocationIcon, NotificationIcon } from "components/atoms/Icon";
import { PermissionRequestTemplate } from ".";

const meta: Meta<typeof PermissionRequestTemplate> = {
  title: "Templates/PermissionRequestTemplate",
  component: PermissionRequestTemplate,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    permissions: [
      {
        icon: LocationIcon,
        content: "위치",
        desc: "어디에서 사용되는지 작성",
      },
      {
        icon: NotificationIcon,
        content: "알림",
        desc: "어디에서 사용되는지 작성",
      },
    ],
    onClick: () => {
      console.log("확인 버튼 클릭");
    },
  },
};

export default meta;
