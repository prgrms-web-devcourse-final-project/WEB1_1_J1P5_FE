import React, { useCallback, useState } from "react";
import { Text, TextButton } from "components/atoms";
import { Map } from "components/organisms";
import { LocationPickerWrapper, PaddingWrapper } from "./styled";
import { ICoord, ILocation } from "types";
import { useReverseGeocode } from "hooks";

interface ILocationPickerProps {
  /** 거래희망장소 좌표 (위도, 경도) */
  coord?: ICoord;
  /** 거래희망장소 선택 완료 버튼 클릭 이벤트 */
  onLocationSelect: (selectedLocation: ILocation) => void;
  /** 위치 권한 가져오기 실패 시 모달을 실행할 함수 */
  locationErrorEvent: (message: string) => void;
}
export const LocationPicker: React.MemoExoticComponent<
  ({
    coord,
    onLocationSelect,
    locationErrorEvent
  }: ILocationPickerProps) => JSX.Element
> = React.memo(
  ({ coord, onLocationSelect, locationErrorEvent }: ILocationPickerProps) => {
    const [centerCoord, setCenterCoord] = useState<any>(null);
    const { searchCoordinateToAddress } = useReverseGeocode();

    const handleButtonClick = useCallback(() => {
      if (centerCoord) {
        const iCoord: ICoord = {
          lat: centerCoord.lat(),
          lng: centerCoord.lng()
        } as const;

        searchCoordinateToAddress(centerCoord)
          .then((address: string) => {
            onLocationSelect({ coord: iCoord, address });
          })
          .catch((error: Error) => {
            console.error("Failed to fetch address:", error);
            // TODO: 에러 처리 로직 수정 필요
            locationErrorEvent(
              "주소를 가져오는데 실패했습니다. 다시 시도해주세요."
            );
          });
      }
    }, [
      centerCoord,
      onLocationSelect,
      searchCoordinateToAddress,
      locationErrorEvent
    ]);

    return (
      <LocationPickerWrapper>
        <PaddingWrapper>
          <Text
            content="이웃과 만나서 거래하고 싶은 장소를 선택해주세요."
            variant="h5"
          />
          <Text content="만나서 거래할 때는 누구나 찾기 쉬운 공공장소가 좋아요" />
        </PaddingWrapper>
        <Map
          coord={coord}
          isCenterMarkerExist
          setCenterCoord={setCenterCoord}
          locationErrorEvent={locationErrorEvent}
        />
        <PaddingWrapper>
          <TextButton text="선택 완료" onClick={handleButtonClick} />
        </PaddingWrapper>
      </LocationPickerWrapper>
    );
  }
);

LocationPicker.displayName = "LocationPicker";
