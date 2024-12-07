import styled from "@emotion/styled";

export const ImageUploadWrapper: ReturnType<typeof styled.div> = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  border-radius: 10px;

  &:hover {
    background-color: #00000022;
  }
`;

export const UploadedImageCounterContainer: ReturnType<
  typeof styled.div
> = styled.div`
  background-color: #f4f6f9;
  text-align: center;
  padding: 1rem;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;
