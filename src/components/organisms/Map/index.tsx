import {
  Container as MapDiv,
  NaverMap,
  Marker,
  InfoWindow
} from "react-naver-maps";
import { MyLocationIcon } from "components/atoms/Icon";
import { Image, IconButton } from "components/atoms";
import { MapWrapper, CenterMarkerWrapper } from "./styled";
import { useMap } from "hooks";
import { IMapProps } from "types";

export const Map = ({
  coord,
  isCenterMarkerExist = false,
  locationErrorEvent,
  markerInfo,
  setCenterCoord,
  setMyCoord
}: IMapProps) => {
  const {
    defaultCenter,
    moveToCurrentLocation,
    navermaps,
    setInfoWindow,
    setMap,
    setMyMarker,
    setTransactionMarker
  } = useMap({
    coord,
    isCenterMarkerExist,
    locationErrorEvent,
    markerInfo,
    setMyCoord
  });
  return (
    <MapWrapper>
      <MapDiv
        style={{
          width: "100%",
          height: "100%"
        }}
      >
        <NaverMap
          defaultCenter={defaultCenter}
          defaultZoom={16}
          onCenterChanged={setCenterCoord}
          ref={setMap}
        >
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
          {markerInfo && (
            <InfoWindow content={markerInfo} ref={setInfoWindow} />
          )}
          {!(!isCenterMarkerExist && coord && !markerInfo) && (
            <IconButton
              icon={MyLocationIcon}
              type="round"
              size="l"
              backgroundColor="default"
              onClick={moveToCurrentLocation}
            />
          )}
        </NaverMap>
      </MapDiv>
    </MapWrapper>
  );
};
