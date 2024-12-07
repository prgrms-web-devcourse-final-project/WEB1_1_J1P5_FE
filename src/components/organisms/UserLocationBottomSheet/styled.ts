import type { ComponentProps } from "react";
import styled, { type StyledComponent } from "@emotion/styled";
import { ModalBottomSheet } from "components/molecules";
import { TextButtonWrapper } from "components/atoms/Button/TextButton/styled";

export const UserLocationBottomSheetWrapper: StyledComponent<
  ComponentProps<typeof ModalBottomSheet>
> = styled(ModalBottomSheet)`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  ${TextButtonWrapper} {
    margin: 0;
  }
`;
