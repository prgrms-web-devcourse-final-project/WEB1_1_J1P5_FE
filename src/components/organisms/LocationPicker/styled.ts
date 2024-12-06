import styled from "@emotion/styled";
import { IconButtonWrapper } from "components/atoms/Button/IconButton/styled";
import { TextButtonWrapper } from "components/atoms/Button/TextButton/styled";
import { MapWrapper } from "components/organisms/Map/styled";

export const PaddingWrapper: ReturnType<typeof styled.div> = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0 1rem;
  width: 100%;
`;

export const LocationPickerWrapper: ReturnType<typeof styled.div> = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  gap: 1rem;

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
`;
