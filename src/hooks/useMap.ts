import { useCallback, useEffect, useRef, useState } from "react";
import { useNavermaps } from "react-naver-maps";
import { IMapProps } from "types";

export const useMap = ({
  coord,
  isCenterMarkerExist,
  setMyCoord,
  markerInfo,
  locationErrorEvent
}: IMapProps) => {
  const navermaps = useNavermaps();
  const defaultCenter = new navermaps.LatLng(37.5666805, 126.9784147);
  const [map, setMap] = useState<any>(null);
  const [myMarker, setMyMarker] = useState<any>(null);
  const [transactionMarker, setTransactionMarker] = useState<any>(null);
  const [infowindow, setInfoWindow] = useState<any>(null);
  const isFirstExecution = useRef(true);

  const onSuccessGeolocation = useCallback(
    (position: GeolocationPosition) => {
      const location = new navermaps.LatLng(
        position.coords.latitude,
        position.coords.longitude
      );

      setMyCoord?.(location);

      myMarker.setVisible(true);
      myMarker.setPosition(location);
      map.setZoom(16);

      if (coord && isFirstExecution.current) {
        isFirstExecution.current = false;
        return;
      }

      map.setCenter(location);
    },
    [coord, map, myMarker, setMyCoord]
  );

  const onErrorGeolocation = useCallback(() => {
    /**
     * TODO: 권한 요청을 했는데, 그냥 취소 누른 경우 실행되는 부분
     */
    locationErrorEvent?.("위치를 불러오는데 실패했어요.");
  }, [locationErrorEvent]);

  const handlePermission = useCallback(
    (result: PermissionStatus, type: string) => {
      if (result.state === "granted" || result.state === "prompt") {
        navigator.geolocation.getCurrentPosition(
          onSuccessGeolocation,
          onErrorGeolocation
        );
      } else if (result.state === "denied") {
        if (
          type === "getMyLocation" ||
          (type === "init" && !coord && !isCenterMarkerExist)
        ) {
          locationErrorEvent?.("지금은 위치를 불러올 수 없어요.");
        }
      }
    },
    [locationErrorEvent, onErrorGeolocation, onSuccessGeolocation]
  );

  const requestGeolocation = useCallback(
    (type: string) => {
      if (navigator.permissions) {
        navigator.permissions
          .query({ name: "geolocation" })
          .then((result) => handlePermission(result, type))
          .catch((error) => {
            console.error("Error querying geolocation permissions:", error);
          });
      } else {
        /**
         * 만일의 경우를 대비한 처리. 실제로 사용될 일은 드물 것으로 예상됨
         * TODO: 추후에 개발 후 처분 결정
         */
        locationErrorEvent?.("브라우저가 위치 정보를 지원하지 않아요.");

        myMarker.setPosition(defaultCenter);
        myMarker.setVisible(!coord && !isCenterMarkerExist);
      }
    },
    [locationErrorEvent, handlePermission]
  );

  const moveToCurrentLocation = useCallback(() => {
    if (!map || !myMarker) return;
    requestGeolocation("getMyLocation");
  }, [map, myMarker, requestGeolocation]);

  useEffect(() => {
    if (!map || !myMarker) return;

    if (coord) {
      const position = new navermaps.LatLng(coord.lat, coord.lng);
      map.setCenter(position);

      if (!isCenterMarkerExist && transactionMarker) {
        transactionMarker.setPosition(position);
        if (infowindow && markerInfo) {
          infowindow.setOptions({
            disableAnchor: true,
            borderWidth: 0
          });
          infowindow.setContent(
            '<div style=" display: flex; padding: 6px 10px; justify-content: center; align-items: center; gap: 10px; border-radius:6px; background-color:#131B53; color:#FFF;  font-size: 14px;">' +
              markerInfo +
              "</div>"
          );
          console.log("getContent", infowindow.getContent());
          console.log("getContentElement", infowindow.getContentElement());
          infowindow.open(map, transactionMarker);
        }
      }
    }

    /**
     * 위치 요청 보내기 전 전처리
     * 동네 인증 시 내 위치를 못 불러와도 내 마커를 보여줘야 함
     * 나머지 경우에는 마커를 숨김
     */
    myMarker.setPosition(defaultCenter);
    myMarker.setVisible(!coord && !isCenterMarkerExist);

    if (!coord || isCenterMarkerExist || markerInfo) {
      requestGeolocation("init");
    }
  }, [map, myMarker, requestGeolocation]);

  return {
    defaultCenter,
    infowindow,
    map,
    moveToCurrentLocation,
    myMarker,
    navermaps,
    setInfoWindow,
    setMap,
    setMyMarker,
    setTransactionMarker,
    transactionMarker
  };
};
