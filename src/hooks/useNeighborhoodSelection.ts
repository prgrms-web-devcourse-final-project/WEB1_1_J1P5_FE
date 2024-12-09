import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { IActivityArea, ICoord } from "types";
import {
  editActivityArea,
  getActivityAreas,
  registerActivityArea,
  searchActivityAreas,
} from "services/apis";
import { useUserStore } from "../stores";
import { Toast } from "../components/atoms";

/**
 * 동네 선택 시 사용되는 훅
 */
export const useNeighborhoodSelection = () => {
  const navigate = useNavigate();
  const { user, setUser } = useUserStore();
  /** 동네 목록 */
  const [neighborhoods, setNeighborhoods] = useState<IActivityArea[]>([]);
  /** 내 위치 위도/경도 */
  const [location, setLocation] = useState<ICoord | null>(null);
  /** 검색어 */
  const [term, setTerm] = useState("");

  /**
   * 동네 검색 함수
   */
  const handleSearchNeighborhoods = () => {
    if (!term.trim()) {
      Toast.show("검색어를 입력해주세요.", 2000);
    }
    searchActivityAreas(term)
      .then((data) => {
        const {
          result: { content },
        } = data;
        setNeighborhoods(content);
      })
      .catch(console.error);
  };

  /**
   * 내 위치 동네 조회 함수
   * @param _location `optional` 최초로 위치를 받았을 때 처리하기 위한 변수
   */
  const handleGetMyNeighborhood = (_location = location) => {
    if (!_location) {
      // 내 위치 불러올 수 없음
      console.error(
        "현재 위치정보를 가져올 수 없어요. 잠시 후 다시 시도해주세요.",
      );
      return;
    }
    getActivityAreas(_location.lat, _location.lng)
      .then((data) => {
        const {
          result: { content },
        } = data;
        setNeighborhoods(content);
      })
      .catch(console.error);
  };

  /**
   * 동네 클릭 시 실행될 함수
   * @param neighborhood 선택된 동네
   */
  const handleClickNeighborhood = (neighborhood: string) => {
    const activityArea = neighborhoods.find(
      (n) => n.fullAddress === neighborhood,
    );
    const emdId = activityArea?.emdId;

    if (emdId) {
      console.log(emdId);
      (!user?.emdName ? registerActivityArea : editActivityArea)(emdId)
        .then((data) => {
          console.log(data);
          // 동네 선택 시 user에 저장
          setUser({
            emdName: neighborhood.split(" ").pop(),
            emdId: emdId,
          });
          // 저장 이후 홈으로 이동
          navigate("/", { replace: true });
        })
        .catch(console.error);
    }
  };

  const onSuccessGeolocation = (position: GeolocationPosition) => {
    const location = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    };
    setLocation(location);
    handleGetMyNeighborhood(location);
  };

  const onErrorGeolocation = () => {
    /**
     * TODO: 권한 요청을 했는데, 그냥 취소 누른 경우 실행되는 부분
     */
    console.error("위치를 불러오는데 실패했어요. 잠시 후에 다시 실행해주세요.");
  };

  useEffect(() => {
    // 위치 권한 요청
    navigator.geolocation.getCurrentPosition(
      onSuccessGeolocation,
      onErrorGeolocation,
    );
  }, []);

  return {
    neighborhoods,
    term,
    setTerm,
    handleSearchNeighborhoods,
    handleClickNeighborhood,
    handleGetMyNeighborhood,
  };
};
