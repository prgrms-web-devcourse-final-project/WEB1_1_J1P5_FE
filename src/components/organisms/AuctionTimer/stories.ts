import type { Meta, StoryObj } from "@storybook/react";
import { AuctionTimer } from ".";

const meta: Meta<typeof AuctionTimer> = {
  title: "Organisms/AuctionTimer",
  component: AuctionTimer,
  tags: ["autodocs"],
  argTypes: {
    targetDate: {
      control: Date
    }
  }
};

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    targetDate: new Date(Date.now() + 1000 * 60 * 60 * 24)
  },
  parameters: {
    docs: {
      description: {
        story: "현재 시간으로부터 24시간 남은 타이머"
      }
    }
  }
};

export const TwoHours: Story = {
  args: {
    targetDate: new Date(Date.now() + 1000 * 60 * 60 * 2)
  },
  parameters: {
    docs: {
      description: {
        story: "현재 시간으로부터 2시간 남은 타이머"
      }
    }
  }
};

export const ThirtyMinutes: Story = {
  args: {
    targetDate: new Date(Date.now() + 1000 * 60 * 30)
  },
  parameters: {
    docs: {
      description: {
        story: "현재 시간으로부터 30분 남은 타이머"
      }
    }
  }
};

export const ThirtySeconds: Story = {
  args: {
    targetDate: new Date(Date.now() + 1000 * 30)
  },
  parameters: {
    docs: {
      description: {
        story: "현재 시간으로부터 30초 남은 타이머"
      }
    }
  }
};

export default meta;

