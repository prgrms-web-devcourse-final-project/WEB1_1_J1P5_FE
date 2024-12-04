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

export interface IPostForm {
  title?: string;
  content?: string;
  price?: number;
  category: Category;
  latitude?: number;
  longitude?: number;
  address?: string;
  location?: string;
  expiredTime?: string;
  imgUrls?: ImageInfo[];
}

export interface ILocation {
  coord?: ICoord;
  address?: string;
}
