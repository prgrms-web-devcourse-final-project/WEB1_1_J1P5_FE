import { Modal } from "components/organisms";
import { Text } from "components/atoms";
import { useModalStore } from "stores";
import { modalMessage } from "constants/modalMessage";

/**
 * 기본 모달 형태를 불러서 사용할 수 있는 훅 (alert / confirm)
 */
export const useModalForm = () => {
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
  const todo = () =>
    openModal(
      <>
        <Modal.Body>
          <Text variant="writing_bold" content={modalMessage.todo.title} />
          <Text variant="desc_regular" content={modalMessage.todo.desc} />
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
  return {
    alert,
    confirm,
    todo,
  };
};
