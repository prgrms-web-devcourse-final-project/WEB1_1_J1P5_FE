import styled from "@emotion/styled";
import { MapWrapper } from "components/organisms/Map/styled";

export const LocationConfirmationContainer: ReturnType<
  typeof styled.div
> = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
`;

export const NeighborhoodAuthFormWrapper: ReturnType<
  typeof styled.div
> = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  ${MapWrapper} {
    height: 40vh;
  }

  ${LocationConfirmationContainer} {
    flex: 1;
  }
`;
