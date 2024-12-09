import styled from "@emotion/styled";
import { TitleBoldWrapper } from "components/atoms/Text/styled";
import { IconWithTextWrapper } from "components/molecules/IconWithText/styled";
import { ThemeType } from "styles/theme";

export const NeighborhoodSelectionListWrapper: ReturnType<
  typeof styled.div
> = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  ${TitleBoldWrapper} {
    color: ${({ theme }: { theme: ThemeType }) => theme.colors.blue_main};
  }

  ${IconWithTextWrapper} {
    gap: 10px;
    cursor: pointer;
    :hover {
      background: ${({ theme }: { theme: ThemeType }) =>
        theme.colors.grey_button_deactivate};
    }
  }
`;
