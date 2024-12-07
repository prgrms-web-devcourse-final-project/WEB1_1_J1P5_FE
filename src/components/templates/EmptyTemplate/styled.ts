import styled from "@emotion/styled";

export const EmptyTemplateWrapper: ReturnType<typeof styled.div> = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  white-space: break-spaces;

  height: 100%;
  padding: 5rem 0 1rem 0;

  .text-con {
    display: flex;
    justify-content: center;
  }
`;
