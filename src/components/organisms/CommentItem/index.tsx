import { IconButton, Image, Text } from "components/atoms";
import { CommentItemWrapper } from "./styled";
import { KebabIcon } from "components/atoms/Icon";
import { getRelativeTime } from "utils";
import { useEffect, useRef, useState } from "react";
import { useKebabMenuManager } from "hooks/useKebabMenuManager";
import { KebabMenu } from "components/molecules";

interface ICommentItemProps {
  commentId: number;
  imgUrl: string;
  nickname: string;
  createdAt: string;
  content: string;
  isMyComment: boolean;
}

export const CommentItem = ({
  commentId,
  imgUrl,
  nickname,
  createdAt,
  content,
  isMyComment,
}: ICommentItemProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const time = getRelativeTime(createdAt);
  const { getMenus } = useKebabMenuManager();
  const menus = getMenus(isMyComment ? "myComment" : "notMyComment");

  useEffect(() => {
    /**
     * 메뉴 영역 외 클릭 감지해서 메뉴 닫는 함수
     * @param event : MouseEvent
     * @return void
     */
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  /**
   * 케밥 메뉴 여는 함수
   * @param void
   * @return void
   */
  const handleMenuClick = () => {
    setIsMenuOpen(true);
  };

  return (
    <CommentItemWrapper key={commentId}>
      <Image url={imgUrl} type="round"></Image>
      <div className="content-con">
        <div className="writer-create-con">
          <Text content={nickname}></Text>
          <span className="separator">|</span>
          <Text content={time}></Text>
        </div>
        <Text content={content}></Text>
      </div>
      <IconButton
        backgroundColor="transparent"
        icon={KebabIcon}
        onClick={handleMenuClick}
      ></IconButton>
      <div ref={menuRef}>{isMenuOpen && <KebabMenu menus={menus} />}</div>
    </CommentItemWrapper>
  );
};
