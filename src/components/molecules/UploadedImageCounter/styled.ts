import styled from "@emotion/styled";

export const ImageUploadWrapper: ReturnType<typeof styled.div> = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const UploadedImageCounterContainer: ReturnType<typeof styled.div> =
  styled.div`
    background-color: #d9d9d9;
    text-align: center;
    padding: 1rem;
    position: relative;
  `;
