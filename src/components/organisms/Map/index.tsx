import { useEffect, useRef, useState } from "react";
import {
  Container as MapDiv,
  NaverMap,
  useNavermaps,
  Marker
} from "react-naver-maps";

import { MyLocationIcon } from "components/atoms/Icon";
import { Image, IconButton, TextButton } from "components/atoms";
import { MapWrapper, CenterMarkerWrapper } from "./styled";
import { ICoord } from "types";

interface IMapProps {
  /** 좌표 (위도, 경도) */
  coord?: ICoord;
  /** center 고정 마커 존재 여부 */
  isCenterMarkerExist: boolean;
  /** 최종 좌표를 처리하는 버튼의 클릭 이벤트*/
  onSubmitButtonClick?: (coord: ICoord) => void;
}

export const Map = ({
  coord,
  isCenterMarkerExist,
  onSubmitButtonClick
}: IMapProps) => {
  const navermaps = useNavermaps();

  /** 서울 시청이 디폴트 좌표 */
  const defaultCenter = new navermaps.LatLng(37.5666805, 126.9784147);
  const [map, setMap] = useState<any>(null);
  const [myMarker, setMyMarker] = useState<any>(null);
  const [transactionMarker, setTransactionMarker] = useState<any>(null);
  const isFirstExecution = useRef(true);

  // 나의 현재 위치를 받아와 맵에 마커 세팅 (필요시 현재 위치로 이동)
  const onSuccessGeolocation = (position: GeolocationPosition) => {
    if (!map || !myMarker) return;

    const location = new navermaps.LatLng(
      position.coords.latitude,
      position.coords.longitude
    );

    myMarker.setPosition(location);
    map.setZoom(16);

    if (coord && isFirstExecution.current) {
      isFirstExecution.current = false;
      return;
    }

    map.setCenter(location);
  };

  const onErrorGeolocation = () => {
    if (!map || !myMarker) return;

    const center = map.getCenter();
    myMarker.setPosition(new navermaps.LatLng(center.lat(), center.lng()));

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        onSuccessGeolocation,
        onErrorGeolocation
      );
    } else {
      const center = map.getCenter();
      myMarker.setPosition(new navermaps.LatLng(center.lat(), center.lng()));
    }
  };

  const moveToCurrentLocation = () => {
    if (!map) {
      return;
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        onSuccessGeolocation,
        onErrorGeolocation
      );
    } else {
      console.log("Geolocation not supported.");
    }
  };

  useEffect(() => {
    if (!map || !myMarker) {
      return;
    }

    if (coord) {
      map.setCenter(new navermaps.LatLng(coord.lat, coord.lng));
    }

    if (coord && transactionMarker) {
      transactionMarker.setPosition(new navermaps.LatLng(coord.lat, coord.lng));
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        onSuccessGeolocation,
        onErrorGeolocation
      );
    } else {
      const center = map.getCenter();
      myMarker.setPosition(new navermaps.LatLng(center.lat(), center.lng()));
    }
  }, [map, myMarker, transactionMarker]);

  const getCenterCoord = () => {
    if (map) {
      const center = map.getCenter();
      const coord = {
        lat: center.lat(),
        lng: center.lng()
      };

      /** 거래 장소 등록, 수정, 동네 인증 제출 버튼에서 사용될 클릭 이벤트 ex) setCoord, 리다이렉트 */
      if (onSubmitButtonClick) {
        onSubmitButtonClick(coord);
      }
    }
  };

  return (
    <MapWrapper>
      <MapDiv
        style={{
          width: "100%",
          height: "80vh"
        }}
      >
        <NaverMap defaultCenter={defaultCenter} defaultZoom={16} ref={setMap}>
          <Marker
            icon={{
              url: "https://url.kr/y7fjy4",
              size: new navermaps.Size(50, 50),
              origin: new navermaps.Point(85, 30),
              anchor: new navermaps.Point(25, 25)
            }}
            ref={setMyMarker}
          />
          {isCenterMarkerExist && (
            <CenterMarkerWrapper>
              <Image url="https://url.kr/y7fjy4" alt="Center Marker" />
            </CenterMarkerWrapper>
          )}

          {!isCenterMarkerExist && coord && (
            <Marker ref={setTransactionMarker} />
          )}
          <IconButton
            icon={MyLocationIcon}
            type="round"
            size="l"
            backgroundColor="default"
            onClick={moveToCurrentLocation}
          />
        </NaverMap>
      </MapDiv>
      {onSubmitButtonClick && (
        <TextButton
          text={"지도 center 위경도 버튼(수정 필요)"}
          onClick={getCenterCoord}
        />
      )}
    </MapWrapper>
  );
};
