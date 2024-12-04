import styled from "@emotion/styled";

export const NeighborhoodAuthTemplateWrapper: ReturnType<
  typeof styled.div
> = styled.div`
  position: fixed;
  padding: 0;
  left: 0;
  bottom: 0;

  width: 100%;
  height: calc(100vh - 3rem);
`;
