import { useCallback } from "react";
import { Text } from "components/atoms";
import { Modal } from "components/organisms";
import { useModalStore } from "stores";

export const useLocationErrorEvent = () => {
  const { openModal, closeModal } = useModalStore((state) => state.actions);

  return useCallback(
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
};

