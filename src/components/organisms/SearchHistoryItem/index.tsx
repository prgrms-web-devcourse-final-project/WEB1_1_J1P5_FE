import { IconButton } from "components/atoms";
import { HistoryIcon, XIcon } from "components/atoms/Icon";
import { IconWithText } from "components/molecules";
import { SearchHistoryItemWrapper } from "./styled";

interface ISearchHistoryItemProps {
  /** 검색어 */
  searchTerm: string;
  /** 검색어 삭제 버튼 클릭 이벤트 */
  onDeleteButtonClick?: () => void;
  /** 검색어 클릭 이벤트 */
  onHistoryItemClick?: () => void;
}

export const SearchHistoryItem = ({
  searchTerm,
  onDeleteButtonClick,
  onHistoryItemClick
}: ISearchHistoryItemProps) => {
  return (
    <SearchHistoryItemWrapper>
      <IconWithText onClick={onHistoryItemClick}>
        <IconWithText.Icon icon={HistoryIcon} />
        <IconWithText.Content content={searchTerm} />
      </IconWithText>
      <IconButton
        icon={XIcon}
        onClick={onDeleteButtonClick}
        backgroundColor="transparent"
      />
    </SearchHistoryItemWrapper>
  );
};

