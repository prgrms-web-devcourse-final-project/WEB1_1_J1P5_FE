import { useCallback, useEffect } from "react";
import { Toast } from "components/atoms";
import { NeighborhoodAuthTemplate } from "components/templates";
import { useLocationErrorEvent } from "hooks";
import { ILocation, IResponse } from "types";
import { http } from "services/api";
import { useActivityAreaStore, useTopBarStore } from "stores";
import { useNavigate } from "react-router-dom";

interface IUserLocationPost {
  latitude: number;
  longitude: number;
  emdId: number;
}

export interface ILocationResponse extends IResponse {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  result: {};
}

export const NeighborhoodAuthPage = () => {
  const navigate = useNavigate();
  const { setTitle } = useTopBarStore();
  const activityArea = useActivityAreaStore((state) => state.activityArea);
  const activityAreaId = useActivityAreaStore((state) => state.activityAreaId);

  // TODO: nickname 주스탄드로 가져와야 함 or 프로필 패치
  const nickname = "알비노 라쿤";

  useEffect(() => {
    setTitle("동네 인증");
  }, [setTitle]);

  /**
   * 사용자의 위치 정보를 서버에 전송하는 함수
   * @param location 사용자의 위치 정보
   */
  const submitUserLocation = useCallback(
    async (location: ILocation): Promise<void> => {
      const locationPost: IUserLocationPost = {
        latitude: location.coord!.lat,
        longitude: location.coord!.lng,
        emdId: activityAreaId
      };
      try {
        await http.post<ILocationResponse, IUserLocationPost>(
          "/user/location",
          locationPost
        );
        // TODO: navigate("/my-page") 중복 제거 필요
        navigate("/my-page");
        Toast.show("동네 인증이 완료되었습니다.", 2000);
      } catch (error) {
        navigate("/my-page");
        Toast.show("동네 인증에 실패했습니다. 다시 시도해주세요.", 2000);
        console.error("Failed to submit user location:", error);
      }
    },
    [activityAreaId, navigate]
  );

  const locationErrorEvent = useLocationErrorEvent();

  const handleSubmitButtonClick = useCallback(
    async (location: ILocation) => {
      await submitUserLocation(location);
    },
    [submitUserLocation]
  );

  return (
    <NeighborhoodAuthTemplate
      nickname={nickname}
      myAddress={activityArea}
      onSubmitButtonClick={handleSubmitButtonClick}
      locationErrorEvent={locationErrorEvent}
    />
  );
};
