import { Toast } from "components/atoms";
import { NeighborhoodAuthTemplate } from "components/templates";
import { useLocationErrorEvent } from "hooks";
import { useCallback } from "react";
import { ILocation, IResponse } from "types";
import { http } from "services/api";

/**
 * 사용자의 위치 정보를 서버에 전송하는 함수
 * @param location 사용자의 위치 정보
 */
const submitUserLocation = async (location: ILocation): Promise<void> => {
  try {
    await http.post<IResponse, ILocation>("/user/location", location);
    Toast.show("동네 인증이 완료되었습니다.", 2000);
  } catch (error) {
    console.error("Failed to submit user location:", error);
    Toast.show("동네 인증에 실패했습니다. 다시 시도해주세요.", 2000);
  }
};

export const NeighborhoodAuthPage = () => {
  const locationErrorEvent = useLocationErrorEvent();
  const onSubmitButtonClick = useCallback(async (location: ILocation) => {
    await submitUserLocation(location);
  }, []);

  return (
    <NeighborhoodAuthTemplate
      onSubmitButtonClick={onSubmitButtonClick}
      locationErrorEvent={locationErrorEvent}
    />
  );
};
