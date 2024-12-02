import { useEffect } from "react";
import { useSearchTopBar } from "hooks";
import { useParams } from "react-router-dom";

export const SearchResultPage = () => {
  const { query } = useParams<{ query: string }>();
  const { setSearchTerm } = useSearchTopBar(query);

  useEffect(() => {
    setSearchTerm(query!);
  }, [query]);

  return <>SearchResultPage</>;
};
