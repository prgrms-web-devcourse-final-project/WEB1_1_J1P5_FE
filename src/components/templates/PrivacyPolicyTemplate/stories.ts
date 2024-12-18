import type { Meta, StoryObj } from "@storybook/react";
import { PrivacyPolicyTemplate } from ".";

const meta: Meta<typeof PrivacyPolicyTemplate> = {
  title: "Templates/PrivacyPolicyTemplate",
  component: PrivacyPolicyTemplate,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export default meta;
