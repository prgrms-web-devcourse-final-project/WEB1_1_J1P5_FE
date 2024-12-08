import { IconButton, Image, Text } from "components/atoms";
import { KebabIcon, ReplyIcon } from "components/atoms/Icon";
import { InputWithButton, KebabMenu } from "components/molecules";
import { getRelativeTime } from "utils";
import { useCommentWriter, useDetailModal, useKebabMenu } from "hooks";
import {
  CommentContentWrapper,
  CommentItemContainer,
  CommentItemWrapper,
  KebabWrapper,
  ReplyCommentContainer,
  ReplyCommentWrapper,
  ReplyContainer,
  CommentHeaderContainer,
  WriterInformationWrapper,
} from "./styled";
import type { IComment, IWriteCommentData } from "types";
import { useUserStore } from "stores";

export interface ICommentItemProps {
  /** 댓글 아이디 */
  commentId: number;
  /** 프로필 img Url */
  imgUrl: string;
  /** 작성자 닉네임 */
  nickname: string;
  /** 작성 날짜*/
  createdAt: string;
  /** 내용 */
  content: string;
  /** 해당 댓글이 내가 작성한 댓글인지 여부 */
  isMyComment: boolean;
  /** 답글 목록 */
  replies: IComment[];
  /** (답글인 경우) 부모 댓글의 아이디 */
  parentId: IWriteCommentData["parentId"];
}

export const CommentItem = ({
  commentId,
  imgUrl,
  nickname,
  createdAt,
  content,
  isMyComment,
  replies,
  parentId,
}: ICommentItemProps) => {
  const { user } = useUserStore();
  const { menuRef, open, handleOpen, handleClose } = useKebabMenu();
  const {
    comment,
    setComment,
    replyMode,
    setReplyMode,
    editMode,
    setEditMode,
    thisComment,
    setThisComment,
    handleWriteButtonClick,
    handleEditComment,
    handleDeleteComment,
  } = useCommentWriter(content);
  const time = getRelativeTime(createdAt);
  const { todo } = useDetailModal();

  /**
   * 답글 메뉴 클릭
   */
  const handleReplyClick = () => {
    setReplyMode(true);
    handleClose();
  };

  /**
   * 수정하기 메뉴 클릭
   */
  const handleEditClick = () => {
    setEditMode(true);
    handleClose();
  };

  /**
   * 삭제하기 메뉴 클릭
   */
  const handleDeleteClick = () => {
    handleDeleteComment(commentId);
    handleClose();
  };

  /**
   * 차단하기 메뉴 클릭
   */
  const handleBlockClick = () => {
    // TODO 차단하기
    todo();
    handleClose();
  };

  /**
   * 신고하기 메뉴 클릭
   */
  const handleReportClick = () => {
    // TODO 신고하기
    todo();
    handleClose();
  };

  return (
    <CommentItemContainer>
      <CommentItemWrapper key={commentId}>
        <CommentHeaderContainer className="content-con">
          <Image url={imgUrl} type="round" />
          <WriterInformationWrapper>
            <Text variant="title_bold" content={nickname} />
            <Text variant="desc_regular" content={time} />
          </WriterInformationWrapper>
          {!editMode && (
            /**
             * 케밥 메뉴 => TODO 이후 분리 작업 필요
             */
            <>
              <IconButton
                backgroundColor="transparent"
                size="s"
                icon={KebabIcon}
                onClick={handleOpen}
              />
              <KebabWrapper ref={menuRef}>
                {open && (
                  <KebabMenu>
                    {!parentId && (
                      <KebabMenu.Button
                        content="답글"
                        onClick={handleReplyClick}
                      />
                    )}
                    {isMyComment && (
                      <>
                        <KebabMenu.Button
                          content="수정하기"
                          onClick={handleEditClick}
                        />
                        <KebabMenu.Button
                          content="삭제하기"
                          onClick={handleDeleteClick}
                        />
                      </>
                    )}
                    {!isMyComment && (
                      <>
                        <KebabMenu.Button
                          content="차단하기"
                          onClick={handleBlockClick}
                        />
                        <KebabMenu.Button
                          content="신고하기"
                          onClick={handleReportClick}
                        />
                      </>
                    )}
                  </KebabMenu>
                )}
              </KebabWrapper>
            </>
          )}
        </CommentHeaderContainer>
        <CommentContentWrapper>
          {!editMode && <Text variant="desc_regular" content={content} />}
          {editMode && (
            <InputWithButton
              value={thisComment}
              setValue={setThisComment}
              buttonText="저장"
              onButtonClick={() => handleEditComment(commentId)}
            />
          )}
        </CommentContentWrapper>
      </CommentItemWrapper>
      {parentId === null && (
        <ReplyContainer>
          {replies.length !== 0 && (
            <ReplyCommentContainer>
              {replies.map(
                (
                  {
                    commentId: childId,
                    commentMemeberDto: { profileIamge, nickname },
                    createdAt,
                    content,
                    replies,
                    // isUpdatable,
                    // isSeller,
                  },
                  idx,
                ) => (
                  <ReplyCommentWrapper key={`comment_${idx}_${childId}`}>
                    <ReplyIcon />
                    <CommentItem
                      commentId={childId}
                      createdAt={createdAt}
                      nickname={nickname}
                      content={content}
                      imgUrl={profileIamge}
                      isMyComment={nickname === user?.nickname}
                      replies={replies}
                      parentId={commentId}
                    />
                  </ReplyCommentWrapper>
                ),
              )}
            </ReplyCommentContainer>
          )}
          {replyMode && (
            /**
             * 답글 작성하는 InputWithButton
             */
            <InputWithButton
              value={comment}
              setValue={setComment}
              placeholder="답글을 입력해주세요."
              buttonText="작성"
              onButtonClick={() => handleWriteButtonClick(commentId)}
              variant="explan_bold"
            />
          )}
        </ReplyContainer>
      )}
    </CommentItemContainer>
  );
};
