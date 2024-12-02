import { css, Global } from "@emotion/react";

export const GlobalStyle = () => {
  return (
    <Global
      styles={() => css`
        // Font
        // ...
        // RootContainer
        body {
          background-color: #212121; // 임시
        }
        #root {
          display: flex;
          justify-content: center;
        }
      `}
    />
  );
};
