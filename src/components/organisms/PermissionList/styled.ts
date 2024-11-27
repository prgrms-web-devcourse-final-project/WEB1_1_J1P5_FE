import styled from "@emotion/styled";

export const PermissionListWrapper: ReturnType<typeof styled.div> = styled.div`
  width: 375px;
  white-space: pre-line;

  display: flex;
  flex-direction: column;
  gap: 64px;

  .permission-con {
    min-height: 350px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
`;
