import type { Preview } from "@storybook/react";
import "../src/index.css";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { defaultTheme } from "../src/styles/theme"; // 테마를 임포트
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};
/** Storybook React-router 사용과 관련된 에러 핸들링
 * https://velog.io/@hyerimkimm/Storybook%EC%97%90%EC%84%9C-React-router-%EC%82%AC%EC%9A%A9-%EC%8B%9C-%EC%97%90%EB%9F%AC-%ED%95%B4%EA%B2%B0-%EB%B0%A9%EB%B2%95
 */
export const decorators = [
  (Story, context) => (
    <ThemeProvider theme={defaultTheme}>
      <MemoryRouter initialEntries={context.parameters.initialEntries || ["/"]}>
        <Story />
      </MemoryRouter>
    </ThemeProvider>
  ),
];
export default preview;
