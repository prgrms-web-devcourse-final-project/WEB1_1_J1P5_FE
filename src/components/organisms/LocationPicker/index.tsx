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
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start"
            }}
          >
            <Text content="이웃과 만나서" variant="writing_bold" />
            <Text
              content="거래하고 싶은 장소를 선택해주세요."
              variant="writing_bold"
            />
          </div>
          {/* // TODO: content children으로 분리 필요 */}
          <div
            style={{
              display: "flex",
              flexDirection: "column"
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <Text content="만나서 거래할 때는&nbsp;" variant="desc_regular" />
              <Text content="누구나 찾기 쉬운 공공장소" variant="desc_bold" />
              <Text content="가 좋아요." variant="desc_regular" />
            </div>
            <Text
              content="나와 거래자 모두를 위해, 안전한 장소를 선택해주세요!"
              variant="desc_regular"
            />
          </div>
        </PaddingWrapper>
        <Map
          coord={coord}
          isCenterMarkerExist
          setCenterCoord={setCenterCoord}
          locationErrorEvent={locationErrorEvent}
        />
        <TextButton text="선택 완료" onClick={handleButtonClick} />
      </LocationPickerWrapper>
    );
  }
);

LocationPicker.displayName = "LocationPicker";
