import styled from "@emotion/styled";

const CommonImageStyle: ReturnType<typeof styled.div> = styled.div`
  position: absolute;
  width: 75%;
  height: 75%;
`;

export const BackImageWrapper: typeof CommonImageStyle = styled(
  CommonImageStyle,
)`
  top: 0;
  left: 0;
`;

export const FrontImageWrapper: typeof CommonImageStyle = styled(
  CommonImageStyle,
)`
  right: 0;
  bottom: 0;
`;

export const OverlappingImageContainer: ReturnType<typeof styled.div> =
  styled.div`
    position: relative;
    aspect-ratio: 1 / 1;
  `;
