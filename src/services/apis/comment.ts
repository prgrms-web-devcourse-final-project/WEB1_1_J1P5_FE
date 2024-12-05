import { http } from "services/api";
import type {
  ICommentResponse,
  IDeleteCommentData,
  IEditCommentData,
  IGetCommentParams,
  IGetCommentResponse,
  IWriteCommentData,
} from "types";

export const getComments = async (
  productId: string,
  page: number,
  size: number = 10,
) => {
  return http.get<IGetCommentResponse, IGetCommentParams>(
    `/products/comments/${productId}`,
    {
      page,
      size,
    },
  );
};

export const writeComment = async (
  productId: string,
  postData: IWriteCommentData,
) => {
  return http.post<ICommentResponse, IWriteCommentData>(
    `/product/comments/${productId}`,
    postData,
  );
};

export const editComment = async (
  commentId: string,
  requestData: IEditCommentData,
) => {
  return http.patch(`/product/comments/${commentId}`, requestData);
};

export const removeComment = async (
  commentId: string,
  requestData: IDeleteCommentData,
) => {
  return http.delete<ICommentResponse, IDeleteCommentData>(
    `/product/comments/${commentId}`,
    requestData,
  );
};
