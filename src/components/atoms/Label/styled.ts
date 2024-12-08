import styled from "@emotion/styled";

export const LabelWrapper: ReturnType<typeof styled.label> = styled.label`
  // TODO: 코드 나중에 정리
  color: var(--grey-main-text, #2d2d39);

  /* 설명/bold */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 145%; /* 20.3px */
  letter-spacing: -0.35px;
`;
