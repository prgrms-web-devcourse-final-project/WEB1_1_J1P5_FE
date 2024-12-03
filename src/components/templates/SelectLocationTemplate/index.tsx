import { LocationPicker } from "components/organisms";
import { SelectLocationTemplateWrapper } from "./styled";
import { ICoord, ILocation } from "types";

interface ISelectLocationTemplateProps {
  /** 거래희망장소 좌표 (위도, 경도) */
  coord?: ICoord;
  /** 거래희망장소 선택 완료 버튼 클릭 이벤트 */
  onLocationSelect: (selectedLocation: ILocation) => void;
  /** 위치 권한 가져오기 실패 시 모달을 실행할 함수 */
  locationErrorEvent: (message: string) => void;
}

export const SelectLocationTemplate = ({
  coord,
  onLocationSelect,
  locationErrorEvent
}: ISelectLocationTemplateProps) => {
  return (
    <SelectLocationTemplateWrapper>
      <LocationPicker
        coord={coord}
        onLocationSelect={onLocationSelect}
        locationErrorEvent={locationErrorEvent}
      />
    </SelectLocationTemplateWrapper>
  );
};
