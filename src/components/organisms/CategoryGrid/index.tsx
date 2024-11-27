import { RoundImageWithText } from "components/molecules";
import { CategoryGridWrapper, CategoryItemWrapper } from "./styled";

export interface ICategory {
  title: string;
  imgUrl: string;
}
export interface ICategoryGridWrapperProps {
  categories: ICategory[];
  onClick: () => void;
}

export const CategoryGrid = ({
  categories,
  onClick,
}: ICategoryGridWrapperProps) => {
  const handleClick = (name: string) => {
    console.log(name);
    onClick();
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
