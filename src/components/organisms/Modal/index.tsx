import { type Context, createContext, useContext } from "react";
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

interface IModalContextProps {
  onClose: () => void;
}

const ModalContext: Context<IModalContextProps> =
  createContext<IModalContextProps>({
    onClose: () => {},
  });

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
      <ModalContext.Provider value={{ onClose }}>
        {children}
      </ModalContext.Provider>
    </ModalRootWrapper>
  );
};

interface IModalBackgroundProps {
  hasClickEvent?: boolean;
}

/**
 * Modal의 배경
 * @param hasClickEvent 배경 클릭 시 닫힐지 여부
 */
const ModalBackground = ({ hasClickEvent }: IModalBackgroundProps) => {
  const { onClose } = useContext(ModalContext);
  return (
    <ModalBackgroundWrapper onClick={hasClickEvent ? onClose : () => {}} />
  );
};

interface IModalContainerProps {
  children: React.ReactNode;
}

/**
 * 실제 Modal에 들어갈 content를 담는 container
 * @param children
 */
const ModalContainer = ({ children }: IModalContainerProps) => {
  return <ModalContainerWrapper>{children}</ModalContainerWrapper>;
};

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
  const { onClose } = useContext(ModalContext);
  return (
    <ModalHeaderWrapper>
      {title && <Text content={title} variant="body1" />}
      {hasCloseButton && (
        <IconButton
          icon={XIcon}
          size="s"
          backgroundColor="transparent"
          onClick={onClose}
        />
      )}
    </ModalHeaderWrapper>
  );
};

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
