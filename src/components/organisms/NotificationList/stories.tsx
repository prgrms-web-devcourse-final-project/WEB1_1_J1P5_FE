import type { Meta, StoryObj } from "@storybook/react";
import { DEFAULT_IMG_PATH } from "constants/imgPath";
import { NotificationList } from ".";

const meta: Meta<typeof NotificationList> = {
  title: "Organisms/NotificationList",
  component: NotificationList,
  tags: ["autodocs"],
  decorators: (story) => <div style={{ maxWidth: "375px" }}>{story()}</div>,
  args: {
    notifications: [
      {
        title: "This is title.",
        desc: "This is description.",
        imgUrl: DEFAULT_IMG_PATH,
        onClick: () => {
          console.log("Default 클릭!");
        },
      },
      {
        title: "This is title.",
        desc: "This is description. This is description. This is description. This is description. This is description. This is description. This is description. This is description. This is description.",
        onClick: () => {
          console.log("LongDescription 클릭!");
        },
      },
      {
        title: "This is title.",
        desc: "This is description.",
        imgUrl: "https://github.com/ppyom.png",
        onClick: () => {
          console.log("HasImage 클릭!");
        },
      },
    ],
  },
};

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export default meta;
