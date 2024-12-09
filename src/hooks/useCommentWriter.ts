import { useState } from "react";
import { useParams } from "react-router-dom";
import { useFetchComment } from "hooks";
import { editComment, removeComment, writeComment } from "services/apis";
import type { IWriteCommentData } from "types";

export const useCommentWriter = (commentContent: string = "") => {
  const { productId } = useParams<{ productId: string }>();
  const { fetchComments } = useFetchComment(productId!);
  const [comment, setComment] = useState("");
  const [replyMode, setReplyMode] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [thisComment, setThisComment] = useState(commentContent);

  const handleWriteComment = (parentId: IWriteCommentData["parentId"]) => {
    if (!comment.trim()) {
      return;
    }
    // onWriteComment(comment, parentId || null);
    console.log(parentId, comment);
    writeComment(productId!, { parentId: parentId, content: comment })
      .then(() => {
        // 댓글 작성 이후 댓글 refetch
        fetchComments().catch(console.error);
        setComment("");
        setReplyMode(false);
      })
      .catch(console.error);
  };

  const handleEditComment = (commentId: number) => {
    console.log(thisComment, productId);
    editComment(commentId, {
      productId: parseInt(productId!),
      content: thisComment,
    })
      .then(() => {
        fetchComments()
          .then(() => setEditMode(false))
          .catch(console.error);
      })
      .catch(console.error);
  };
  const handleDeleteComment = (commentId: number) => {
    // TODO 삭제하는지 모달 오픈
    console.log(productId);
    removeComment(commentId, { productId: parseInt(productId!) })
      .then((data) => {
        console.log(data);
        // TODO 응답 완료는 되는데 삭제 안됨 확인 필요
        fetchComments().catch(console.error);
      })
      .catch(console.error);
  };

  return {
    comment,
    setComment,
    replyMode,
    setReplyMode,
    editMode,
    setEditMode,
    thisComment,
    setThisComment,
    handleWriteButtonClick: handleWriteComment,
    handleEditComment,
    handleDeleteComment,
  };
};
