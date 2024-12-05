import { RoundImageWithText } from "components/molecules";
import { CategoryGridWrapper, CategoryItemWrapper } from "./styled";

export interface ICategory {
  title: string;
  imgUrl: string;
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
                handleClick(category.title);
              }}
            ></RoundImageWithText>
          </CategoryItemWrapper>
        );
      })}
    </CategoryGridWrapper>
  );
};
