import styled from "@emotion/styled";

export const StickerWrapper: ReturnType<typeof styled.div> = styled.div`
  display: flex;
  justify-content: center;
  transform: scale(0.8); /* 1.5배 확대 */
  transform-origin: center; /* 스케일의 기준점을 중앙으로 설정 */
`;
