/* eslint-disable @typescript-eslint/no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import { Loading } from "components/molecules/Loading";
import { IChatItemProps } from "components/organisms/ChatItem";
import { ChatListTemplate } from "components/templates/ChatListTemplate";
import {
  CHAT_URL,
  chatRoomTabMap,
  chatRoomTabMapKey,
  chatRoomTabMapValue,
} from "constants/Chat";
import { DEFAULT_IMG_PATH } from "constants/imgPath";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { http } from "services/api";
import { useHeaderStore } from "stores";
import { IResponse } from "types";
import { encryptRoomId } from "utils/security";

/** 백엔드 타입 */
interface IChatRoom {
  userId: string;
  roomId: string;
  productId: number;

  lastMessage: string;
  lastMessageAt: string;
  unreadCount: number;

  productImage: string | undefined;
  otherNickname: string;
  otherProfileImage: string | undefined;
}

interface IChatRoomResponse extends IResponse {
  result: IChatRoom[];
}

export const ChatListPage = () => {
  const { setTitle } = useHeaderStore();
  //헤더 세팅
  useEffect(() => {
    setTitle("채팅"); // 동네 이름 받아서 처리 필요
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [currentTab, setCurrentTab] = useState<chatRoomTabMapKey>("전체");

  const navigate = useNavigate();

  /** 백엔드 IChatRoom 타입을 프론트 IChatItemProps 으로 변환 함수
   * @param chatRoom : IChatRoom
   * @returns IChatItemProps
   */
  const createChatItem = (chatRoom: IChatRoom): IChatItemProps => ({
    lastMsg: chatRoom.lastMessage,
    lastMsgTime: chatRoom.lastMessageAt,
    lastMsgCnt: chatRoom.unreadCount,
    profileImgUrl: chatRoom.otherProfileImage || DEFAULT_IMG_PATH,
    itemImgUrl: chatRoom.productImage || DEFAULT_IMG_PATH,
    name: chatRoom.otherNickname,
    onClick: () => {
      const encryptedRoomId = encryptRoomId(chatRoom.roomId);
      navigate(`/chatroom/${encryptedRoomId}/${chatRoom.userId}`);
    },
  });

  /** 현재 currentTab이 "안 읽은 채팅방인 경우 안 읽은 메시지가 존재하는 채팅방들만 필터링 하는 함수
   * @param chatItems : IChatItemProps[]
   * @returns IChatItemProps[]
   */
  const filterChatItems = (chatItems: IChatItemProps[]): IChatItemProps[] => {
    return currentTab === "안 읽은 채팅방"
      ? chatItems.filter((chatItem) => chatItem.lastMsgCnt > 0)
      : chatItems;
  };

  /** userId 와 현재 category 정보를 parameter 로 하여 해당 유저의 채팅방 목록을 가져오는 함수
   * @param userId : string
   * @param type : "ALL" | "SALE" | "PURCHASE"
   * @returns void
   */
  const fetchMessages = async () => {
    try {
      const type = chatRoomTabMap.get(currentTab) || "ALL";
      const response = await http.get<
        IChatRoomResponse,
        { type: chatRoomTabMapValue }
      >(CHAT_URL, { type });
      if (response.success && response.code === "COMMON200") {
        // 백엔드 타입 프론트엔드 타입으로 변환
        return response.result.map(createChatItem);
      }
      return [];
    } catch (error) {
      console.error("Failed to fetch messages:", error);
      return [];
    }
  };

  const { data: chatItems = [], isLoading } = useQuery({
    queryKey: ["chatItems", currentTab], // 쿼리 키
    queryFn: fetchMessages, // 쿼리 함수
    refetchInterval: 1000 * 10, // 10초에 한번 호출(현재 채팅방 목록을 갱신할 수 있는 백엔드적 방법X)
    staleTime: 0,
  });

  //TODO : O(2N) 번 연산이 매번 들어가는 부분이기 때문에 이후 성능 개선 필요
  const allChatItems = filterChatItems(chatItems);

  const onHandleTab = (tab: chatRoomTabMapKey) => {
    setCurrentTab(tab);
  };
  const loadingMsg = "채팅 방 목록\n불러오는 중...";

  if (!chatItems && isLoading) {
    return <Loading message={loadingMsg} />;
  }
  return (
    <ChatListTemplate
      allChatItems={allChatItems}
      sellingChatItems={allChatItems}
      buyingChatItems={allChatItems}
      unreadChatItems={allChatItems}
      onClick={onHandleTab}
    ></ChatListTemplate>
  );
};
