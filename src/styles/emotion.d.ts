import "@emotion/react";
import { defaultTheme } from "./theme"; // 테마 파일에서 기본 테마를 가져옵니다.

type ThemeType = typeof defaultTheme; // 여기에서 타입을 가져옵니다.

declare module "@emotion/react" {
  export interface Theme extends ThemeType {} // Theme 인터페이스에 타입 추가
}
