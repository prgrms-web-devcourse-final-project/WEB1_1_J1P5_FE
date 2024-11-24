import styled from "@emotion/styled";

export const BadgeWrapper: ReturnType<typeof styled.div> = styled.div`
  width: fit-content;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: gray;
  border-radius: 16px;
`;
