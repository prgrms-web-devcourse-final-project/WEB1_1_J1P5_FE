import { useState } from "react";
import { Text, TextButton } from "components/atoms";
import { Map } from "components/organisms";
import { LocationPickerWrapper } from "./styled";
import { ICoord } from "types";

interface ILocationPickerProps {
  /** 거래희망장소 좌표 (위도, 경도) */
  coord?: ICoord;
  /** 거래희망장소 선택 완료 버튼 클릭 이벤트 */
  onLocationSelect: (selectedCoord: ICoord) => void;
  /** 위치 권한 가져오기 실패 시 모달을 실행할 함수 */
  locationErrorEvent: (message: string) => void;
}

export const LocationPicker = ({
  coord,
  onLocationSelect,
  locationErrorEvent
}: ILocationPickerProps) => {
  const [centerCoord, setCenterCoord] = useState<any>(null);

  const handleButtonClick = () => {
    if (centerCoord) {
      const iCoord = {
        lat: centerCoord.lat(),
        lng: centerCoord.lng()
      } as const;

      onLocationSelect(iCoord);
    }
  };

  return (
    <LocationPickerWrapper>
      <Text
        content={`이웃과 만나서 거래하고 싶은 장소를 선택해주세요.`}
        variant="h5"
      />
      <Text content="만나서 거래할 때는 누구나 찾기 쉬운 공공장소가 좋아요" />
      <Map
        coord={coord}
        isCenterMarkerExist
        setCenterCoord={setCenterCoord}
        locationErrorEvent={locationErrorEvent}
      />
      <TextButton text="선택 완료" onClick={handleButtonClick} />
    </LocationPickerWrapper>
  );
};
