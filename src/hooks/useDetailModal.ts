import { modalMessage } from "constants/modalMessage";
import { useModalForm } from "hooks";

/**
 * 상세페이지에서 사용되는 모달
 */
export const useDetailModal = () => {
  const { confirm, alert, todo: todoModal } = useModalForm();
  // 구매자
  const cancel = (onCancel: () => void) =>
    confirm(modalMessage.product.bid.cancel.DEFAULT, onCancel);
  const cancelEarly = () => alert(modalMessage.product.bid.cancel.early);
  const editEarly = () => alert(modalMessage.product.bid.edit.early);
  const bid = (price: number) => alert(modalMessage.product.bid.DEFAULT(price));
  // 판매자
  const earlyClosing = (onEarlyClosing: () => void) =>
    confirm(modalMessage.product.seller.early, onEarlyClosing);
  const removeNoBuyer = (onRemove: () => void) =>
    confirm(modalMessage.product.seller.remove.DEFAULT, onRemove);
  const removeHasBuyer = (onRemove: () => void) =>
    confirm(modalMessage.product.seller.remove.hasBuyer, onRemove);

  // 차단
  const todo = todoModal;
  // 댓글 신고하기
  const reportComment = (onReportComment: () => void) =>
    confirm(modalMessage.product.comment.report.DEFAULT, onReportComment);
  // 게시글 신고하기
  const reportPost = (onReportPost: () => void) =>
    confirm(modalMessage.product.post.report.DEFAULT, onReportPost);
  // 신고 완료
  const reportComplete = () => alert(modalMessage.product.report.COMPLETE);
  return {
    cancel,
    cancelEarly,
    editEarly,
    bid,
    earlyClosing,
    removeNoBuyer,
    removeHasBuyer,
    todo,
    reportComment,
    reportPost,
    reportComplete,
  };
};
