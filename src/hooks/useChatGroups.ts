import { useEffect, useState } from "react";

import { IChatMsg } from "pages/ChatRoomPage";
import { IChatBubbleProps } from "components/organisms/ChatBubble";

// 커스텀 훅: chatList 변경에 따라 그룹화된 chatGroups를 반환
export function useChatGroups(
  chatList: IChatMsg[] | undefined,
  otherUserId: number,
  imgUrl: string
) {
  const [chatGroups, setChatGroups] = useState<IChatBubbleProps[]>([]);
  useEffect(() => {
    if (chatList) {
      const groups = groupChats(chatList, otherUserId, imgUrl);
      setChatGroups(groups);
    }
  }, [chatList, imgUrl, otherUserId]);
  return chatGroups;
}

// 시간과 발신자 기준으로 그룹화하는 함수
function groupChats(
  chatList: IChatMsg[],
  otherUserId: number,
  imgUrl: string
): IChatBubbleProps[] {
  const groups: IChatBubbleProps[] = [];
  let currentGroup: IChatBubbleProps | null = null;

  chatList.forEach((chat) => {
    const chatTime = formatTime(chat.createdAt);
    const isMe = chat.senderId !== otherUserId;
    if (
      !currentGroup ||
      currentGroup.isMe !== isMe ||
      formatTime(currentGroup.chats[0].createdAt) !== chatTime
    ) {
      currentGroup = {
        isMe,
        imgUrl: imgUrl,
        chats: [],
      };
      groups.push(currentGroup);
    }

    currentGroup.chats.push({
      msg: chat.content,
      isLastMsg: false,
      isRead: true,
      createdAt: chat.createdAt,
    });
  });

  return groups;
}

// 시간(분 단위) 포맷팅 함수
function formatTime(datestr: string): string {
  const date = new Date(datestr);
  return date.toISOString().slice(0, 16); // 'YYYY-MM-DDTHH:mm'
}
