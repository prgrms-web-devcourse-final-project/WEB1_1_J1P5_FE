import { IImageInfo, ICoord, IImages } from "types";

type Category =
  | "ELECTRONIC"
  | "FURNITURE"
  | "CLOTHING"
  | "FOOD"
  | "BEAUTY"
  | "SPORTS"
  | "TOYS"
  | "BOOKS"
  | "AUTOMOTIVE"
  | "JEWELRY"
  | "HOME_APPLIANCES"
  | "PET_SUPPLIES"
  | "OFFICE_SUPPLIES"
  | "GARDEN"
  | "MUSIC";

type ExpiredTime = "3일 후" | "2일 후" | "24시간 후" | "12시간 후" | "6시간 후";

export interface IPostForm {
  title?: string;
  content?: string;
  minimumPrice?: number;
  category?: { value: Category; label: Category } | Category;
  latitude?: number;
  longitude?: number;
  address?: string;
  location?: string;
  expiredTime?:
    | { value: ExpiredTime; label: ExpiredTime }
    | ExpiredTime
    | string;
  imgUrls?: ImageInfo[];
}

export interface INewPostForm {
  title: string;
  content: string;
  minimumPrice: number;
  category: Category;
  latitude: number;
  longitude: number;
  address: string;
  location: string;
  expiredTime?: string;
  images?: File[];
  // images?: IImgUrl[]; 레거시
}

export interface IImgUrl {
  url: string;
}

export interface ILocation {
  coord?: ICoord;
  address?: string;
}
