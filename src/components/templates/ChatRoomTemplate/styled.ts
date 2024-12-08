import styled from "@emotion/styled";
import { ThemeType } from "styles/theme";

export const ChatRoomTemplateWrapper: ReturnType<
  typeof styled.div
> = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: ${({ theme }: { theme: ThemeType }) =>
    theme.colors.grey_button_deactivate};

  padding-top: 3rem;
`;
