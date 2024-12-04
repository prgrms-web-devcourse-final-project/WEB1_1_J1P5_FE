import styled from "@emotion/styled";
import { MapWrapper } from "components/organisms/Map/styled";

export const PaddingWrapper: ReturnType<typeof styled.div> = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
`;

export const LocationPickerWrapper: ReturnType<typeof styled.div> = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: space-between;

  ${MapWrapper} {
    height: 60vh;
  }
`;
