import styled from "@emotion/styled";
import { IImage } from ".";

export const ImageWrapper: ReturnType<
  typeof styled.img<IImage>
> = styled.img<IImage>`
  border-radius: ${({ type }) => (type === "round" ? "50%" : "16px")};
`;
