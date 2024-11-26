import styled from "@emotion/styled";

export const ButtonsWrapper: ReturnType<typeof styled.div> = styled.div`
  display: flex;
  gap: 0.125rem;
`;

export const HeaderWrapper: ReturnType<typeof styled.header> = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: #d9d9d9;
`;
