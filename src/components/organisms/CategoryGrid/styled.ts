import styled from "@emotion/styled";
import { ImageWrapper } from "components/atoms/Image/styled";
import { ThemeType } from "styles/theme";

export const CategoryGridWrapper: ReturnType<typeof styled.div> = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
`;

export const CategoryItemWrapper: ReturnType<typeof styled.div> = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-align: center;

  ${ImageWrapper} {
    border: 1px solid
      ${({ theme }: { theme: ThemeType }) => theme.colors.blue_main};
  }
`;
