import { IconButton, Image, Text } from "components/atoms";
import { KebabIcon } from "components/atoms/Icon";
import { InputWithButton, KebabMenu } from "components/molecules";
import { getRelativeTime } from "utils";
import { useCommentWriter, useKebabMenu } from "hooks";
import {
  CommentItemContainer,
  CommentItemWrapper,
  ReplyCommentWrapper,
  ReplyWrapper,
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
    handleDeleteComment();
    handleClose();
  };

  /**
   * 차단하기 메뉴 클릭
   */
  const handleBlockClick = () => {
    // 차단하기
    handleClose();
  };

  /**
   * 신고하기 메뉴 클릭
   */
  const handleReportClick = () => {
    // 신고하기
    handleClose();
  };

  return (
    <CommentItemContainer>
      <CommentItemWrapper key={commentId}>
        <Image url={imgUrl} type="round" />
        <div className="content-con">
          <div className="writer-create-con">
            <Text content={nickname} />
            <span className="separator">|</span>
            <Text content={time} />
          </div>
          {!editMode && <Text content={content} />}
          {editMode && (
            <InputWithButton
              value={thisComment}
              setValue={setThisComment}
              buttonText="저장"
              onButtonClick={() => handleEditComment()}
            />
          )}
        </div>
        {!editMode && (
          /**
           * 케밥 메뉴 => TODO 이후 분리 작업 필요
           */
          <>
            <IconButton
              backgroundColor="transparent"
              icon={KebabIcon}
              onClick={handleOpen}
            />
            <div ref={menuRef}>
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
            </div>
          </>
        )}
      </CommentItemWrapper>
      {parentId === null && (
        <ReplyWrapper>
          {replies.length !== 0 && (
            <ReplyCommentWrapper>
              {replies.map(
                (
                  {
                    commentId: childId,
                    commentMemeberDto: { profileImage, nickname },
                    createdAt,
                    content,
                    replies,
                    // isUpdatable,
                    // isSeller,
                  },
                  idx,
                ) => (
                  <CommentItem
                    key={`comment_${idx}_${childId}`}
                    commentId={childId}
                    createdAt={createdAt}
                    nickname={nickname}
                    content={content}
                    imgUrl={profileImage}
                    isMyComment={nickname === user?.nickname}
                    replies={replies}
                    parentId={commentId}
                  />
                ),
              )}
            </ReplyCommentWrapper>
          )}
          {replyMode && (
            /**
             * 답글 작성하는 InputWithButton
             */
            <InputWithButton
              value={comment}
              setValue={setComment}
              placeholder="내용을 입력하세요."
              buttonText="작성"
              onButtonClick={() => handleWriteButtonClick(commentId)}
            />
          )}
        </ReplyWrapper>
      )}
    </CommentItemContainer>
  );
};
