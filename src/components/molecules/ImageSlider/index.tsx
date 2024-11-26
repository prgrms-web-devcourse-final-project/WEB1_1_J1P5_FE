import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Image } from "components/atoms";
import { ImageSliderWrapper } from "./styled";
import "swiper/swiper-bundle.css";

// TODO: import 오류 해결하기
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

interface IImageSliderProps {
  /** 이미지 url 배열 */
  imgUrls: string[];
}

export const ImageSlider = ({ imgUrls }: IImageSliderProps) => {
  return (
    <ImageSliderWrapper>
      <Swiper
        pagination={{
          type: "fraction"
        }}
        modules={[Pagination]}
        className="image-slider"
      >
        {imgUrls.map((url, index) => (
          <SwiperSlide key={index}>
            <Image url={url} />
          </SwiperSlide>
        ))}
      </Swiper>
    </ImageSliderWrapper>
  );
};

