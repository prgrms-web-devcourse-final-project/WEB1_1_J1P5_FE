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
}

export const LocationInputBottomSheet = ({
  open,
  onClose,
  place,
  setPlace,
  onRegistrationButtonClick,
}: ILocationInputBottomSheetProps) => {
  return (
    <LocationInputBottomSheetWrapper open={open} onClose={onClose}>
      <Text variant="h5" content="선택한 곳의 장소명을 입력해주세요" />
      <Input
        value={place}
        setValue={setPlace}
        placeholder="예) 미금역 8번 출구 앞, 역전우동 앞"
      />
      <TextButton text="거래 장소 등록" onClick={onRegistrationButtonClick} />
    </LocationInputBottomSheetWrapper>
  );
};
