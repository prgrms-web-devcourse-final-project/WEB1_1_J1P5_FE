import { IImageInfo, ICoord, IImages } from "types";

export type Category =
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

export interface IProductForm {
  title?: string;
  content?: string;
  minimumPrice?: string;
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

export interface IImgUrl {
  url: string;
}

export interface ILocation {
  coord?: ICoord;
  address?: string;
}
