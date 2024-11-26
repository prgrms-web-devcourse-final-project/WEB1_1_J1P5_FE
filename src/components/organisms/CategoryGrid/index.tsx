import { RoundImageWithText } from "components/molecules";
import { CategoryGridWrapper } from "./styled";

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
          <RoundImageWithText
            key={idx}
            imgUrl={category.imgUrl}
            title={category.title}
            onClick={() => {
              handleClick(category.title);
            }}
          ></RoundImageWithText>
        );
      })}
    </CategoryGridWrapper>
  );
};
