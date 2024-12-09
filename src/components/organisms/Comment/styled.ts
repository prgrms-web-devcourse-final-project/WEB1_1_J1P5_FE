import styled from "@emotion/styled";
import { InputWrapper } from "components/atoms/Input/styled";
import { TextButtonWrapper } from "components/atoms/Button/TextButton/styled";
import { InputWithButtonWrapper } from "components/molecules/InputWithButton/styled";
import { TitleBoldWrapper } from "components/atoms/Text/styled";
import {
  CommentItemContainer,
  CommentItemWrapper,
} from "../CommentItem/styled";

export const CommentListWrapper: ReturnType<typeof styled.div> = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  & > ${CommentItemContainer} {
    & > ${CommentItemWrapper} {
      &.deleted {
        padding: 1rem;
      }
    }
  }
`;

export const CommentWriteBoxWrapper: ReturnType<typeof styled.div> = styled.div`
  ${InputWrapper} {
    flex: 1;
  }
`;

export const CommentWrapper: ReturnType<typeof styled.div> = styled.div`
  display: flex;
  flex-direction: column;
  & > ${TitleBoldWrapper} {
    padding: 1rem;
    color: ${({ theme }) => theme.colors.blue_main};
  }
  ${InputWithButtonWrapper} {
    padding: 0.5rem 1rem;
    ${InputWrapper} {
      font-size: ${({ theme }) => theme.fontStyles.desc_regular.size};
      line-height: ${({ theme }) => theme.fontStyles.desc_regular.height};
      font-weight: ${({ theme }) => theme.fontStyles.desc_regular.bold};
      color: ${({ theme }) => theme.colors.grey_text_main};
      background-color: ${({ theme }) => theme.colors.grey_button_deactivate};
    }
    ${TextButtonWrapper} {
      margin: 0;
      flex-shrink: 0;
      width: 3rem;
      height: 3rem;
      background-color: ${({ theme }) => theme.colors.blue_text};
    }
  }
`;
