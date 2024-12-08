import { useCallback, useEffect } from "react";
import { Toast } from "components/atoms";
import { NeighborhoodAuthTemplate } from "components/templates";
import { useLocationErrorEvent } from "hooks";
import { ILocation, IResponse } from "types";
import { http } from "services/api";
import { useUserStore, useTopBarStore } from "stores";
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
  const { user } = useUserStore();
  const locationErrorEvent = useLocationErrorEvent();

  /**
   * 사용자의 위치 정보를 서버에 전송하는 함수
   * @param location 사용자의 위치 정보
   */
  const submitUserLocation = useCallback(
    async (location: ILocation): Promise<void> => {
      const locationPost: IUserLocationPost = {
        latitude: location.coord!.lat,
        longitude: location.coord!.lng,
        emdId: user!.emdId as number
      };
      try {
        await http.post<ILocationResponse, IUserLocationPost>(
          "/area-auth",
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
    [user, navigate]
  );

  const handleSubmitButtonClick = useCallback(
    async (location: ILocation) => {
      await submitUserLocation(location);
    },
    [submitUserLocation]
  );

  useEffect(() => {
    setTitle("동네 인증");
  }, []);

  return (
    <NeighborhoodAuthTemplate
      nickname={user?.nickname || "닉네임을 불러올 수 없어요"}
      myAddress={user?.emdName || ""}
      onSubmitButtonClick={handleSubmitButtonClick}
      locationErrorEvent={locationErrorEvent}
    />
  );
};
