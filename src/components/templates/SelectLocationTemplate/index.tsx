import { useState, useCallback, useMemo } from "react";
import { createPortal } from "react-dom";
import { Text } from "components/atoms";
import {
  LocationInputBottomSheet,
  LocationPicker,
  Modal
} from "components/organisms";
import { SelectLocationTemplateWrapper } from "./styled";
import { ICoord, ILocation } from "types";

interface ISelectLocationTemplateProps {
  /** 거래희망장소 좌표 (위도, 경도) */
  coord?: ICoord;
  /** 거래희망장소 선택 완료 버튼 클릭 이벤트 */
  onLocationSelect: (selectedLocation: ILocation) => void;
  /** 모달 open 함수 */
  openModal: (content: React.ReactNode) => void;
  /** 모달 close 함수 */
  closeModal: () => void;
  /** 바텀 시트 open 여부 */
  isOpenBottomSheet: boolean;
  /** 바텀 시트 close 함수 */
  closeBottomSheet: () => void;
  /** 거래희망장소 등록 버튼 클릭 시 실행될 함수 */
  onRegistrationButtonClick: (place: string) => void;
}

export const SelectLocationTemplate = ({
  coord,
  onLocationSelect,
  openModal,
  closeModal,
  isOpenBottomSheet,
  closeBottomSheet,
  onRegistrationButtonClick
}: ISelectLocationTemplateProps) => {
  const [place, setPlace] = useState("");

  const locationErrorEvent = useCallback(
    (message: string) => {
      openModal(
        <>
          <Modal.Body>
            <Text content={message} />
          </Modal.Body>
          <Modal.ButtonContainer
            buttons={[
              {
                title: "확인",
                onClick: () => {
                  closeModal();
                }
              }
            ]}
          />
        </>
      );
    },
    [openModal, closeModal]
  );

  const memoizedLocationPicker = useMemo(
    () => (
      <LocationPicker
        coord={coord}
        onLocationSelect={onLocationSelect}
        locationErrorEvent={locationErrorEvent}
      />
    ),
    [coord, onLocationSelect, locationErrorEvent]
  );

  return (
    <SelectLocationTemplateWrapper>
      {memoizedLocationPicker}
      {createPortal(
        <LocationInputBottomSheet
          open={isOpenBottomSheet}
          onClose={closeBottomSheet}
          place={place}
          setPlace={setPlace}
          onRegistrationButtonClick={() => onRegistrationButtonClick(place)}
        />,
        document.body
      )}
    </SelectLocationTemplateWrapper>
  );
};
