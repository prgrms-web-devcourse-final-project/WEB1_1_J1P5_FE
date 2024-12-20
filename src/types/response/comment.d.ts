import type { IResponse } from "types";

export type CommentStatus = "ACTIVE" | "UPDATED" | "DELETED";

export interface IComment {
  commentId: number;
  commentMemeberDto: {
    nickname: string;
    profileIamge: string;
    userId: number;
  };
  content: string;
  isBlocked: boolean;
  isSeller: boolean;
  isUpdatable: boolean;
  createdAt: string;
  replies: IComment[];
  status: CommentStatus;
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
