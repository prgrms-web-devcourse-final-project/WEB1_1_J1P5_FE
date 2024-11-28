import styled from "@emotion/styled";
import { IconButtonWrapper } from "components/atoms/Button/IconButton/styled";
import { Body1Wrapper } from "components/atoms/Text/styled";

export const PostImageItemWrapper: ReturnType<typeof styled.div> = styled.div`
  position: relative;

  max-width: 100px;
  ${IconButtonWrapper} {
    position: absolute;
    top: 0;
    right: 0;
  }

  ${Body1Wrapper} {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    white-space: nowrap;
  }
`;
