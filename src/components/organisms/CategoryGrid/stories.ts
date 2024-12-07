import type { Meta, StoryObj } from "@storybook/react";
import { CategoryGrid, ICategory } from ".";
import { CATEGORIES } from "constants/categories";

const meta: Meta<typeof CategoryGrid> = {
  title: "Organisms/CategoryGrid",
  component: CategoryGrid,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof meta>;

const categories: ICategory[] = CATEGORIES.map((category) => ({
  title: category.name,
  imgUrl: `/Default_Img.png`,
  serverType: category.code,
}));
export const Default: Story = {
  args: {
    categories: categories,
    onClick: () => console.log("카테고리 클릭"),
  },
};

export default meta;
