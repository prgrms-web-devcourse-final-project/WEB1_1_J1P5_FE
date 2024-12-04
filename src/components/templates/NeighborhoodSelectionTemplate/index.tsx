import { TextButton } from "components/atoms";
import { NeighborhoodSelectionList } from "components/organisms";
import { NeighborhoodSelectionTemplateWrapper } from "./styled";

interface INeighborhoodSelectionTemplateProps {
  /** 동네 목록 */
  neighborhoods: string[];
  /** 동네 클릭 시 실행할 함수 */
  onNeighborhoodClick: (neighborhood: string) => void;
  /** 현재 위치로 찾기 클릭 시 실행할 함수 */
  onFindCurrentLocationClick: () => void;
}

export const NeighborhoodSelectionTemplate = ({
  neighborhoods,
  onNeighborhoodClick,
  onFindCurrentLocationClick,
}: INeighborhoodSelectionTemplateProps) => {
  return (
    <NeighborhoodSelectionTemplateWrapper>
      <TextButton
        text="현재 위치로 찾기"
        onClick={onFindCurrentLocationClick}
      />
      <NeighborhoodSelectionList
        neighborhoods={neighborhoods}
        onClick={onNeighborhoodClick}
      />
    </NeighborhoodSelectionTemplateWrapper>
  );
};
