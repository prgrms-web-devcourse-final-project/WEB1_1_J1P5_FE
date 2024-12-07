import { ICategory } from "components/organisms/CategoryGrid";
import { CategoryTemplate } from "components/templates";
import { CATEGORIES } from "constants/categories";
import { useNavigate } from "react-router-dom";

export const CategoryPage = () => {
  const navigate = useNavigate();

  const categories: ICategory[] = CATEGORIES.map((category) => ({
    title: category.name,
    imgUrl: `/Default_Img.png`,
    serverType: category.code,
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
