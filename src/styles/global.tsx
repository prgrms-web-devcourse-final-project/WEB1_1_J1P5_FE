import { css, Global } from "@emotion/react";

export const GlobalStyle = () => {
  return (
    <Global
      styles={() => css`
        // Font

        @font-face {
          font-family: "Pretendard";
          src: url("https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
            format("woff");
          font-weight: 400;
          font-style: normal;
        }

        @font-face {
          font-family: "Pretendard";
          src: url("https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-SemiBold.woff")
            format("woff");
          font-weight: 600;
          font-style: normal;
        }

        @font-face {
          font-family: "Pretendard";
          src: url("https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Bold.woff")
            format("woff");
          font-weight: 700;
          font-style: normal;
        }

        // RootContainer
        body {
          background-color: #212121; // 임시
          font-family: "Pretendard", sans-serif;
        }
        #root {
          display: flex;
          justify-content: center;
        }
        button {
          font-family: "Pretendard", sans-serif;
        }
      `}
    />
  );
};
