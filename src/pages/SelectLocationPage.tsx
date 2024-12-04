import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { SelectLocationTemplate } from "components/templates";
import { useFormDataStore, useModalStore } from "stores";
import type { ILocation } from "types";

export const SelectLocationPage = () => {
  const navigate = useNavigate();
  const coord = useFormDataStore((state) => {
    return {
      lat: state.formData.latitude as number,
      lng: state.formData.longitude as number
    };
  });
  const { setFormData } = useFormDataStore((state) => state.actions);
  const { openModal, closeModal } = useModalStore((state) => state.actions);
  const [isOpenBottomSheet, setIsOpenBottomSheet] = useState(false);

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
      openModal={openModal}
      closeModal={closeModal}
      isOpenBottomSheet={isOpenBottomSheet}
      closeBottomSheet={() => setIsOpenBottomSheet(false)}
      onRegistrationButtonClick={handleRegistrationButtonClick}
    />
  );
};
