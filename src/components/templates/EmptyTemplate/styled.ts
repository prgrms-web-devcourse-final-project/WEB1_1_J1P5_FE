import styled from "@emotion/styled";

export const EmptyTemplateWrapper: ReturnType<typeof styled.div> = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  white-space: break-spaces;
  text-align: center;

  height: 100%;
  padding: 5rem 0 0.625rem 0;

  .text-con {
    display: flex;
    justify-content: center;
  }
`;
