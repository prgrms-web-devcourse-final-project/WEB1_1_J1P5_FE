import styled from "@emotion/styled";
import { MapWrapper } from "components/organisms/Map/styled";
import { IconButtonWrapper } from "components/atoms/Button/IconButton/styled";
import { TextButtonWrapper } from "components/atoms/Button/TextButton/styled";

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
  position: relative;

  ${MapWrapper} {
    flex: 1;
  }

  ${IconButtonWrapper} {
    // TODO: Map 컴포넌트가 더 우선순위가 높음
    bottom: 6rem !important;
  }

  ${TextButtonWrapper} {
    position: absolute;
    width: calc(100% - 2rem);
    bottom: 2rem;
  }

  ${LocationConfirmationContainer} {
    // flex: 1;
  }
`;
