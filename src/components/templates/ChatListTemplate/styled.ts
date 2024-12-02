import styled from "@emotion/styled";

export const ChatListTemplateWrapper: ReturnType<
  typeof styled.div
> = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 2rem);
  gap: 16px;

  .chat-con {
    flex: 1;
    overflow-y: auto;
  }
`;
