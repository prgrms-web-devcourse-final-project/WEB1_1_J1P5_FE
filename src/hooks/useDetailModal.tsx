import { Modal } from "components/organisms";
import { Text } from "components/atoms";
import { useModalStore } from "stores";
import { modalMessage } from "constants/modalMessage";

/**
 * 상세페이지에서 사용되는 모달
 */
export const useDetailModal = () => {
  const {
    actions: { openModal, closeModal },
  } = useModalStore();
  const alert = (message: string) => {
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
              },
            },
          ]}
        />
      </>,
    );
  };
  const confirm = (message: string, ok: () => void) => {
    openModal(
      <>
        <Modal.Body>
          <Text content={message} />
        </Modal.Body>
        <Modal.ButtonContainer
          buttons={[
            {
              title: "취소",
              onClick: () => {
                closeModal();
              },
            },
            {
              title: "확인",
              onClick: () => {
                ok();
              },
            },
          ]}
        />
      </>,
    );
  };

  // 구매자
  const cancel = (onCancel: () => void) =>
    confirm(modalMessage.product.bid.cancel.DEFAULT, onCancel);
  const cancelEarly = () => alert(modalMessage.product.bid.cancel.early);
  const editEarly = () => alert(modalMessage.product.bid.edit.early);
  const bid = (price: number) => alert(modalMessage.product.bid.DEFAULT(price));
  // 판매자
  const earlyClosing = (onEarlyClosing: () => void) =>
    confirm(modalMessage.product.seller.early, onEarlyClosing);
  const removeHasBuyer = (onRemove: () => void) =>
    confirm(modalMessage.product.seller.remove.hasBuyer, onRemove);

  return {
    cancel,
    cancelEarly,
    editEarly,
    bid,
    earlyClosing,
    removeHasBuyer,
  };
};
