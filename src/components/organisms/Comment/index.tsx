import { Text } from "components/atoms";
import { InputWithButton } from "components/molecules";
import { CommentItem } from "components/organisms";
import type { IComment } from "types";
import {
  CommentListWrapper,
  CommentWrapper,
  CommentWriteBoxWrapper,
} from "./styled";
import { useUserStore } from "stores";
import { useCommentWriter } from "hooks";

interface ICommentProps {
  /** 작성된 Comment 목록 */
  comments: IComment[];
  /** 구매자가 있는지 여부 */
  hasBuyer?: boolean;
}

export const Comment = ({ comments, hasBuyer }: ICommentProps) => {
  const { user } = useUserStore();
  const { comment, setComment, handleWriteButtonClick } = useCommentWriter();

  return (
    <CommentWrapper>
      <Text variant="title_bold" content="문의사항" />
      <CommentWriteBoxWrapper>
        <InputWithButton
          value={comment}
          setValue={setComment}
          placeholder="댓글을 입력해주세요."
          buttonText="작성"
          onButtonClick={() => handleWriteButtonClick(null)}
          variant="explan_bold"
        />
      </CommentWriteBoxWrapper>
      <CommentListWrapper>
        {comments.map(
          (
            {
              commentId,
              commentMemeberDto: { profileIamge, nickname, userId },
              createdAt,
              content,
              replies,
              // isUpdatable,
              isBlocked,
              isSeller,
              status,
            },
            idx
          ) => (
            <CommentItem
              key={`comment_${idx}_${commentId}`}
              commentId={commentId}
              createdAt={createdAt}
              nickname={nickname}
              content={content}
              imgUrl={profileIamge}
              isMyComment={nickname === user?.nickname}
              replies={replies}
              parentId={null}
              status={status}
              isBlocked={isBlocked}
              isSeller={isSeller}
              hasBuyer={hasBuyer}
              targetId={userId}
            />
          )
        )}
      </CommentListWrapper>
    </CommentWrapper>
  );
};
