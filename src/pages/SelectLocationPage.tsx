import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { SelectLocationTemplate } from "components/templates";
import { useLocationErrorEvent } from "hooks";
import { useSelectedLocationStore } from "stores";
import type { ILocation } from "types";

export const SelectLocationPage = () => {
  const navigate = useNavigate();
  const coord = useSelectedLocationStore((state) => state.coord);
  const [isOpenBottomSheet, setIsOpenBottomSheet] = useState(false);
  const { setCoord, setAddress, setLocation } = useSelectedLocationStore(
    (state) => state.actions
  );
  const locationErrorEvent = useLocationErrorEvent();

  const handleRegistrationButtonClick = useCallback(
    (place: string) => {
      setLocation(place);
      setIsOpenBottomSheet(false);
      navigate("/product");
    },
    [setLocation, navigate]
  );

  const handleLocationSelect = useCallback(
    (selectedLocation: ILocation) => {
      setCoord(selectedLocation.coord);
      // TODO: 왜 undefined 안되지?
      setAddress(selectedLocation.address!);
      setIsOpenBottomSheet(true);
      console.log("click");
    },
    [setCoord, setAddress]
  );

  return (
    <SelectLocationTemplate
      coord={coord}
      onLocationSelect={handleLocationSelect}
      isOpenBottomSheet={isOpenBottomSheet}
      closeBottomSheet={() => setIsOpenBottomSheet(false)}
      onRegistrationButtonClick={handleRegistrationButtonClick}
      locationErrorEvent={locationErrorEvent}
    />
  );
};
