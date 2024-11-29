import { useState } from "react";
import { Text } from "components/atoms";
import { InputWithButton } from "components/molecules";
import { CommentItem } from "components/organisms";
import {
  CommentListWrapper,
  CommentWrapper,
  CommentWriteBoxWrapper,
} from "./styled";
import { type ICommentItemProps } from "../CommentItem";

interface ICommentProps {
  /** 작성된 Comment 목록 */
  comments: ICommentItemProps[];
  /** Comment 작성시 실행할 함수 */
  onWriteComment: (comment: string) => void;
}

export const Comment = ({ comments, onWriteComment }: ICommentProps) => {
  const [comment, setComment] = useState("");
  const handleWriteButtonClick = () => {
    if (!comment.trim()) {
      return;
    }
    onWriteComment(comment);
  };

  return (
    <CommentWrapper>
      <Text variant="h5" content="문의사항" />
      <CommentListWrapper>
        {comments.map((comment, idx) => (
          <CommentItem
            key={`comment_${idx}_${comment.commentId}`}
            {...comment}
          />
        ))}
      </CommentListWrapper>
      <CommentWriteBoxWrapper>
        <InputWithButton
          value={comment}
          setValue={setComment}
          placeholder="댓글을 입력하세요."
          buttonText="작성"
          onButtonClick={handleWriteButtonClick}
        />
      </CommentWriteBoxWrapper>
    </CommentWrapper>
  );
};
