import { useState, useMemo } from "react";
import { createPortal } from "react-dom";
import { LocationInputBottomSheet, LocationPicker } from "components/organisms";
import { SelectLocationTemplateWrapper } from "./styled";
import { ICoord, ILocation } from "types";

interface ISelectLocationTemplateProps {
  /** 거래희망장소 좌표 (위도, 경도) */
  coord?: ICoord;
  /** 거래희망장소 선택 완료 버튼 클릭 이벤트 */
  onLocationSelect: (selectedLocation: ILocation) => void;
  /** 바텀 시트 open 여부 */
  isOpenBottomSheet: boolean;
  /** 바텀 시트 close 함수 */
  closeBottomSheet: () => void;
  /** 거래희망장소 등록 버튼 클릭 시 실행될 함수 */
  onRegistrationButtonClick: (place: string) => void;
  /** 위치 권한 가져오기 실패 시 모달을 실행할 함수 */
  locationErrorEvent: (message: string) => void;
}

export const SelectLocationTemplate = ({
  coord,
  onLocationSelect,
  isOpenBottomSheet,
  closeBottomSheet,
  onRegistrationButtonClick,
  locationErrorEvent
}: ISelectLocationTemplateProps) => {
  const [place, setPlace] = useState("");

  const memoizedLocationPicker = useMemo(
    () => (
      <LocationPicker
        coord={coord}
        onLocationSelect={onLocationSelect}
        locationErrorEvent={locationErrorEvent}
      />
    ),
    [coord, onLocationSelect, locationErrorEvent]
  );

  return (
    <SelectLocationTemplateWrapper>
      {memoizedLocationPicker}
      {createPortal(
        <LocationInputBottomSheet
          open={isOpenBottomSheet}
          onClose={closeBottomSheet}
          place={place}
          setPlace={setPlace}
          onRegistrationButtonClick={() => onRegistrationButtonClick(place)}
        />,
        document.body
      )}
    </SelectLocationTemplateWrapper>
  );
};
