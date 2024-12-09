import styled from "@emotion/styled";
import { ThemeType } from "styles/theme";

export const EmptyTemplateWrapper: ReturnType<typeof styled.div> = styled.div`
  max-width: ${({ theme }: { theme: ThemeType }) => theme.sizes.max_width};
  background-color: ${({ theme }: { theme: ThemeType }) => theme.colors.white};
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  white-space: break-spaces;
  text-align: center;

  height: 100%;
  padding: 5rem 0 0.625rem 0;

  .text-con {
    display: flex;
    justify-content: center;
  }

  &.error {
    height: 100vh;
  }
`;
