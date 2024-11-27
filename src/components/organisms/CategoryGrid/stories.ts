import type { Meta, StoryObj } from "@storybook/react";
import { CategoryGrid, ICategory } from ".";

const meta: Meta<typeof CategoryGrid> = {
  title: "Organisms/CategoryGrid",
  component: CategoryGrid,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof meta>;

const categories: ICategory[] = Array.from({ length: 17 }, (_, idx) => ({
  title: `Category ${idx + 1}`, // title을 Category 1, Category 2, ...로 설정
  imgUrl: `/Default_Img.png`, // imgUrl을 Default_Img_1.png, Default_Img_2.png, ...로 설정
}));
export const Default: Story = {
  args: {
    categories: categories,
    onClick: () => console.log("카테고리 클릭"),
  },
};

export default meta;
