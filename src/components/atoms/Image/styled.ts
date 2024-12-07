import styled from "@emotion/styled";
import { IImage } from ".";

export const ImageWrapper: ReturnType<
  typeof styled.div<IImage>
> = styled.div<IImage>`
  border-radius: ${({ type }) =>
    type === "round" ? "50%" : type === "square" ? "10px" : "0px"};
  overflow: hidden;
  ${({ type }) => type !== "default" && "aspect-ratio: 1 / 1;"}
  width: 100%;
  height: 100%;
`;

export const ImageElementWrapper: ReturnType<typeof styled.img> = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
