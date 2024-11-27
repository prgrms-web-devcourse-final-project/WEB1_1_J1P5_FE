import type { Meta, StoryObj } from "@storybook/react";
import { IPermission, PermissionList } from ".";
import { LocationIcon } from "components/atoms/Icon";

const meta: Meta<typeof PermissionList> = {
  title: "Organisms/PermissionList",
  component: PermissionList,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof meta>;

const Permission: IPermission = {
  icon: LocationIcon,
  content: "위치",
  desc: "어디에서 사용되는지 작성",
};
const testArgs: { permissions: IPermission[]; onClick: () => void } = {
  permissions: [Permission, Permission, Permission],
  onClick: () => {
    console.log("확인 버튼 클릭");
  },
};
export const Default: Story = {
  args: testArgs,
};

export default meta;
