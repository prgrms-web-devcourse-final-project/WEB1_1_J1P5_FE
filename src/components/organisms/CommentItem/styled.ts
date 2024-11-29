import styled from "@emotion/styled";
import { IconButtonWrapper } from "components/atoms/Button/IconButton/styled";

import { ImageWrapper } from "components/atoms/Image/styled";
import { KebabMenuWrapper } from "components/molecules/KebabMenu/styled";

export const CommentItemWrapper: ReturnType<typeof styled.div> = styled.div`
  display: flex;
  gap: 8px;
  position: relative;

  .content-con {
    display: flex;
    flex-direction: column;
  }

  ${ImageWrapper} {
    width: 55px;
  }
  .content-con {
    display: flex;
    justify-content: center;
    flex: 1;
  }
  .writer-create-con {
    display: flex;
    flex-direction: row;
    white-space: pre-wrap;
  }

  .separator {
    padding: 4px;
  }

  ${KebabMenuWrapper} {
    position: absolute;
    right: 0;
    transform: translate(-20%, 10%);
  }

  ${IconButtonWrapper} {
    height: max-content;
  }
`;
