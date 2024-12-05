import { ICategory } from "components/organisms/CategoryGrid";
import { CategoryTemplate } from "components/templates";
import { useNavigate } from "react-router-dom";

export const CategoryPage = () => {
  const navigate = useNavigate();
  const categories: ICategory[] = Array.from({ length: 24 }, (_, idx) => ({
    title: `Category${idx + 1}`, // title을 Category 1, Category 2, ...로 설정
    imgUrl: `/Default_Img.png`, // imgUrl을 Default_Img_1.png, Default_Img_2.png, ...로 설정
  }));
  const handleCategoryButton = (category: string) => {
    navigate(`/search/category/${category}`);
  };
  return (
    <CategoryTemplate
      categories={categories}
      onClick={handleCategoryButton}
    ></CategoryTemplate>
  );
};
