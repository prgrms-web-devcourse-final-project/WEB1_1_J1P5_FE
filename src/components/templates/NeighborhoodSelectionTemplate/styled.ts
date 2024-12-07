import styled from "@emotion/styled";
import { TextButtonWrapper } from "components/atoms/Button/TextButton/styled";
import { IconWrapper } from "components/atoms/Icon/styled";
import { NeighborhoodSelectionListWrapper } from "components/organisms/NeighborhoodSelectionList/styled";

export const NeighborhoodSelectionTemplateWrapper: ReturnType<
  typeof styled.div
> = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  gap: 1rem;
  padding: 1rem 1rem 0;
  background-color: #ffffff;

  ${NeighborhoodSelectionListWrapper} {
    flex: 1;
    overflow-y: auto;
    margin-bottom: 1rem;
  }
  ${TextButtonWrapper} {
    position: sticky;
    bottom: 0.625rem;
    margin: 0;
  }

  ${IconWrapper} {
    padding: 0.5rem;
  }
`;
