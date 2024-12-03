import type { IResponse } from ".";

export interface IExampleResponse extends IResponse {
  data: string[];
}

export interface IExampleData {
  title: string;
  content: string;
  image: File;
}
