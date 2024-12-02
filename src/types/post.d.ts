import { IImageInfo } from "types";

export interface IPostForm {
  title: string;
  content: string;
  price: number;
  category: string; // 나중에 리터럴로 취급
  // latitude: number;
  // longitude: number;
  // address: number; // 시군구
  location: string;
  expiredTime: string;
  imgUrls: ImageInfo[];
}

