import { DEFAULT_IMG_PATH } from "constants/imgPath";
import { ImageWrapper } from "./styled";

export interface IImage {
  /** Imgae 타입 : default 값은 square */
  type?: "round" | "square";
  /** 이미지 url  */
  url?: string;
}
export const Image = ({ type = "square", url = DEFAULT_IMG_PATH }: IImage) => {
  return <ImageWrapper src={url} type={type} url={url}></ImageWrapper>;
};
