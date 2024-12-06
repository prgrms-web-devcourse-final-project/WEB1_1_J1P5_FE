import styled from "@emotion/styled";
import { ThemeType } from "styles/theme";

const ChatDayWarpper: ReturnType<typeof styled.div> = styled.div`
  min-width: 100px;
  max-width: 302px;
  background-color: ${({ theme }: { theme: ThemeType }) =>
    theme.colors.grey_button_deactivate};

  p {
    color: ${({ theme }: { theme: ThemeType }) => theme.colors.black};
  }
  border-radius: 1rem;
  display: flex;
  justify-content: center;
`;

export default ChatDayWarpper;
