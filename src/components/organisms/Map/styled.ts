import styled from "@emotion/styled";
import { IconButtonWrapper } from "components/atoms/Button/IconButton/styled";
import { TextButtonWrapper } from "components/atoms/Button/TextButton/styled";
import { ImageWrapper } from "components/atoms/Image/styled";

export const MapWrapper: ReturnType<typeof styled.div> = styled.div`
  top:0;
  left:0;
  width: 100%;
  height: 80vh;


  ${IconButtonWrapper} {
    position: absolute;
    bottom: 32px;
    right: 16px;
    background: #fff;
    outline: none;
    box-shadow: 2px 2px 1px 1px rgba(0, 0, 0, 0.5);
  }

  ${TextButtonWrapper}{
    width: 100%;
    box-shadow: 2px 2px 1px 1px rgba(0, 0, 0, 0.5);
  }
}
`;

export const CenterMarkerWrapper: ReturnType<typeof styled.div> = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(
    -50%,
    -85%
  ); // 마커라서 위치 조정 (위경도가 100% 정확하지는 않음)
  pointer-events: none;

  ${ImageWrapper} {
    width: 40px;
    height: 40px;
  }
`;
