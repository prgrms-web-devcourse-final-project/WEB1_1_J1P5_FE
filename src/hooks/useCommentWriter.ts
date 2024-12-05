import { useState } from "react";
import type { IWriteCommentData } from "types";
import { useParams } from "react-router-dom";

export const useCommentWriter = (commentContent: string = "") => {
  const { productId } = useParams<{ productId: string }>();
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
  };

  const handleEditComment = () => {
    // TODO 수정 로직
    console.log(thisComment, productId);
  };
  const handleDeleteComment = () => {
    // TODO 삭제하는지 모달 오픈
    console.log(productId);
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
