import styled from "@emotion/styled";
import { MapWrapper } from "components/organisms/Map/styled";

export const TransactionLocationTemplateWrapper: ReturnType<
  typeof styled.div
> = styled.div`
  width: 100%;

  ${MapWrapper} {
    height: 100%;
  }
`;
