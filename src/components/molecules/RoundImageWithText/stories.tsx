import type { Meta, StoryObj } from "@storybook/react";
import { RoundImageWithText } from ".";

const meta: Meta<typeof RoundImageWithText> = {
  title: "Molecules/RoundImageWithText",
  component: RoundImageWithText,
  tags: ["autodocs"],
  decorators: [(story) => <div style={{ maxWidth: "300px" }}>{story()}</div>],
};

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Title",
    imgUrl:
      "https://github.com/user-attachments/assets/5d0f5c37-609e-4e62-8730-4f45a32db5c1",
    onClick: () => console.log("RoundImageWithText 클릭"),
  },
  parameters: {
    docs: {
      description: {
        story: "",
      },
    },
  },
};

export default meta;
