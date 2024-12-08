import styled from "@emotion/styled";

export const ImageUploadWrapper: ReturnType<typeof styled.div> = styled.div`
  width: 100%;
  height: 100%;
  input[type="file"] {
    cursor: pointer;
    width: 100%;
    height: 100%;
    opacity: 0;
    &::file-selector-button {
      display: none;
    }
  }
  // // 투명하게 변경했기 때문에 위치를 알기 위해 마우스 hover 색상 설정
  // &:hover {
  //   background-color: #00000022;
  // }
`;
