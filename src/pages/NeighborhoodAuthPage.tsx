import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Toast } from "components/atoms";
import { NeighborhoodAuthTemplate } from "components/templates";
import { useLocationErrorEvent } from "hooks";
import { ILocation, IAreaAuthPost } from "types";
import { registerAreaAuth } from "services/apis/areaAuth";
import { useUserStore, useTopBarStore } from "stores";

export const NeighborhoodAuthPage = () => {
  const navigate = useNavigate();
  const { clear, setTitle } = useTopBarStore();
  const { user } = useUserStore();
  const locationErrorEvent = useLocationErrorEvent();

  /**
   * 유저의 위치 정보를 서버에 전송하는 함수
   * @param location 유저의 위치 정보
   */
  const handleSubmitButtonClick = useCallback(
    async (location: ILocation) => {
      const areaAuthPost: IAreaAuthPost = {
        latitude: location.coord!.lat,
        longitude: location.coord!.lng,
        emdId: user!.emdId as number,
      };

      try {
        await registerAreaAuth(areaAuthPost);
        Toast.show("동네 인증이 완료되었습니다.", 2000);
      } catch (error) {
        Toast.show("동네 인증에 실패했습니다. 다시 시도해주세요.", 2000);
        console.error("Failed to submit user location:", error);
      } finally {
        navigate("/my-page");
      }
    },
    [user, navigate]
  );

  useEffect(() => {
    clear();
    setTitle("동네 인증");
  }, []);

  return (
    <NeighborhoodAuthTemplate
      // TODO: 값이 없을 때 어떤 값을 띄워야 하는지
      nickname={user?.nickname || ""}
      myAddress={user?.emdName || ""}
      onSubmitButtonClick={handleSubmitButtonClick}
      locationErrorEvent={locationErrorEvent}
    />
  );
};
