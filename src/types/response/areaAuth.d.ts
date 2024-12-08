import type { IResponse } from "types";

export interface IAreaAuthPost {
  latitude: number;
  longitude: number;
  emdId: number;
}

export interface IAreaAuthResponse extends IResponse {
  result: null;
}

