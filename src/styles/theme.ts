/* eslint-disable @rushstack/typedef-var */
interface FontStyle {
  size: string;
  height: string; // line height
  bold: number;
}

export const defaultTheme = {
  sizes: {
    max_width: "402px",
    min_width: "375px",
  },
  colors: {
    white: "#ffffff",
    black: "#000000",
    red: "#ff224d",

    grey_text_main: "#2d2d39",
    grey_field_guide_but_deactivate: "#9b9fBc",
    grey_field_deactivate: "#eceef3",
    grey_text_guide: "#707192",
    grey_button_deactivate: "#f4f6f9",
    blue_main: "#344fff",
    blue_down: "#2036E2",
    blue_light: "#ebf5ff",
    blue_text: "#131b53",
  },
  fontStyles: {
    /**제목 bold */
    title_bold: {
      size: "1rem",
      height: "145%",
      bold: 700,
    } as FontStyle,
    title_semibold: {
      size: "1rem",
      height: "145%",
      bold: 600,
    } as FontStyle,
    /**설명 regular */
    desc_regular: {
      size: "0.875rem",
      height: "145%",
      bold: 400,
    } as FontStyle,
    /**설명 bold */
    desc_bold: {
      size: "0.875rem",
      height: "145%",
      bold: 600,
    } as FontStyle,
    /**가이드 regular */
    explan_regular: {
      size: "0.8125rem",
      height: "145%",
      bold: 400,
    } as FontStyle,
    /*가이드 bold */
    explan_bold: {
      size: "0.8125rem",
      height: "145%",
      bold: 600,
    } as FontStyle,
    /**태그 regular */
    tag_regular: {
      size: "0.75rem",
      height: "145%",
      bold: 400,
    } as FontStyle,
    /**라이팅 bold */
    writing_bold: {
      size: "1.5rem",
      height: "135%",
      bold: 600,
    } as FontStyle,
    /**버튼 bold */
    btn_bold: {
      size: "1.0625rem",
      height: "145%",
      bold: 600,
    } as FontStyle, // 인덱스 시그니처 추가,
    /**채팅쪽 배지 */
    badge_regular: {
      //11px
      size: "0.6875rem",
      height: "145%",
      bold: 400,
    } as FontStyle,
  } as { [key: string]: FontStyle }, // 인덱스 시그니처 추가,
};

// Theme 타입 정의
export type ThemeType = typeof defaultTheme;
