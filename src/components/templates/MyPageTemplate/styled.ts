import styled from "@emotion/styled";
import { TextButtonWrapper } from "components/atoms/Button/TextButton/styled";
import {
  ProfileWrapper,
  ImageWrapper
} from "components/organisms/Profile/styled";

export const MyPageTemplateWrapper: ReturnType<typeof styled.div> = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 1rem;

  ${ImageWrapper} {
    width: 80px;
  }

  ${TextButtonWrapper} {
    display: flex;
    height: 44px;
    padding: 12px 16px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;

    border-radius: 0px 0px 10px 10px;
    border-top: 1px solid #eceef3;
    background: #fff;

    margin: 0;

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;

    overflow: hidden;
    color: #707192;
    text-overflow: ellipsis;
  }

  ${ProfileWrapper} {
    background: var(--white, #fff);
  }
`;

export const ProfileContainer: ReturnType<typeof styled.div> = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
`;
export const BackGroundWrapper: ReturnType<typeof styled.div> = styled.div`
  background: #f4f6f9;
  padding: 1rem;
`;
