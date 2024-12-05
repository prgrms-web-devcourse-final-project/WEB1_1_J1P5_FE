import type { IResponse } from "types";

export interface IComment {
  commentId: number;
  commentMemeberDto: {
    nickname: string;
    profileImage: string;
  };
  content: string;
  isSeller: boolean;
  isUpdatable: boolean;
  createdAt: string;
  replies: IComment[];
}

export interface ICommentResponse extends IResponse {
  result: null;
}

export interface IGetCommentResponse extends IResponse {
  result: IComment[] | null;
}

export interface IGetCommentParams {
  page: number;
  size: number;
}

export interface IWriteCommentData {
  parentId: number | null;
  content: string;
}

export interface IEditCommentData {
  productId: number;
  content: string;
}
export interface IDeleteCommentData {
  productId: number;
}