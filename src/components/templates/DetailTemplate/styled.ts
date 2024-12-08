import styled from "@emotion/styled";
import { AuctionControlBarRootWrapper } from "components/organisms/AuctionControlBar/styled";
import { LocationMapWrapper } from "components/organisms/LocationMap/styled";
import { MapWrapper } from "components/organisms/Map/styled";
import { CommentWrapper } from "components/organisms/Comment/styled";
import {
  ImageWrapper,
  ProfileWrapper,
  TextWrapper,
} from "components/organisms/Profile/styled";

export const ImageSliderAndTimer: ReturnType<typeof styled.div> = styled.div`
  //
`;

export const DetailTemplateWrapper: ReturnType<typeof styled.div> = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background-color: #f4f6f9;
  & > * {
    // AuctionControlBar 제외 배경 하양
    &:not(${AuctionControlBarRootWrapper}) {
      background-color: #ffffff;
    }
    // 상단 이미지 슬라이더와 지도, 댓글 제외한 부분에 padding
    &:not(${ImageSliderAndTimer}, ${LocationMapWrapper}, ${CommentWrapper}) {
      padding: 1rem;
    }
  }
  ${LocationMapWrapper} ${MapWrapper} {
    height: 200px;
  }
  ${AuctionControlBarRootWrapper} {
    position: sticky;
    bottom: 10px;
    z-index: 9999;
    margin: 0 1rem;
  }
  ${ProfileWrapper} {
    gap: ${12 / 16}rem;
    ${TextWrapper} {
      width: 100%;
    }
    ${ImageWrapper} {
      width: 80px;
    }
  }
  ${CommentWrapper} {
    padding-bottom: 2rem;
  }
`;
