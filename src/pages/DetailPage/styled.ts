import styled from "@emotion/styled";

export const KebabWrapper: ReturnType<typeof styled.div> = styled.div`
  position: fixed;
  z-index: 99999;
  top: 1rem;
  right: 0;
  transform-origin: right;
  // 100vw 전체 width, 100% 현재 요소 width
  translate: calc(-1 * ((100vw - ${({ theme }) => theme.sizes.max_width}) / 2));
  @media only screen and (max-width: ${({ theme }) => theme.sizes.max_width}) {
    right: 1rem;
    translate: 0;
  }
`;
