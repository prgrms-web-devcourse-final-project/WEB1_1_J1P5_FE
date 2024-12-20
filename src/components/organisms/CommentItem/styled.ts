import styled from "@emotion/styled";
import { IconButtonWrapper } from "components/atoms/Button/IconButton/styled";

import { ImageWrapper } from "components/atoms/Image/styled";
import { KebabMenuWrapper } from "components/molecules/KebabMenu/styled";
import {
  DescRegularWrapper,
  TitleBoldWrapper,
} from "components/atoms/Text/styled";
import { IconWrapper } from "components/atoms/Icon/styled";
import { BadgeWrapper } from "components/atoms/Badge/styled";

/**
 * 케밥메뉴
 */
export const KebabWrapper: ReturnType<typeof styled.div> = styled.div`
  ${KebabMenuWrapper} {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    z-index: 99999;
  }
`;

/**
 * 댓글 Header
 */
export const CommentHeaderContainer: ReturnType<typeof styled.div> = styled.div`
  display: flex;
  align-items: center;
  gap: ${12 / 16}rem;
  ${ImageWrapper} {
    width: 50px;
  }
  ${TitleBoldWrapper} {
    color: ${({ theme }) => theme.colors.grey_text_main};
  }
  ${DescRegularWrapper} {
    color: ${({ theme }) => theme.colors.grey_text_guide};
  }
  ${IconButtonWrapper} {
    color: ${({ theme }) => theme.colors.grey_field_guide_but_deactivate};
  }
`;

/**
 * 댓글 작성자 / 작성 시간
 */
export const WriterInformationWrapper: ReturnType<
  typeof styled.div
> = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const WriterBadgeWrapper: ReturnType<typeof styled.div> = styled.div`
  display: flex;
  align-items: center;
  gap: ${6 / 16}rem;
  ${BadgeWrapper} {
    font-size: ${({ theme }) => theme.fontStyles.tag_regular.size};
    line-height: ${({ theme }) => theme.fontStyles.tag_regular.height};
    font-weight: ${({ theme }) => theme.fontStyles.tag_regular.bold};
    color: ${({ theme }) => theme.colors.blue_text};
    background-color: ${({ theme }) => theme.colors.grey_field_deactivate};
    border-radius: ${4 / 16}rem;
    padding: ${3 / 16}rem ${6 / 16}rem;
  }
`;

/**
 * 댓글 내용
 */
export const CommentContentWrapper: ReturnType<typeof styled.div> = styled.div`
  white-space: pre-wrap;
  color: ${({ theme }) => theme.colors.grey_text_main};
`;

/**
 * 답글
 */
export const ReplyCommentWrapper: ReturnType<typeof styled.div> = styled.div`
  display: flex;
  padding: 1rem 0 1rem 1rem;
  ${IconWrapper} {
    color: ${({ theme }) => theme.colors.grey_field_guide_but_deactivate};
  }

  &:nth-of-type(odd) {
    background-color: ${({ theme }) => theme.colors.grey_button_deactivate};
  }
`;

/**
 * 답글 목록 Container
 */
export const ReplyCommentContainer: ReturnType<typeof styled.div> = styled.div`
  display: flex;
  flex-direction: column;
`;

/**
 * 답글 + 답글 작성 Container
 */
export const ReplyContainer: ReturnType<typeof styled.div> = styled.div`
  display: flex;
  flex-direction: column;
`;

/**
 * 댓글
 */
export const CommentItemWrapper: ReturnType<typeof styled.div> = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${10 / 16}rem;
  position: relative;
  padding-left: 1rem;
  &.deleted,
  &.blocked {
    color: ${({ theme }) => theme.colors.grey_field_guide_but_deactivate};
  }
`;

/**
 * 전체
 */
export const CommentItemContainer: ReturnType<typeof styled.div> = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
