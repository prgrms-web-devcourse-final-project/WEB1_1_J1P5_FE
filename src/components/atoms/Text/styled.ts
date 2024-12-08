import styled from "@emotion/styled";
import { css, SerializedStyles } from "@emotion/react";
import { ThemeType } from "styles/theme";

const commonStyles: SerializedStyles = css`
  line-height: 140%;
  letter-spacing: -2.5%;
`;

export const H1Wrapper: ReturnType<typeof styled.p> = styled.h1<{
  color?: string;
}>`
  font-size: 6rem;
  font-weight: bold;
  color: ${({ color }) => color || "inherit"};
  ${commonStyles};
`;

export const H5Wrapper: ReturnType<typeof styled.p> = styled.h5<{
  color?: string;
}>`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ color }) => color || "inherit"};
  ${commonStyles};
`;

export const Body1Wrapper: ReturnType<typeof styled.p> = styled.p<{
  color?: string;
}>`
  font-size: 1rem;
  color: ${({ color }) => color || "inherit"};
  ${commonStyles};
`;

export const ButtonWrapper: ReturnType<typeof styled.p> = styled.p<{
  color?: string;
}>`
  font-size: 0.875rem;
  color: ${({ color }) => color || "inherit"};
  ${commonStyles};
`;
/** 테마 적용  line-height 가 겹치는 부분이 많은데 이후에 유지 보수 쉽게 하기 위해 이런 형태로 구성하였습니다.*/
export const TitleBoldWrapper: ReturnType<typeof styled.p> = styled.p<{
  color?: string;
}>`
  ${commonStyles};
  color: ${({ color }) => color || "inherit"};
  font-size: ${({ theme }: { theme: ThemeType }) =>
    theme.fontStyles.title_bold.size};
  font-weight: ${({ theme }: { theme: ThemeType }) =>
    theme.fontStyles.title_bold.bold};
  line-height: ${({ theme }: { theme: ThemeType }) =>
    theme.fontStyles.title_bold.height};
`;
export const TitleSemiBoldWrapper: ReturnType<typeof styled.p> = styled.p<{
  color?: string;
}>`
  ${commonStyles};
  color: ${({ color }) => color || "inherit"};
  font-size: ${({ theme }: { theme: ThemeType }) =>
    theme.fontStyles.title_semibold.size};
  font-weight: ${({ theme }: { theme: ThemeType }) =>
    theme.fontStyles.title_semibold.bold};
  line-height: ${({ theme }: { theme: ThemeType }) =>
    theme.fontStyles.title_semibold.height};
`;

export const DescRegularWrapper: ReturnType<typeof styled.p> = styled.p<{
  color?: string;
}>`
  ${commonStyles};
  color: ${({ color }) => color || "inherit"};
  font-size: ${({ theme }: { theme: ThemeType }) =>
    theme.fontStyles.desc_regular.size};
  font-weight: ${({ theme }: { theme: ThemeType }) =>
    theme.fontStyles.desc_regular.bold};
  line-height: ${({ theme }: { theme: ThemeType }) =>
    theme.fontStyles.desc_regular.height};
`;

export const DescBoldWrapper: ReturnType<typeof styled.p> = styled.p<{
  color?: string;
}>`
  ${commonStyles};
  color: ${({ color }) => color || "inherit"};
  font-size: ${({ theme }: { theme: ThemeType }) =>
    theme.fontStyles.desc_bold.size};
  font-weight: ${({ theme }: { theme: ThemeType }) =>
    theme.fontStyles.desc_bold.bold};
  line-height: ${({ theme }: { theme: ThemeType }) =>
    theme.fontStyles.desc_bold.height};
`;

export const ExplainRegularWrapper: ReturnType<typeof styled.p> = styled.p<{
  color?: string;
}>`
  ${commonStyles};
  color: ${({ color }) => color || "inherit"};
  font-size: ${({ theme }: { theme: ThemeType }) =>
    theme.fontStyles.explan_regular.size};
  font-weight: ${({ theme }: { theme: ThemeType }) =>
    theme.fontStyles.explan_regular.bold};
  line-height: ${({ theme }: { theme: ThemeType }) =>
    theme.fontStyles.explan_regular.height};
`;
export const ExplainBoldWrapper: ReturnType<typeof styled.p> = styled.p<{
  color?: string;
}>`
  ${commonStyles};
  color: ${({ color }) => color || "inherit"};
  font-size: ${({ theme }: { theme: ThemeType }) =>
    theme.fontStyles.explan_bold.size};
  font-weight: ${({ theme }: { theme: ThemeType }) =>
    theme.fontStyles.explan_bold.bold};
  line-height: ${({ theme }: { theme: ThemeType }) =>
    theme.fontStyles.explan_bold.height};
`;

export const TagRegularWrapper: ReturnType<typeof styled.p> = styled.p<{
  color?: string;
}>`
  ${commonStyles};
  color: ${({ color }) => color || "inherit"};
  font-size: ${({ theme }: { theme: ThemeType }) =>
    theme.fontStyles.tag_regular.size};
  font-weight: ${({ theme }: { theme: ThemeType }) =>
    theme.fontStyles.tag_regular.bold};
  line-height: ${({ theme }: { theme: ThemeType }) =>
    theme.fontStyles.tag_regular.height};
`;

export const WritingBoldWrapper: ReturnType<typeof styled.p> = styled.p<{
  color?: string;
}>`
  ${commonStyles};
  color: ${({ color }) => color || "inherit"};
  font-size: ${({ theme }: { theme: ThemeType }) =>
    theme.fontStyles.writing_bold.size};
  font-weight: ${({ theme }: { theme: ThemeType }) =>
    theme.fontStyles.writing_bold.bold};
  line-height: ${({ theme }: { theme: ThemeType }) =>
    theme.fontStyles.writing_bold.height};
`;

export const ButtonBoldWrapper: ReturnType<typeof styled.p> = styled.p<{
  color?: string;
}>`
  ${commonStyles};
  color: ${({ color }) => color || "inherit"};
  font-size: ${({ theme }: { theme: ThemeType }) =>
    theme.fontStyles.btn_bold.size};
  font-weight: ${({ theme }: { theme: ThemeType }) =>
    theme.fontStyles.btn_bold.bold};
  line-height: ${({ theme }: { theme: ThemeType }) =>
    theme.fontStyles.btn_bold.height};
`;

export const BadgeRegularWrapper: ReturnType<typeof styled.p> = styled.p<{
  color?: string;
}>`
  ${commonStyles};
  color: ${({ color }) => color || "inherit"};
  font-size: ${({ theme }: { theme: ThemeType }) =>
    theme.fontStyles.badge_regular.size};
  font-weight: ${({ theme }: { theme: ThemeType }) =>
    theme.fontStyles.badge_regular.bold};
  line-height: ${({ theme }: { theme: ThemeType }) =>
    theme.fontStyles.badge_regular.height};
`;
