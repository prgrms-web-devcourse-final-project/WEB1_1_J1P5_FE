import styled from "@emotion/styled";
import { IconButtonWrapper } from "components/atoms/Button/IconButton/styled";
import { IconWithTextWrapper } from "components/molecules/IconWithText/styled";
import { ThemeType } from "styles/theme";

export const ButtonsWrapper: ReturnType<typeof styled.div> = styled.div`
  display: flex;
  gap: 0.125rem;

  ${IconButtonWrapper} {
    height: 40px;
  }
`;

export const HeaderWrapper: ReturnType<typeof styled.header> = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  //15px : 0.9375rem
  padding: 0.9375rem 1rem;
  background-color: ${({ theme }: { theme: ThemeType }) => theme.colors.white};

  ${IconWithTextWrapper} {
    gap: 2px;
  }
`;
