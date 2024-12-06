import type { IResponse } from "types";

/**
 * ActivityArea 타입
 */
export interface IActivityArea {
  fullAddress: string;
  emdId: number;
}

/**
 * 기본 QueryParameter 타입
 */
export interface IDefaultActivityAreasQuery {
  size?: number;
  page?: number;
}

/**
 * 좌표
 */
export interface IActivityAreasQuery extends IDefaultActivityAreasQuery {
  latitude: number;
  longitude: number;
}

export interface IActivityAreasSearchQuery extends IDefaultActivityAreasQuery {
  keyword: string;
}

export interface IActivityAreaResponse extends IResponse {
  result: {};
}

export interface IGetActivityAreasResponse extends IResponse {
  result: {
    content: IActivityArea[];
    totalPages: number;
    hasNext: boolean;
  };
}

export interface IActivityAreaData {
  emdId: number;
}
