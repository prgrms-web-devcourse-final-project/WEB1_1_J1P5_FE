import styled from "@emotion/styled";

export const ImageSliderWrapper: ReturnType<typeof styled.div> = styled.div`
  cursor: pointer;

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .swiper-pagination-fraction {
    width: fit-content;
    top: 8px;
    bottom: initial;
    left: initial;
    right: 8px;
    padding: 2px 4px;
    background-color: #ececec;
    border-radius: 12px;
  }
`;

