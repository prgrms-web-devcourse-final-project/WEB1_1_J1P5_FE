import styled from "@emotion/styled";
import { TextButtonWrapper } from "components/atoms/Button/TextButton/styled";

export const KebabMenuWrapper: ReturnType<typeof styled.div> = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 0.5rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${10 / 16}rem;
  filter: drop-shadow(0 0 10px rgba(19, 27, 83, 0.05));
  ${TextButtonWrapper} {
    width: 100%;
    padding: 1rem;
    color: ${({ theme }) => theme.colors.grey_field_guide_but_deactivate};
    border-radius: 0;
    &:not(:last-child) {
      border-bottom: 1px solid
        ${({ theme }) => theme.colors.grey_field_deactivate};
    }
  }
`;
