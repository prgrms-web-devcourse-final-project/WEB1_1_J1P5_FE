import { IImageInfo, ICoord } from "types";

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
  price?: number;
  category?: Category;
  latitude?: number;
  longitude?: number;
  address?: string;
  location?: string;
  expiredTime?: ExpiredTime;
  imgUrls?: ImageInfo[];
}

export interface ILocation {
  coord?: ICoord;
  address?: string;
}
