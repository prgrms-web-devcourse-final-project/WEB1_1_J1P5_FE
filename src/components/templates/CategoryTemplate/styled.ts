import styled from "@emotion/styled";

export const CategoryTemplateWrapper: ReturnType<
  typeof styled.div
> = styled.div`
  width: 100%;
  /* 임시로 높이 주어서 합쳐지게 구성 */
  height: 500px;
  display: flex;
  margin: 1rem 1rem 0 1rem;
`;
