import styled from "@emotion/styled";
import { MapWrapper } from "components/organisms/Map/styled";

export const TransactionLocationTemplateWrapper: ReturnType<
  typeof styled.div
> = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;

  width: 100%;
  height: calc(100vh - 3rem);

  ${MapWrapper} {
    height: 100%;
  }
`;

