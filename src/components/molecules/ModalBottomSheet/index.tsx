import {
  ModalBottomSheetBackgroundWrapper,
  ModalBottomSheetBodyWrapper,
  ModalBottomSheetWrapper,
} from "./styled";

export interface IModalBottomSheetProps {
  /** 열렸는지 닫혔는지 상태 */
  open: boolean;
  /** 닫기 함수 */
  onClose: () => void;
  /** 내부 콘텐츠 영역(body)에 들어갈 요소 */
  children?: React.ReactNode;
  /** 내부 콘텐츠 영역(body)의 className */
  className?: string;
}

export const ModalBottomSheet = ({
  children,
  onClose,
  open,
  className = "",
}: IModalBottomSheetProps) => {
  return (
    <ModalBottomSheetWrapper open={open}>
      <ModalBottomSheetBackgroundWrapper onClick={onClose} />
      <ModalBottomSheetBodyWrapper className={className}>
        {children}
      </ModalBottomSheetBodyWrapper>
    </ModalBottomSheetWrapper>
  );
};
