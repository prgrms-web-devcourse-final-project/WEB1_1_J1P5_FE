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
  width: 100%;
  max-width: 375px;

  /* bottom Nav Bar 빠질떄까지 임시 */
  margin-bottom: 50px;
  ${InputWrapper} {
    flex: 1;
  }
`;

export const ChatMessagesWrapper: ReturnType<typeof styled.div> = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 80px; // WriteBoxWrapper 만큼 빼야됨!!

  flex-grow: 1; /* 부모 컨테이너의 나머지 공간을 차지 */
  overflow-y: auto; /* 내부 스크롤 활성화 */
`;
