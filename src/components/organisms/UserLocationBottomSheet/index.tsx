import { Text, TextButton } from "components/atoms";
import type { IModalBottomSheetProps } from "components/molecules/ModalBottomSheet";
import { UserLocationBottomSheetWrapper } from "./styled";

interface IUserLocationBottomSheetProps extends IModalBottomSheetProps {
  /** 유저 닉네임 */
  nickname: string;
  /** 나의 동네로 설정된 address */
  myAddress: string;
  /** 현재 위치의 address */
  address?: string;
  /** 동네 인증 버튼 클릭 시 실행될 함수 */
  onSubmitButtonClick?: () => void;
}

export const UserLocationBottomSheet = ({
  nickname,
  myAddress,
  address,
  open,
  onClose,
  onSubmitButtonClick,
}: IUserLocationBottomSheetProps) => {
  return (
    <UserLocationBottomSheetWrapper open={open} onClose={onClose}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
        }}
      >
        {/* // TODO: 선택하신 동네는 나의 동네 선택에서 설정한 동네를 말하는 것 같아서 추후 수정 필요 */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <Text variant='explan_regular' content='선택하신 동네는&nbsp;' />
          <Text variant='explan_bold' content={`${myAddress}`} />
          <Text variant='explan_regular' content='이에요.' />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Text variant='writing_bold' content={`${nickname}님의 현 위치는`} />
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ color: "#344FFF" }}>
              <Text
                variant={address!.length > 15 ? "btn_bold" : "writing_bold"}
                content={`${address}`}
              />
            </div>
            <Text variant='writing_bold' content='이에요!' />
          </div>
        </div>
      </div>

      <TextButton
        text={
          // TODO: location.address 경기도 성남시 수정구 태평동 myAddress 태평동
          myAddress === address?.split(" ").pop()
            ? "네, 여기로 인증할게요"
            : "그래도 여기로 인증할래요"
        }
        onClick={onSubmitButtonClick}
      />
    </UserLocationBottomSheetWrapper>
  );
};
