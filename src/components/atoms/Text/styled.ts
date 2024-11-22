import styled from "@emotion/styled";
import { css, SerializedStyles } from "@emotion/react";

const commonStyles: SerializedStyles = css`
  line-height: 140%;
  letter-spacing: -2.5%;
`;

export const H1Wrapper: ReturnType<typeof styled.p> = styled.h1`
  font-size: 6rem;
  font-weight: bold;
  ${commonStyles};
`;

export const H5Wrapper: ReturnType<typeof styled.p> = styled.h5`
  font-size: 1.5rem;
  font-weight: bold;
  ${commonStyles};
`;

export const Body1Wrapper: ReturnType<typeof styled.p> = styled.p`
  font-size: 1rem;
  ${commonStyles};
`;

export const ButtonWrapper: ReturnType<typeof styled.p> = styled.p`
  font-size: 0.875rem;
  ${commonStyles};
`;
