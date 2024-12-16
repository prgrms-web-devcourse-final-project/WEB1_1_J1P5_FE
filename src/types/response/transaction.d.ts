import type { IResponse } from "types";

export type TransactionStatus =
  | "BIDDING"
  | "IN_PROGRESS"
  | "COMPLETED"
  | "DELETED";

export interface ITransactionProduct {
  productIdL: number;
  title: string;
  imageUrl: string;
  productAddress: string;
  createdAt: string;
  price: number;
  expiredTime: string;
  winningPrice: number;
  status: TransactionStatus;
}

export interface ITransactionResponse extends IResponse {
  result: {
    content: ITransactionProduct[];
    nextCursor: number;
  };
}

export interface ITransactionQueryParams {
  size: number;
  // cursor: number;
  status: TransactionStatus;
}
