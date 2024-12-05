import { useCallback } from "react";
import { useParams } from "react-router-dom";
import type { IMenu } from "types";
import { useCommentWriter } from "./useCommentWriter";

export const useCommentKebabMenuManager = (commentId: number) => {
  const { productId } = useParams<{ productId: string }>();
  const { setReplyMode } = useCommentWriter();

  const onReply = useCallback(() => {
    console.log("답글 클릭");
    console.log(commentId);
    setReplyMode(true);
  }, [commentId]);

  const onEdit = useCallback(() => {
    console.log("수정하기 클릭");
    console.log(commentId);
  }, [commentId]);

  const onDelete = useCallback(() => {
    console.log("삭제하기 클릭");
    console.log(commentId, productId);
  }, [commentId, productId]);

  const onBlock = useCallback(() => {
    console.log("차단하기 클릭");
    console.log(commentId);
  }, [commentId]);

  const onReport = useCallback(() => {
    console.log("신고하기 클릭");
    console.log(commentId);
  }, [commentId]);

  const getMenus = useCallback(
    (scenario: string, hasParentId: boolean): IMenu[] => {
      const menus: IMenu[] = [];

      if (!hasParentId) {
        menus.push({ content: "답글", onClick: onReply });
      }

      switch (scenario) {
        /** CommentItem에서 내 코멘트인 경우 */
        case "myComment":
          return [
            ...menus,
            { content: "수정하기", onClick: onEdit },
            { content: "삭제하기", onClick: onDelete },
          ];
        /** CommentItem에서 내 코멘트 아닌 경우 */
        case "notMyComment":
          return [
            ...menus,
            { content: "차단하기", onClick: onBlock },
            { content: "신고하기", onClick: onReport },
          ];
        default:
          return [];
      }
    },
    [onBlock, onDelete, onEdit, onReply, onReport],
  );

  return { getMenus };
};
