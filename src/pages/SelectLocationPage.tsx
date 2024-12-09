import { useState, useCallback, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { SelectLocationTemplate } from "components/templates";
import { useLocationErrorEvent } from "hooks";
import { useFormDataStore, useTopBarStore } from "stores";
import type { ILocation } from "types";

export const SelectLocationPage = () => {
  const navigate = useNavigate();
  const { setTitle } = useTopBarStore();
  const productId = useFormDataStore((state) => state.productId);
  const lat = useFormDataStore((state) => state.formData.latitude);
  const lng = useFormDataStore((state) => state.formData.longitude);
  const location = useFormDataStore((state) => state.formData.location);
  const { setFormData } = useFormDataStore();
  const [isOpenBottomSheet, setIsOpenBottomSheet] = useState(false);
  const locationErrorEvent = useLocationErrorEvent();
  const [isError, setIsError] = useState<boolean>(false);

  const coord = useMemo(() => {
    return lat && lng
      ? {
          lat,
          lng,
        }
      : undefined;
  }, [lat, lng]);

  const handleRegistrationButtonClick = useCallback(
    (place: string) => {
      if (!place) {
        setIsError(true);
        return;
      }
      setFormData({
        location: place,
      });
      setIsOpenBottomSheet(false);
      if (productId) {
        navigate(`/product?productId=${productId}`);
      } else {
        navigate("/product");
      }
    },
    [setFormData, navigate, productId]
  );

  const handleLocationSelect = useCallback(
    (selectedLocation: ILocation) => {
      setFormData({
        latitude: selectedLocation.coord?.lat,
        longitude: selectedLocation.coord?.lng,
        address: selectedLocation.address,
      });
      setIsOpenBottomSheet(true);
    },
    [setFormData]
  );

  useEffect(() => {
    setTitle("");
  }, [setTitle]);

  return (
    <SelectLocationTemplate
      coord={coord}
      location={location}
      onLocationSelect={handleLocationSelect}
      isOpenBottomSheet={isOpenBottomSheet}
      closeBottomSheet={() => setIsOpenBottomSheet(false)}
      onRegistrationButtonClick={handleRegistrationButtonClick}
      locationErrorEvent={locationErrorEvent}
      isError={isError}
    />
  );
};
