import { useCallback, useEffect, useState } from "react";
import { Text, TextButton } from "components/atoms";
import {
  NeighborhoodAuthFormWrapper,
  LocationConfirmationContainer
} from "./styled";
import { Map } from "components/organisms";
import { ICoord, ILocation } from "types";
import { useReverseGeocode } from "hooks";

interface INeighborhoodAuthFormProps {
  /** 동네 인증 버튼 클릭 이벤트 */
  onSubmitButtonClick?: (location: ILocation) => void;
  /** 위치 권한 가져오기 실패 시 모달을 실행할 함수 */
  locationErrorEvent: (message: string) => void;
}

export const NeighborhoodAuthForm = ({
  onSubmitButtonClick,
  locationErrorEvent
}: INeighborhoodAuthFormProps) => {
  const [myCoord, setMyCoord] = useState<any>(null);
  const [location, setLocation] = useState<ILocation>({
    coord: undefined,
    address: ""
  });
  const { searchCoordinateToAddress } = useReverseGeocode();

  useEffect(() => {
    if (myCoord) {
      const iCoord: ICoord = {
        lat: myCoord.lat(),
        lng: myCoord.lng()
      } as const;

      searchCoordinateToAddress(myCoord)
        .then((address) => {
          setLocation({ coord: iCoord, address });
        })
        .catch((error) => {
          console.error("Failed to fetch address:", error);
          setLocation({ coord: iCoord, address: "" });
        });
    }
  }, [myCoord, searchCoordinateToAddress]);

  const handleButtonClick = useCallback(() => {
    if (location.address) {
      onSubmitButtonClick?.(location);
    }
  }, [onSubmitButtonClick, location]);

  return (
    <NeighborhoodAuthFormWrapper>
      <Map setMyCoord={setMyCoord} locationErrorEvent={locationErrorEvent} />
      <LocationConfirmationContainer>
        <Text
          content={
            location.address
              ? `현재 위치가 '${location.address}'에 있어요`
              : "현재 위치정보를 가져올 수 없어요. 잠시 후 다시 시도해주세요"
          }
        />
        {location.address && (
          <TextButton text={"동네인증 완료하기"} onClick={handleButtonClick} />
        )}
      </LocationConfirmationContainer>
    </NeighborhoodAuthFormWrapper>
  );
};
