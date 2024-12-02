import styled from "@emotion/styled";

export const SearchResultsTemplateWrapper: ReturnType<
  typeof styled.div
> = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  .post-con {
    flex: 1;
    overflow-y: auto;
  }
`;
