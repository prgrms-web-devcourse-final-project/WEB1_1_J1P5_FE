import { IconButton, Image, Text } from "components/atoms";
import { KebabIcon } from "components/atoms/Icon";
import { KebabMenu } from "components/molecules";
import { getRelativeTime } from "utils";
import { useKebabMenuManager, useKebabMenu } from "hooks";
import { CommentItemWrapper } from "./styled";

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
  const { menuRef, open, handleOpen } = useKebabMenu();
  const { getMenus } = useKebabMenuManager(commentId);
  const time = getRelativeTime(createdAt);
  const menus = getMenus(isMyComment ? "myComment" : "notMyComment");

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
        onClick={handleOpen}
      />
      <div ref={menuRef}>{open && <KebabMenu menus={menus} />}</div>
    </CommentItemWrapper>
  );
};
