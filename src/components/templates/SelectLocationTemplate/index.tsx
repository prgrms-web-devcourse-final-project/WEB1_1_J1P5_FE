import { useState, useMemo } from "react";
import { createPortal } from "react-dom";
import { LocationInputBottomSheet, LocationPicker } from "components/organisms";
import { SelectLocationTemplateWrapper } from "./styled";
import { ICoord, ILocation } from "types";

interface ISelectLocationTemplateProps {
  /** 거래희망장소 좌표 (위도, 경도) */
  coord?: ICoord;
  /** 거래희망장소명 */
  location?: string;
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
  /** 에러 발생 여부 (Input이 비었을 경우 true) */
  isError: boolean;
}

export const SelectLocationTemplate = ({
  coord,
  location,
  onLocationSelect,
  isOpenBottomSheet,
  closeBottomSheet,
  onRegistrationButtonClick,
  locationErrorEvent,
  isError
}: ISelectLocationTemplateProps) => {
  // TODO: 템플릿은 스켈레톤이기 때문에 페이지로 useState를 빼는 게 나을까?
  const [place, setPlace] = useState(location || "");

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
          isError={isError}
        />,
        document.body
      )}
    </SelectLocationTemplateWrapper>
  );
};
