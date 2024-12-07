import styled from "@emotion/styled";
import { KebabMenuWrapper } from "components/molecules/KebabMenu/styled";

export const KebabWrapper: ReturnType<typeof styled.div> = styled.div`
  position: relative;
  ${KebabMenuWrapper} {
    position: absolute;
    right: 0;
    z-index: 99999;
    width: max-content;
    transform: translate(-1rem, -3rem);
  }
`;
