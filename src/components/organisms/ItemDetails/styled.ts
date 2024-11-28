import styled from "@emotion/styled";
import { Body1Wrapper } from "components/atoms/Text/styled";

export const CategoryAndCreatedAtWrapper: ReturnType<typeof styled.div> =
  styled.div`
    display: flex;
    gap: 0.25rem;
  `;
export const ItemDetailsHeader: ReturnType<typeof styled.div> = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const DescriptionWrapper: ReturnType<typeof styled.div> = styled.div`
  ${Body1Wrapper} {
    white-space: break-spaces;
  }
`;

export const ItemDetailsWrapper: ReturnType<typeof styled.div> = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
