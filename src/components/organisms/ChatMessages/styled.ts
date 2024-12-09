import styled from "@emotion/styled";
import { IconButtonWrapper } from "components/atoms/Button/IconButton/styled";
import { InputWrapper } from "components/atoms/Input/styled";
import { InputWithButtonWrapper } from "components/molecules/InputWithButton/styled";
import { ThemeType } from "styles/theme";

export const ChatBubblesWrapper: ReturnType<typeof styled.div> = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  .chat-date {
    display: flex;
    justify-content: center;
  }
`;

export const WriteBoxWrapper: ReturnType<typeof styled.div> = styled.div`
  position: fixed;
  padding: 1rem;
  background-color: ${({ theme }: { theme: ThemeType }) => theme.colors.white};
  max-width: ${({ theme }: { theme: ThemeType }) => theme.sizes.max_width};
  width: 100%;
  left: 50%;
  transform: translate(-50%);
  bottom: 0;
  ${InputWithButtonWrapper} {
  }

  ${InputWrapper} {
    flex: 1;
    padding: 0.9375rem;
    background-color: ${({ theme }: { theme: ThemeType }) =>
      theme.colors.grey_button_deactivate};
    border: none;
    input {
      background-color: ${({ theme }: { theme: ThemeType }) =>
        theme.colors.grey_button_deactivate};
      font-size: ${({ theme }: { theme: ThemeType }) =>
        theme.fontStyles.explan_bold.size};
      font-weight: ${({ theme }: { theme: ThemeType }) =>
        theme.fontStyles.explan_bold.bold};
      line-height: ${({ theme }: { theme: ThemeType }) =>
        theme.fontStyles.explan_bold.height};
    }
  }

  ${IconButtonWrapper} {
    width: 3rem;
    height: 3rem;
    border-radius: 10px;
    background-color: ${({ theme }: { theme: ThemeType }) =>
      theme.colors.blue_text};
  }
`;

export const ChatMessagesWrapper: ReturnType<typeof styled.div> = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 5rem; // WriteBoxWrapper 만큼 빼야됨!!

  flex-grow: 1; /* 부모 컨테이너의 나머지 공간을 차지 */
  overflow-y: auto; /* 내부 스크롤 활성화 */
`;
