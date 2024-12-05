import { CategoryGrid } from "components/organisms";
import { CategoryTemplateWrapper } from "./styled";
import { ICategory } from "components/organisms/CategoryGrid";

interface ICategoryTemplateProps {
  /** 카테고리 리스트  */
  categories: ICategory[];
  /** 카테고리 클릭 이벤트 */
  onClick: (category: string) => void;
}

export const CategoryTemplate = ({
  categories,
  onClick,
}: ICategoryTemplateProps) => {
  return (
    <CategoryTemplateWrapper>
      <CategoryGrid categories={categories} onClick={onClick}></CategoryGrid>
    </CategoryTemplateWrapper>
  );
};
