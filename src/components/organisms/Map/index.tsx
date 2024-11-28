import { Container as MapDiv, NaverMap, Marker } from "react-naver-maps";
import { MyLocationIcon } from "components/atoms/Icon";
import { Image, IconButton, TextButton } from "components/atoms";
import { MapWrapper, CenterMarkerWrapper } from "./styled";
import { useMap } from "hooks";
import { IMapProps } from "types";

export const Map = ({
  coord,
  isCenterMarkerExist = false,
  onSubmitButtonClick
}: IMapProps) => {
  const {
    navermaps,
    defaultCenter,
    setMap,
    setMyMarker,
    setTransactionMarker,
    moveToCurrentLocation,
    getCenterCoord
  } = useMap({ coord, isCenterMarkerExist, onSubmitButtonClick });

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
