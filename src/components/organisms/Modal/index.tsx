import {
  type Context,
  createContext,
  useContext,
  useEffect,
  useRef,
} from "react";
import { IconButton, Text, TextButton } from "components/atoms";
import { XIcon } from "components/atoms/Icon";
import type { ITextButtonProps } from "components/atoms/Button/TextButton";
import {
  ModalBodyWrapper,
  ModalHeaderWrapper,
  ModalContainerWrapper,
  ModalBackgroundWrapper,
  ModalRootWrapper,
  ModalButtonContainerWrapper,
} from "./styled";

/* -------------------------------------------------------------------
 * Modal Context
 * ------------------------------------------------------------------- */

interface IModalContextProps {
  open: boolean;
  /** 모달 닫기 함수 */
  onClose: (() => void) | null; // @rushstack/no-new-null 걸림 ㅠ..
}

const ModalContext: Context<IModalContextProps> =
  createContext<IModalContextProps>({
    open: false,
    onClose: null,
  });

/**
 * Modal 하위 컴포넌트에서 사용되는지 검사를 위한 훅
 */
const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("Modal Context 내에서만 사용 가능합니다.");
  }
  return context;
};

/* -------------------------------------------------------------------
 * Modal Root
 * ------------------------------------------------------------------- */

export interface IModalRootProps {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
  className?: string;
}

/**
 * Modal Root
 * @param children
 * @param open 모달 열렸는지 닫혔는지
 * @param onClose 닫기 함수
 * @param className 스타일링 / 구분을 위한 className
 * @constructor
 */
const ModalRoot = ({
  children,
  open,
  onClose,
  className = "",
}: IModalRootProps) => {
  return (
    <ModalRootWrapper open={open} className={className}>
      <ModalContext.Provider value={{ open, onClose }}>
        {children}
      </ModalContext.Provider>
    </ModalRootWrapper>
  );
};

/* -------------------------------------------------------------------
 * Modal Background
 * ------------------------------------------------------------------- */

interface IModalBackgroundProps {
  hasClickEvent?: boolean;
}

/**
 * Modal의 배경
 * @param hasClickEvent 배경 클릭 시 닫힐지 여부
 */
const ModalBackground = ({ hasClickEvent }: IModalBackgroundProps) => {
  const { onClose } = useModal();
  return (
    <ModalBackgroundWrapper onClick={(hasClickEvent && onClose) || undefined} />
  );
};

/* -------------------------------------------------------------------
 * Modal Container
 * ------------------------------------------------------------------- */

interface IModalContainerProps {
  children: React.ReactNode;
}

/**
 * 실제 Modal에 들어갈 content를 담는 container
 * @param children
 */
const ModalContainer = ({ children }: IModalContainerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { open, onClose } = useModal();

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        // 눌린 Key가 ESC면서 open=true 상태
        onClose!(); // 여기로 넘어왔다는건 확실하게 있다는거니까 타입 단언
      }
    };
    if (open) {
      // open=true가 되면 keydown 이벤트에 handleEscape 넣기
      document.addEventListener("keydown", handleEscape);
      containerRef.current?.focus();
    }
    return () => {
      // 언마운트 될 때 제거
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open, onClose]);

  return (
    <ModalContainerWrapper ref={containerRef}>{children}</ModalContainerWrapper>
  );
};

/* -------------------------------------------------------------------
 * Modal Header
 * ------------------------------------------------------------------- */

interface IModalHeaderProps {
  title?: string;
  hasCloseButton?: boolean;
}

/**
 * Modal의 Header
 * @param title 제목
 * @param hasCloseButton closeButton(X) 있을지 여부 (default=true)
 */
const ModalHeader = ({ title, hasCloseButton = true }: IModalHeaderProps) => {
  const { onClose } = useModal();
  return (
    <ModalHeaderWrapper>
      {title && <Text content={title} variant="body1" />}
      {hasCloseButton && (
        <IconButton
          icon={XIcon}
          size="s"
          backgroundColor="transparent"
          onClick={onClose || undefined}
        />
      )}
    </ModalHeaderWrapper>
  );
};

/* -------------------------------------------------------------------
 * Modal Body
 * ------------------------------------------------------------------- */

interface IModalBodyProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Modal의 실제 내용이 들어갈 Body
 * @param children
 * @param className 스타일링을 위한 className
 */
const ModalBody = ({ children, className = "" }: IModalBodyProps) => {
  return <ModalBodyWrapper className={className}>{children}</ModalBodyWrapper>;
};

/* -------------------------------------------------------------------
 * Modal ButtonContainer
 * ------------------------------------------------------------------- */

export interface IButton {
  title: string;
  background?: ITextButtonProps["backgroundColor"];
  onClick?: () => void;
}

export interface IModalButtonContainerProps {
  buttons: IButton[];
  direction?: "horizontal" | "vertical";
}

/**
 * Modal Footer 버튼 그룹
 * @param buttons 버튼 목록
 * @param direction 버튼이 표시될 방향
 */
const ModalButtonContainer = ({
  buttons,
  direction = "horizontal",
}: IModalButtonContainerProps) => {
  return (
    <ModalButtonContainerWrapper direction={direction}>
      {buttons.map(({ title, background, onClick }, idx) => (
        <TextButton
          key={`modal_buttons_${title}_${idx}`}
          text={title}
          backgroundColor={background}
          onClick={onClick}
        />
      ))}
    </ModalButtonContainerWrapper>
  );
};

/* -------------------------------------------------------------------
 * Export
 * ------------------------------------------------------------------- */

export const Modal: typeof ModalRoot & {
  Background: typeof ModalBackground;
  Container: typeof ModalContainer;
  Header: typeof ModalHeader;
  Body: typeof ModalBody;
  ButtonContainer: typeof ModalButtonContainer;
} = Object.assign(ModalRoot, {
  Background: ModalBackground,
  Container: ModalContainer,
  Header: ModalHeader,
  Body: ModalBody,
  ButtonContainer: ModalButtonContainer,
});
