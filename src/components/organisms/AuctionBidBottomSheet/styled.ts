import type { ComponentProps } from "react";
import styled, { type StyledComponent } from "@emotion/styled";
import { ModalBottomSheet } from "components/molecules";

export const AuctionBidBottomSheetWrapper: StyledComponent<
  ComponentProps<typeof ModalBottomSheet>
> = styled(ModalBottomSheet)`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

