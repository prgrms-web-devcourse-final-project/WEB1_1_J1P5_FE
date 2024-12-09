import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchIcon } from "components/atoms/Icon";
import { useTopBarStore } from "stores";
import { Toast } from "../components/atoms";

/**
 * SearchTopBar가 필요한 페이지(search, searchResult)에서 사용하는 hook
 * @param value searchTerm의 기본 값 (default: "")
 */
export const useSearchTopBar = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const { setSearchBar, setRightIcon } = useTopBarStore();
  /**
   * 검색 페이지로 이동하는 함수
   */
  const handleSearch = () => {
    if (!searchTerm.trim()) {
      Toast.show("검색어를 입력해주세요.", 2000);
    }
    if (searchTerm.trim()) {
      navigate(`/search/keyword/${encodeURIComponent(searchTerm)}`);
    }
  };

  useEffect(() => {
    setRightIcon(SearchIcon, handleSearch);
    setSearchBar(
      searchTerm,
      setSearchTerm,
      "검색어를 입력해주세요.",
      handleSearch,
    );
  }, [searchTerm]);

  return {
    setSearchTerm,
  };
};
