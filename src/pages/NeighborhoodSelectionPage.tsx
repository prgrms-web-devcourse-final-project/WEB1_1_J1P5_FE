import { useEffect } from "react";
import { NeighborhoodSelectionTemplate } from "components/templates";
import { useTopBarStore } from "stores";
import { SearchIcon } from "components/atoms/Icon";
import { useNeighborhoodSelection } from "hooks";

export const NeighborhoodSelectionPage = () => {
  const { setSearchBar, setRightIcon } = useTopBarStore();
  const {
    term,
    setTerm,
    neighborhoods,
    handleGetMyNeighborhood,
    handleSearchNeighborhoods,
    handleClickNeighborhood,
  } = useNeighborhoodSelection();

  /**
   * 동네 클릭 시 실행될 함수
   * @param neighborhood 동네
   */
  const handleNeighborhoodClick = (neighborhood: string) => {
    handleClickNeighborhood(neighborhood);
  };

  useEffect(() => {
    setSearchBar(
      term,
      setTerm,
      "동네를 입력해주세요.",
      handleSearchNeighborhoods,
    );
    setRightIcon(SearchIcon, handleSearchNeighborhoods);
  }, [term]);

  return (
    <>
      <NeighborhoodSelectionTemplate
        neighborhoods={neighborhoods}
        onNeighborhoodClick={handleNeighborhoodClick}
        onFindCurrentLocationClick={() => handleGetMyNeighborhood()}
      />
    </>
  );
};
