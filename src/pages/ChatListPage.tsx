/* eslint-disable @typescript-eslint/no-unused-vars */
import { IChatItemProps } from "components/organisms/ChatItem";
import { ChatListTemplate } from "components/templates/ChatListTemplate";
import {
  CHAT_URL,
  chatRoomTabMap,
  chatRoomTabMapKey,
  chatRoomTabMapValue,
} from "constants/Chat";
import { DEFAULT_IMG_PATH } from "constants/imgPath";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { http } from "services/api";
import { useHeaderStore } from "stores";
import { IResponse } from "types";
import { encryptRoomId } from "utils/security";

/** 백엔드 타입 */
interface IChatRoom {
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

  useEffect(() => {
    setTitle("채팅"); // 동네 이름 받아서 처리 필요
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //setTitle("채팅");
  const [allChatItems, setAllChatItems] = useState<IChatItemProps[]>([]);
  const [currentTab, setCurrentTab] = useState<chatRoomTabMapKey>("전체");

  const [firstFetchTime, setFirstFetchTime] = useState<dayjs.Dayjs | null>(
    null
  );
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
      navigate(`/chat/${encryptedRoomId}`);
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
        const chatItems = response.result.map(createChatItem);
        //TODO : O(2N) 번 연산이 매번 들어가는 부분이기 때문에 이후 성능 개선 필요
        setAllChatItems(filterChatItems(chatItems));
      }
    } catch (error) {
      console.error("Failed to fetch messages:", error);
    }
  };

  useEffect(() => {
    let timerId: NodeJS.Timeout;

    const fetchMessagesAndSetTimer = async () => {
      await fetchMessages();

      const now = dayjs();

      if (!firstFetchTime) {
        // 첫 fetch 시간 저장
        setFirstFetchTime(now);
        // 10초 후에 다시 호출
        timerId = setTimeout(fetchMessagesAndSetTimer, 10 * 1000);
      } else {
        // 첫 fetch로부터 30분이 지났는지 확인
        const thirtyMinutesLater = firstFetchTime.add(30, "second");

        if (now.isAfter(thirtyMinutesLater)) {
          // 30분이 지난 경우 30분마다 호출
          timerId = setTimeout(fetchMessagesAndSetTimer, 30 * 60 * 1000);
        } else {
          // 30분이 지나지 않은 경우 10초마다 호출
          timerId = setTimeout(fetchMessagesAndSetTimer, 10 * 1000);
        }
      }
    };

    // 첫 fetch 호출
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fetchMessagesAndSetTimer();

    return () => {
      clearTimeout(timerId); // 컴포넌트 언마운트 시 타이머 해제
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [CHAT_URL, currentTab, firstFetchTime]); // 필요한 의존성 추가

  const onHandleTab = (tab: chatRoomTabMapKey) => {
    setCurrentTab(tab);
  };
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
