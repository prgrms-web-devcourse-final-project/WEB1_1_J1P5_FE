import { useEffect, useState } from "react";
import { useNavermaps } from "react-naver-maps";
import { useReverseGeocode } from "hooks";
import type { ICoord } from "types";

export const useNeighborhoodSelection = () => {
  const { LatLng } = useNavermaps();
  const { searchCoordinateToAddress, searchAddressToCoordinate } =
    useReverseGeocode();
  const [neighborhoods, setNeighborhoods] = useState<string[]>([]);
  const [location, setLocation] = useState<ICoord | null>(null);

  /**
   * 동네 검색 함수
   * @param query 검색어
   */
  const handleSearchNeighborhoods = (query: string) => {
    searchAddressToCoordinate(query)
      .then((address) => {
        if (address.addressElements[2].code === "") {
          // addressElements index=2(동) 없음!! 다시 검색!!!!
          throw new Error("동네를 검색해주세요.");
        }
        // 리스트에 출력
        setNeighborhoods([address.jibunAddress]);
      })
      .catch(console.error);
  };

  /**
   * 내 위치 동네 조회 함수
   */
  const handleGetMyNeighborhood = (_location = location) => {
    if (!_location) {
      // 내 위치 불러올 수 없음
      console.error(
        "현재 위치정보를 가져올 수 없어요. 잠시 후 다시 시도해주세요.",
      );
      return;
    }
    const latlng = new LatLng(_location.lat, _location.lng);
    searchCoordinateToAddress(latlng)
      .then((address) => {
        // 리스트에 출력
        setNeighborhoods([address]);
      })
      .catch(console.error);
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
    navigator.geolocation.getCurrentPosition(
      onSuccessGeolocation,
      onErrorGeolocation,
    );
  }, []);

  return {
    neighborhoods,
    handleSearchNeighborhoods,
    handleGetNearbyNeighborhood: handleGetMyNeighborhood,
  };
};
