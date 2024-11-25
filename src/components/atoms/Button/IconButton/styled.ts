import styled from "@emotion/styled";
import { IIconButtonProps } from ".";

export const IconButtonWrapper: ReturnType<
  typeof styled.div<IIconButtonProps>
> = styled.div<IIconButtonProps>`
  width: fit-content;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 4px;
  border-radius: ${({ type }) => (type === "square" ? "16px" : "50%")};
  background-color: ${({ backgroundColor }) =>
    backgroundColor === "transparent" ? "transparent" : "#D9D9D9"};

  cursor: pointer;
`;
