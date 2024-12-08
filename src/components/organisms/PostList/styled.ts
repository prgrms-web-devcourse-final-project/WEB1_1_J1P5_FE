import styled from "@emotion/styled";
import { ThemeType } from "styles/theme";

export const PostListWrapper: ReturnType<typeof styled.div> = styled.div`
  display: flex;
  flex-direction: column;

  .sell-price-con {
    p {
      color: ${({ theme }: { theme: ThemeType }) =>
        theme.colors.grey_text_guide};
    }
  }
  .sell-remain-con {
    p {
      color: ${({ theme }: { theme: ThemeType }) =>
        theme.colors.grey_text_guide};
    }
  }

  .sell-max-price-con {
    display: flex;
    justify-content: flex-end;
    gap: 0.25rem;
  }
`;
