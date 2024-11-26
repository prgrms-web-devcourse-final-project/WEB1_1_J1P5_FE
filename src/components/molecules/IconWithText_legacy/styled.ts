import styled from "@emotion/styled";
import { IIconWithTextProps } from ".";

export const IconWithTextWrapper: ReturnType<
  typeof styled.div<IIconWithTextProps>
> = styled.div<IIconWithTextProps>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;

  cursor: pointer;

  .text-con {
    display: flex;
    flex-direction: column;
    order: ${({ iconLocation }) => (iconLocation === "default" ? "0" : "-1")};
  }
`;
