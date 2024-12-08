import styled from "@emotion/styled";
import { IIconWithTextContentProps, IIconWithTextProps } from ".";

export const IconWithTextWrapper: ReturnType<
  typeof styled.div<IIconWithTextProps>
> = styled.div<IIconWithTextProps>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  //cursor: pointer;
`;

export const IconWithTextContentWrapper: ReturnType<
  typeof styled.div<IIconWithTextContentProps>
> = styled.div<IIconWithTextContentProps>`
  display: flex;
  flex-direction: column;
`;
