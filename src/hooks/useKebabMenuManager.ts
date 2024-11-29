import { useCallback } from "react";
import type { IMenu } from "types";

export const useKebabMenuManager = () => {
  const onReply = useCallback(() => {
    console.log("답글 클릭");
  }, []);

  const onEdit = useCallback(() => {
    console.log("수정하기 클릭");
  }, []);

  const onDelete = useCallback(() => {
    console.log("삭제하기 클릭");
  }, []);

  const onBlock = useCallback(() => {
    console.log("차단하기 클릭");
  }, []);
  const onRepot = useCallback(() => {
    console.log("신고하기 클릭");
  }, []);
  const getMenus = useCallback(
    (scenario: string): IMenu[] => {
      switch (scenario) {
        /** CommentItem에서 내 코멘트인 경우 */
        case "myComment":
          return [
            { content: "답글", onClick: onReply },
            { content: "수정하기", onClick: onEdit },
            { content: "삭제하기", onClick: onDelete },
          ];
        /** CommentItem에서 내 코멘트 아닌 경우 */
        case "notMyComment":
          return [
            { content: "답글", onClick: onReply },
            { content: "차단하기", onClick: onBlock },
            { content: "신고하기", onClick: onRepot },
          ];
        default:
          return [];
      }
    },
    [onBlock, onDelete, onEdit, onReply, onRepot],
  );

  return { getMenus };
};
