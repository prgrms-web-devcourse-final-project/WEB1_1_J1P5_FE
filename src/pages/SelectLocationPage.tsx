import { useState, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";

import { SelectLocationTemplate } from "components/templates";
import { useLocationErrorEvent } from "hooks";
import { useFormDataStore } from "stores";
import type { ILocation } from "types";

export const SelectLocationPage = () => {
  const navigate = useNavigate();

  const lat = useFormDataStore((state) => state.formData.latitude);
  const lng = useFormDataStore((state) => state.formData.longitude);

  const coord = useMemo(() => {
    return lat && lng
      ? {
          lat,
          lng
        }
      : undefined;
  }, [lat, lng]);

  const { setFormData } = useFormDataStore((state) => state.actions);
  const [isOpenBottomSheet, setIsOpenBottomSheet] = useState(false);
  const locationErrorEvent = useLocationErrorEvent();


  const handleRegistrationButtonClick = useCallback(
    (place: string) => {
      setFormData({
        location: place
      });
      setIsOpenBottomSheet(false);
      navigate("/product");
    },
    [setFormData, navigate]
  );

  const handleLocationSelect = useCallback(
    (selectedLocation: ILocation) => {
      setFormData({
        latitude: selectedLocation.coord?.lat,
        longitude: selectedLocation.coord?.lng,
        address: selectedLocation.address
      });
      setIsOpenBottomSheet(true);
    },
    [setFormData]
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
