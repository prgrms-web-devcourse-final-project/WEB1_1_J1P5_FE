import { RoundImageWithText } from "components/molecules";
import { CategoryGridWrapper, CategoryItemWrapper } from "./styled";
import { Category } from "types";

export interface ICategory {
  title: string;
  imgUrl: string;
  serverType: Category;
}
export interface ICategoryGridWrapperProps {
  categories: ICategory[];
  onClick: (category: string) => void;
}

export const CategoryGrid = ({
  categories,
  onClick,
}: ICategoryGridWrapperProps) => {
  const handleClick = (name: string) => {
    onClick(name);
  };
  return (
    <CategoryGridWrapper>
      {categories.map((category, idx) => {
        return (
          <CategoryItemWrapper key={idx}>
            <RoundImageWithText
              imgUrl={category.imgUrl}
              title={category.title}
              onClick={() => {
                handleClick(category.serverType);
              }}
            ></RoundImageWithText>
          </CategoryItemWrapper>
        );
      })}
    </CategoryGridWrapper>
  );
};
