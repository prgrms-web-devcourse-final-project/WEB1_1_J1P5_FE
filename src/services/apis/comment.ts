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
    `/products/comments/${productId}`,
    postData,
  );
};

export const editComment = async (
  commentId: number,
  requestData: IEditCommentData,
) => {
  return http.patch(`/products/comments/${commentId}`, requestData);
};

export const removeComment = async (
  commentId: number,
  requestData: IDeleteCommentData,
) => {
  return http.delete<ICommentResponse, IDeleteCommentData>(
    `/products/comments/${commentId}`,
    requestData,
  );
};
