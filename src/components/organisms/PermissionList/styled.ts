import styled from "@emotion/styled";

export const PermissionListWrapper: ReturnType<typeof styled.div> = styled.div`
  height: 100%;

  white-space: pre-line;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 64px;

  .permission-con {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
`;
