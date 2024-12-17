import { Text, TextButton } from "components/atoms";
import {} from "components/molecules";
import { EmptyTemplateWrapper } from "./styled";
import { useNavigate } from "react-router-dom";
import { Sticker } from "components/atoms/Sticker";

export interface IEmptyTemplateProps {
  type:
    | "default"
    | "search"
    | "chat"
    | "selling"
    | "buying"
    | "completed"
    | "blockedUser"
    | "marketPrice"
    | "chatRoom"
    | "error";
}

export const EmptyTemplate = ({ type = "default" }: IEmptyTemplateProps) => {
  const navigate = useNavigate();

  const messages = {
    chat: "현재 채팅방이 없네요.\n 입찰하러 가볼까요?",
    default: "현재 지역에는 등록된 글이 없어요\n 등록하러 가볼까요?",
    search: "검색 결과가 존재하지 않아요\n 다시 홈으로 이동할까요?",

    selling: "판매중인 목록이 존재하지 않아요\n 다시 홈으로 이동할까요?",
    buying: "구매중인 목록이 존재하지 않아요\n 다시 홈으로 이동할까요?",
    completed: "거래완료된 목록이 존재하지 않아요\n 다시 홈으로 이동할까요?",
    blockedUser: "차단한 사용자가 없어요",
    marketPrice: "거래완료된 목록이 존재하지 않아요\n 다시 홈으로 이동할까요?",
    chatRoom: "채팅 내역을 불러오는데 실패했어요",
    error: "잘못된 접근이예요..!\n다시 메인화면으로 갈까요?",
  };
  const urls = {
    chat: "/",
    default: "/product",
    search: "/",

    selling: "/",
    buying: "/",
    completed: "/",
    blockedUser: "/",
    marketPrice: "/",
    chatRoom: "/chat",
    error: "/",
  };
  const buttnTexts = {
    chat: "메인으로 돌아가기",
    default: "물품 판매하러 가기",
    search: "메인으로 돌아가기",

    selling: "메인으로 돌아가기",
    buying: "메인으로 돌아가기",
    completed: "메인으로 돌아가기",
    blockedUser: "/",
    marketPrice: "메인으로 돌아가기",
    chatRoom: "채팅방 목록으로 돌아가기",
    error: "메인으로 돌아가기",
  };
  const msg = messages[type] || messages.default; // 기본 메시지 설정
  const redirectUrl = urls[type] || urls.default; // 기본 URL 설정
  const buttonText = buttnTexts[type] || buttnTexts.default;
  const handleClick = () => {
    navigate(redirectUrl);
  };

  // 버튼을 렌더링하지 않을 타입 배열
  const noButtonTypes = ["default", "blockedUser"];
  return (
    <EmptyTemplateWrapper className={type}>
      <div className="text-con">
        <Text variant="h5" content={msg}></Text>
      </div>
      <Sticker />
      {/* noButtonTypes 배열에 포함되지 않는 경우에만 TextButton 렌더링 */}
      {!noButtonTypes.includes(type) && (
        <TextButton text={buttonText} onClick={handleClick} />
      )}
      {noButtonTypes.includes(type) && <div></div>}
    </EmptyTemplateWrapper>
  );
};
