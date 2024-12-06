import styled from "@emotion/styled";

export const ChatListTemplateWrapper: ReturnType<
  typeof styled.div
> = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  .chat-con {
    flex: 1;
    overflow-y: auto;
  }
`;
