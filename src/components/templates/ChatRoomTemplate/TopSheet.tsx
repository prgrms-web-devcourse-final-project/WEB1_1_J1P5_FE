/* eslint-disable @rushstack/typedef-var */
import { useState } from "react";
import styled from "@emotion/styled";
import { IPost, PostList } from "components/organisms/PostList";
import { ThemeType } from "styles/theme";
import { Text } from "components/atoms";
import { TextButtonWrapper } from "components/atoms/Button/TextButton/styled";
import { PostItemRootWrapper } from "components/organisms/PostItem/styled";

/** 시간이 촉박해서 임시로 제작한 TopSheet 입니다. 현재는 채팅쪽에서만 사용할 수 있습니다.  */

interface TopSheetWrapperProps {
  isSeller: boolean;
  isOpen: boolean;
}

export const TopSheetWrapper = styled.div``;
const TopSheetContainer = styled.div`
  position: fixed;
  width: 100%;
  max-width: ${({ theme }: { theme: ThemeType }) => theme.sizes.max_width};
  left: 50%;
  transform: translate(-50%);

  height: ${({ isOpen, isSeller }: TopSheetWrapperProps) =>
    isSeller ? (isOpen ? "11.25rem" : "0") : isOpen ? "7.6243751rem" : "0"};
  overflow: hidden;
  //overflow: ${({ isOpen }) => (isOpen ? "visible" : "hidden")}; /* 변경 */
  z-index: 1000;
  background-color: ${({ theme }: { theme: ThemeType }) => theme.colors.white};

  transition: height 0.3s ease; /* 부드러운 애니메이션 */
  ${TextButtonWrapper} {
    margin: 0;
  }

  ${PostItemRootWrapper} {
    padding-bottom: ${({ isSeller }) => (isSeller ? "0" : "1rem")};
  }
`;

const ToggleButton =
  styled.button <
  TopSheetWrapperProps >
  `
  position: fixed;
  width: 100%;
  max-width: ${({ theme }: { theme: ThemeType }) => theme.sizes.max_width};
  left: 50%;
  transform: translate(-50%);
  height: 2.25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  pading: 0;
  gap: 5px;
  border-radius: 0 0 0.625rem 0.625rem;

  top: ${({ isOpen, isSeller }) =>
    isSeller
      ? isOpen ? "15.7725rem" : "4.77375rem"
      : isOpen ? "12.398125rem" : "4.77375rem"};
  background-color: ${({ theme }: { theme: ThemeType }) => theme.colors.white};
  border: none;

  cursor: pointer;
  z-index: 1000;
  transition: top 0.3s ease; /* 버튼 위치 애니메이션 */

  .btn-bar {
    width: 100px;
    height: 6px;
    background-color: ${({ theme }: { theme: ThemeType }) =>
      theme.colors.grey_button_deactivate};
    border-radius: 100px;
  }
`;

interface TopSheetProps {
  post: IPost;
  isCompleted: boolean;
}
export const TopSheet = ({ post, isCompleted }: TopSheetProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSheet = () => {
    setIsOpen(prev => !prev);
  };
  return (
    <TopSheetWrapper>
      <ToggleButton
        onClick={toggleSheet}
        isOpen={isOpen}
        isSeller={post.isSeller || false}
      >
        {isOpen ? "" : <Text content={post.title} variant="tag_regular" />}
        <div className="btn-bar" />
      </ToggleButton>
      <TopSheetContainer isOpen={isOpen} isSeller={post.isSeller || false}>
        <PostList posts={[post]} type={"chat"} isCompleted={isCompleted} />
      </TopSheetContainer>
    </TopSheetWrapper>
  );
};
