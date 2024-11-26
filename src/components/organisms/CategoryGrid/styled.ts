import styled from "@emotion/styled";

export const CategoryGridWrapper: ReturnType<typeof styled.div> = styled.div`
  width: 375px;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  /** 둘의 차이가 무엇인지...
   * grid-template-columns: repeat(4, 1fr);
  */
  gap: 8px;
`;
