import styled from "@emotion/styled";
import { IconButtonWrapper } from "components/atoms/Button/IconButton/styled";

import { ImageWrapper } from "components/atoms/Image/styled";
import { KebabMenuWrapper } from "components/molecules/KebabMenu/styled";
import { InputWithButtonWrapper } from "components/molecules/InputWithButton/styled";
import { InputWrapper } from "components/atoms/Input/styled";

export const ReplyCommentWrapper: ReturnType<typeof styled.div> = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 0 1rem 1rem;
`;

export const ReplyWrapper: ReturnType<typeof styled.div> = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #eee;
  ${InputWithButtonWrapper} {
    padding: 0.5rem;
    ${InputWrapper} {
      background-color: #ffffff;
    }
  }
`;

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
    align-items: start;
  }
`;

export const CommentItemContainer: ReturnType<typeof styled.div> = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
