import {
  Container as MapDiv,
  NaverMap,
  Marker,
  InfoWindow,
} from "react-naver-maps";
import { MyLocationIcon } from "components/atoms/Icon";
import { IconButton } from "components/atoms";
import { MapWrapper, CenterMarkerWrapper } from "./styled";
import { useMap } from "hooks";
import { IMapProps } from "types";
import MYMARKER from "assets/Map/my_marker.svg";
import DEFAULTMARKER from "assets/Map/default_marker.svg";

export const Map = ({
  coord,
  isCenterMarkerExist = false,
  locationErrorEvent,
  markerInfo,
  setCenterCoord,
  setMyCoord,
}: IMapProps) => {
  const {
    defaultCenter,
    moveToCurrentLocation,
    navermaps,
    setInfoWindow,
    setMap,
    setMyMarker,
    setTransactionMarker,
  } = useMap({
    coord,
    isCenterMarkerExist,
    locationErrorEvent,
    markerInfo,
    setMyCoord,
  });
  return (
    <MapWrapper>
      <MapDiv
        style={{
          width: "100%",
          height: "100%",
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
              // TODO: svg인데 왜 깨져 보이지?
              url: MYMARKER,
              // url: MY_MARKER_IMG_PATH,
              // size: new navermaps.Size(38, 38),
              // anchor: new navermaps.Point(24, 24)
              // origin: new navermaps.Point(85, 30),
            }}
            ref={setMyMarker}
          />
          {isCenterMarkerExist && (
            <CenterMarkerWrapper>
              <svg
                width="40"
                height="40"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7 20.0261C7 10.6228 14.6228 3 24.0261 3C33.4293 3 41.0522 10.6228 41.0522 20.0261C41.0522 24.5715 38.4642 29.3974 35.6598 33.3661C32.7962 37.4186 29.4295 40.9564 27.3614 42.9943C25.4996 44.8289 22.5526 44.8289 20.6907 42.9943C18.6226 40.9564 15.2559 37.4186 12.3924 33.3661C9.58801 29.3974 7 24.5715 7 20.0261ZM17.2268 19.4003C17.2268 15.6447 20.2713 12.6003 24.0268 12.6003C27.7823 12.6003 30.8268 15.6447 30.8268 19.4003C30.8268 23.1558 27.7823 26.2003 24.0268 26.2003C20.2713 26.2003 17.2268 23.1558 17.2268 19.4003Z"
                  fill="#131B53"
                />
              </svg>

              {/* <Image url="https://url.kr/y7fjy4" alt="Center Marker" /> */}
            </CenterMarkerWrapper>
          )}

          {!isCenterMarkerExist && coord && (
            <Marker
              icon={{
                url: DEFAULTMARKER,
                size: new navermaps.Size(40, 40),
                anchor: new navermaps.Point(20, 34),
              }}
              ref={setTransactionMarker}
            />
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
