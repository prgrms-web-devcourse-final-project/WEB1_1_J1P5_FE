import type { ComponentProps } from "react";
import styled, { type StyledComponent } from "@emotion/styled";
import { ModalBottomSheet } from "components/molecules";
import { TextButtonWrapper } from "components/atoms/Button/TextButton/styled";

export const MenuBottomSheetWrapper: StyledComponent<
  ComponentProps<typeof ModalBottomSheet>
> = styled(ModalBottomSheet)`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 0.125rem 0 0;
  overflow: hidden;
  ${TextButtonWrapper} {
    position: relative;
    &:hover {
      background-color: #f9f9f9;
    }
    &:not(:last-child)::after {
      content: "";
      display: block;
      position: absolute;
      bottom: -0.125rem;
      width: 100%;
      border-bottom: 1px solid #d9d9d9;
    }
  }
`;
