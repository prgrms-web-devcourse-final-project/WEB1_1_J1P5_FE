import { NeighborhoodAuthForm } from "components/organisms";
import { NeighborhoodAuthTemplateWrapper } from "./styled";
import { ILocation } from "types";

interface INeighborhoodAuthTemplateProps {
  /** 유저 닉네임 */
  nickname: string;
  /** 나의 동네로 설정된 address */
  myAddress: string;
  /** 동네 인증 버튼 클릭 이벤트 */
  onSubmitButtonClick?: (location: ILocation) => void;
  /** 위치 권한 가져오기 실패 시 모달을 실행할 함수 */
  locationErrorEvent: (message: string) => void;
}

export const NeighborhoodAuthTemplate = ({
  nickname,
  myAddress,
  onSubmitButtonClick,
  locationErrorEvent
}: INeighborhoodAuthTemplateProps) => {
  return (
    <NeighborhoodAuthTemplateWrapper>
      <NeighborhoodAuthForm
        nickname={nickname}
        myAddress={myAddress}
        onSubmitButtonClick={onSubmitButtonClick}
        locationErrorEvent={locationErrorEvent}
      />
    </NeighborhoodAuthTemplateWrapper>
  );
};
