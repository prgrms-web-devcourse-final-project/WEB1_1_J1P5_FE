import { IconButton, Image, Text } from "components/atoms";
import { CommentItemWrapper } from "./styled";
import { KebabIcon } from "components/atoms/Icon";
import { getRelativeTime } from "utils";
import { useEffect, useRef, useState } from "react";
import { useKebabMenuManager } from "hooks/useKebabMenuManager";
import { KebabMenu } from "components/molecules";

export interface ICommentItemProps {
  /** 댓글 아이디 */
  commentId: number;
  /** 프로필 img Url */
  imgUrl: string;
  /** 작성자 닉네임 */
  nickname: string;
  /** 작성 날짜*/
  createdAt: string;
  /** 내용 */
  content: string;
  /** 해당 댓글이 내가 작성한 댓글인지 여부 */
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
