import { IPost } from "components/organisms/PostList";
import { ChatRoomTemplate } from "components/templates/ChatRoomTemplate";
import { DEFAULT_IMG_PATH } from "constants/imgPath";
import { useChatGroups } from "hooks/useChatGroups";
import { useWebSocket } from "hooks/useWebSocket";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { http } from "services/api";
import { IResponse } from "types";
import { decryptRoomId } from "utils/security";

interface IChatRoomBasic {
  /** 채팅방 ID, 몽고DB */
  roomId: string;
  /** 상대방 닉네임 */
  otherNickname: string;
  /** 상대방 프로필 이미지 */
  otherProfileImage: string | undefined;
  /** 상대방 아이디 */
  otherUserId: number;
  /** 게시글 아이디 */
  productId: number;
  /** 게시글 제목 */
  productTitle: string;
  /** 게시글 썸네일 */
  productImage: string | undefined;
  /** 게시글 최종 가격 */
  price: number;
  /** 판매자인지 아닌지 (판매완료를 위해) */
  isSeller: boolean;
  /** 현재 채팅 가능 상태인지(상대방이 채팅방에서 안나갔는지) */
  isChatAvailable: boolean;
}
export interface IChatMsg {
  /** 채팅 ObjectId 문자열 / 추후 안읽은 메시지 개수 관리를 위해 */
  id: string;
  senderId: number;
  content: string;
  createdAt: string;
}
interface IChatRoomPageResponse extends IResponse {
  result: {
    chatRoomBasicInfo: IChatRoomBasic;
    messages: IChatMsg[];
  };
}
export const ChatRoomPage = () => {
  const { roomId } = useParams(); // URL에서 roomId 가져오기
  const decrtyptRoomId = roomId ? decryptRoomId(roomId) : null;
  const { connect, disconnect } = useWebSocket();
  const chatRoomEnterurl = `/chats/enter/${decrtyptRoomId}`;
  const [post, setPost] = useState<IPost>();
  const [otherUserId, setOtherUserId] = useState<number>(-1);
  const [imgUrl, setImgUrl] = useState<string>(DEFAULT_IMG_PATH);
  const [chats, setChats] = useState<IChatMsg[]>([]);
  const chatGroups = useChatGroups(chats, otherUserId, imgUrl);

  /** 백엔드 IChatRoom 타입을 프론트 IChatItemProps 으로 변환 함수
   * @param chatRoom : IChatRoom
   * @returns IChatItemProps
   */
  const createChatRoomBasicInfo = (
    chatRoomBasicInfo: IChatRoomBasic
  ): IPost => ({
    productId: chatRoomBasicInfo.productId,
    imgUrl: chatRoomBasicInfo.productImage || DEFAULT_IMG_PATH,
    title: chatRoomBasicInfo.productTitle,
    maxPrice: chatRoomBasicInfo.price,
    price: 0,
    address: "",
    uploadTime: "",
    expiredTime: "",
    onClick: () => {
      console.log("onClick");
    },
    onTextButtonClick: () => {
      console.log("onTextButtonClick");
    },
    onIconButtonClick: () => {
      console.log("onIconButtonClick");
    },
  });

  const fetchMessages = async () => {
    try {
      const response = await http.post<IChatRoomPageResponse>(chatRoomEnterurl);
      if (response.success && response.code === "COMMON200") {
        console.log(response);
        setOtherUserId(response.result.chatRoomBasicInfo.otherUserId);
        // 백엔드 타입 프론트엔드 타입으로 변환
        const createdPost = createChatRoomBasicInfo(
          response.result.chatRoomBasicInfo
        );
        setPost(createdPost);
        setImgUrl(
          response.result.chatRoomBasicInfo.productImage || DEFAULT_IMG_PATH
        );
        setChats(response.result.messages);
      }
    } catch (error) {
      console.error("Failed to fetch messages:", error);
    }
  };

  useEffect(() => {
    const fetchChatMessages = async () => {
      await fetchMessages();
    };
    fetchChatMessages().catch((error) => {
      console.error("Error fetchting Chat Message:", error);
    });

    /** 웹 소켓 연결 */
    const connectToWebSocket = async () => {
      if (decrtyptRoomId) {
        await connect(decrtyptRoomId);
      }
    };

    connectToWebSocket().catch((error) => {
      console.error("Error connecting to WebSocket:", error);
    }); // 연결 시도 중 발생할 수 있는 오류를 처리

    /** 컴포넌트 언마운트 시 웹 소켓 연결 끊기 */
    return () => {
      const disconnectFromWebSocket = async () => {
        await disconnect();
      };

      disconnectFromWebSocket().catch((error) => {
        console.error("Error disconnecting from WebSocket:", error);
      }); // 연결 시도 중 발생할 수 있는 오류를 처리
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  /** TODO: post as IPost 으로 Assertion 부분 이후에 post 값 없는 경우 에러 처리하도록 변경 */
  return post ? (
    <ChatRoomTemplate
      post={post}
      chatBubbles={chatGroups}
      onWriteMessage={(message: string) => {
        console.log(message);
      }}
    />
  ) : (
    <div>Loading...</div> // 로딩 화면 또는 다른 메시지 표시
  );
};
