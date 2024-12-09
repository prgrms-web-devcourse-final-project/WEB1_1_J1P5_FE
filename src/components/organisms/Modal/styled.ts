import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Body1Wrapper } from "components/atoms/Text/styled";
import { TextButtonWrapper } from "components/atoms/Button/TextButton/styled";
import type { IModalButtonContainerProps, IModalRootProps } from ".";

// Modal Background
export const ModalBackgroundWrapper: ReturnType<typeof styled.div> = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #00000011;
  backdrop-filter: blur(5px);
`;

// Modal Header
export const ModalHeaderWrapper: ReturnType<typeof styled.div> = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 1rem 1rem 0.5rem;
  ${Body1Wrapper} {
    flex: 1;
  }
`;

// Modal Body
export const ModalBodyWrapper: ReturnType<typeof styled.div> = styled.div`
  padding: 1rem;
`;

// Modal ButtonContainer
export const ModalButtonContainerWrapper: ReturnType<
  typeof styled.div<Pick<IModalButtonContainerProps, "direction">>
> = styled.div<Pick<IModalButtonContainerProps, "direction">>`
  padding: 0 1rem 1rem;
  display: flex;
  flex-direction: ${({ direction }) =>
    direction === "horizontal" ? "row" : "column"};
  flex-wrap: wrap; // small mobile에서 깨짐 현상 수정
  gap: 0.25rem;
  ${TextButtonWrapper} {
    flex: ${({ direction }) => (direction === "horizontal" ? "1" : "auto")};
    margin: 0;
  }
`;

// Modal Container
export const ModalContainerWrapper: ReturnType<typeof styled.div> = styled.div`
  width: calc(100% - 2rem); // 100% - 양 옆 1rem(16px)씩
  max-width: 500px;
  background-color: white;
  border-radius: 1rem;
  position: relative;
`;

// Modal open 여부에 따른 스타일
const modalConfig = (open: boolean) => css`
  visibility: ${open ? "visible" : "hidden"};
  opacity: ${open ? 1 : 0};
`;

// Modal Root
export const ModalRootWrapper: ReturnType<
  typeof styled.div<Pick<IModalRootProps, "open">>
> = styled.div<Pick<IModalRootProps, "open">>`
  position: fixed;
  top: 0;
  left: 50%;
  translate: -50%;
  z-index: 9999;
  max-width: ${({ theme }) => theme.sizes.max_width};
  width: 100%;
  height: 100%;
  // 자식 요소 배치
  display: flex;
  justify-content: center;
  align-items: center;
  // 애니메이션
  transition: 0.3s;
  // open 여부에 따른 스타일
  ${({ open }) => modalConfig(open)};
`;
