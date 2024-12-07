import { Input, Text, TextButton } from "components/atoms";
import type { IModalBottomSheetProps } from "components/molecules/ModalBottomSheet";
import { LocationInputBottomSheetWrapper } from "./styled";

interface ILocationInputBottomSheetProps extends IModalBottomSheetProps {
  /** 장소 텍스트 */
  place: string;
  /** 장소 텍스트 설정 함수 */
  setPlace: (value: string) => void;
  /** 거래 장소 등록 버튼 클릭 시 실행될 함수 */
  onRegistrationButtonClick: () => void;
  /** 에러 발생 여부 (Input이 비었을 경우 true) */
  isError: boolean;
}

export const LocationInputBottomSheet = ({
  open,
  onClose,
  place,
  setPlace,
  onRegistrationButtonClick,
  isError
}: ILocationInputBottomSheetProps) => {
  return (
    <LocationInputBottomSheetWrapper open={open} onClose={onClose}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          width: "100%"
        }}
      >
        <Text
          variant="title_bold"
          content="선택한 곳의 장소명을 입력해주세요"
        />
        <Input
          value={place}
          setValue={setPlace}
          placeholder="예) 미금역 8번 출구 앞, 역전우동 앞"
        />
        {isError && (
          <div style={{ color: "#FF2E4D" }}>
            <Text variant="explan_regular" content="장소를 입력해주세요!" />
          </div>
        )}
      </div>

      <TextButton text="거래 장소 등록" onClick={onRegistrationButtonClick} />
    </LocationInputBottomSheetWrapper>
  );
};
