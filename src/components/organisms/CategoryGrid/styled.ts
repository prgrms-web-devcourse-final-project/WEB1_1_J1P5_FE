import styled from "@emotion/styled";

export const CategoryGridWrapper: ReturnType<typeof styled.div> = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
`;

export const CategoryItemWrapper: ReturnType<typeof styled.div> = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
`;
