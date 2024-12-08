import styled from "@emotion/styled";
import { ThemeType } from "styles/theme";

export const PostListWrapper: ReturnType<typeof styled.div> = styled.div`
  display: flex;
  flex-direction: column;

  .price-con {
    p {
      color: ${({ theme }: { theme: ThemeType }) =>
        theme.colors.grey_text_guide};
    }
  }
  .remain-con {
    p {
      color: ${({ theme }: { theme: ThemeType }) =>
        theme.colors.grey_text_guide};
    }
  }

  .max-price-con {
    display: flex;
    justify-content: flex-end;
    gap: 0.25rem;
  }

  .location-con {
    p {
      color: ${({ theme }: { theme: ThemeType }) =>
        theme.colors.grey_text_guide};
    }
  }
`;
