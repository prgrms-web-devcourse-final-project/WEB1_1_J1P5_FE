import { SearchTemplate } from "components/templates";
import { useSearchTopBar } from "hooks";
import { useNavigate } from "react-router-dom";

export const SearchPage = () => {
  const navigate = useNavigate();
  useSearchTopBar();

  const handleCategoryButton = () => {
    navigate("/category");
  };
  return (
    <SearchTemplate
      searchTerms={[]}
      onCategoryBtnClick={handleCategoryButton}
      onAllDeleteButtonClick={() => {}}
      onDeleteButtonClick={() => {}}
      onHistoryItemClick={() => {}}
    ></SearchTemplate>
  );
};
