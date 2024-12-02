import { NeighborhoodAuthForm } from "components/organisms";
import { NeighborhoodAuthTemplateWrapper } from "./styled";
import { ILocation } from "types";

interface ITNeighborhoodAuthTemplateProps {
  /** 동네 인증 버튼 클릭 이벤트 */
  onSubmitButtonClick?: (location: ILocation) => void;
}

export const NeighborhoodAuthTemplate = ({
  onSubmitButtonClick
}: ITNeighborhoodAuthTemplateProps) => {
  return (
    <NeighborhoodAuthTemplateWrapper>
      <NeighborhoodAuthForm onSubmitButtonClick={onSubmitButtonClick} />
    </NeighborhoodAuthTemplateWrapper>
  );
};
