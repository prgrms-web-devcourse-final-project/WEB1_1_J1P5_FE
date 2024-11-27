import { useCallback, useEffect, useRef, useState } from "react";
import { useNavermaps } from "react-naver-maps";
import { IMapProps } from "types";

export const useMap = ({
  coord,
  isCenterMarkerExist,
  onSubmitButtonClick
}: IMapProps) => {
  const navermaps = useNavermaps();
  const defaultCenter = new navermaps.LatLng(37.5666805, 126.9784147);
  const [map, setMap] = useState<any>(null);
  const [myMarker, setMyMarker] = useState<any>(null);
  const [transactionMarker, setTransactionMarker] = useState<any>(null);
  const isFirstExecution = useRef(true);

  const onSuccessGeolocation = useCallback(
    (position: GeolocationPosition) => {
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
    },
    [coord, map, myMarker]
  );

  const onErrorGeolocation = useCallback(() => {
    const center = map.getCenter();
    myMarker.setPosition(new navermaps.LatLng(center.lat(), center.lng()));
  }, [map, myMarker]);

  const requestGeolocation = useCallback(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        onSuccessGeolocation,
        onErrorGeolocation
      );
    } else {
      const center = map.getCenter();
      myMarker.setPosition(new navermaps.LatLng(center.lat(), center.lng()));
    }
  }, [onSuccessGeolocation, onErrorGeolocation, map, myMarker]);

  const moveToCurrentLocation = useCallback(() => {
    if (!map || !myMarker) return;
    requestGeolocation();
  }, [map, myMarker, requestGeolocation]);

  const getCenterCoord = useCallback(() => {
    if (map) {
      const center = map.getCenter();
      const coord = {
        lat: center.lat(),
        lng: center.lng()
      };

      if (onSubmitButtonClick) {
        onSubmitButtonClick(coord);
      }
    }
  }, [map, onSubmitButtonClick]);

  useEffect(() => {
    if (!map || !myMarker) return;

    if (coord) {
      const position = new navermaps.LatLng(coord.lat, coord.lng);
      map.setCenter(position);

      if (!isCenterMarkerExist && transactionMarker) {
        transactionMarker.setPosition(position);
      }
    }
    requestGeolocation();
  }, [
    map,
    myMarker,
    transactionMarker,
    coord,
    isCenterMarkerExist,
    requestGeolocation,
    navermaps.LatLng
  ]);

  return {
    navermaps,
    defaultCenter,
    map,
    setMap,
    myMarker,
    setMyMarker,
    transactionMarker,
    setTransactionMarker,
    moveToCurrentLocation,
    getCenterCoord
  };
};

