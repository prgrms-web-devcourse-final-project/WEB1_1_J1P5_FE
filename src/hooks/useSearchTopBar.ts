import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchIcon } from "components/atoms/Icon";
import { useTopBarStore } from "stores";

/**
 * SearchTopBar가 필요한 페이지(search, searchResult)에서 사용하는 hook
 * @param value searchTerm의 기본 값 (default: "")
 */
export const useSearchTopBar = (value: string = "") => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState(value);
  const { setSearchBar, setIcon, setRightClick } = useTopBarStore();

  /**
   * 검색 페이지로 이동하는 함수
   */
  const handleSearch = () => {
    console.log(searchTerm);
    navigate(`/search/${searchTerm}`);
  };

  useEffect(() => {
    setSearchBar(searchTerm, setSearchTerm);
    setIcon(SearchIcon);
    setRightClick(handleSearch);
  }, []);

  return {
    setSearchTerm,
  };
};
