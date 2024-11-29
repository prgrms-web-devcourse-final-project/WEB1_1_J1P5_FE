import styled from "@emotion/styled";
import { InputWrapper } from "components/atoms/Input/styled";

export const ChatBubblesWrapper: ReturnType<typeof styled.div> = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

export const WriteBoxWrapper: ReturnType<typeof styled.div> = styled.div`
  padding: 1rem;
  background-color: #eeeeee;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  ${InputWrapper} {
    flex: 1;
  }
`;

export const ChatMessagesWrapper: ReturnType<typeof styled.div> = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 64px; // WriteBoxWrapper 만큼 빼야됨!!
`;
