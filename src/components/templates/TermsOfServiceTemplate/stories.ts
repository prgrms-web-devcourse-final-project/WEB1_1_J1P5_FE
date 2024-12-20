import type { Meta, StoryObj } from "@storybook/react";
import { TermsOfServiceTemplate } from ".";

const meta: Meta<typeof TermsOfServiceTemplate> = {
  title: "Templates/TermsOfServiceTemplate",
  component: TermsOfServiceTemplate,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export default meta;
