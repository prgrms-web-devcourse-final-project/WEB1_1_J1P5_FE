import { Client } from "@stomp/stompjs";
import { IChatMsg } from "pages/ChatRoomPage";
import { useState } from "react";

let stompClient: Client | undefined = undefined;

export function useWebSocket() {
  const [isConnected, setIsConnected] = useState(false); // WebSocket 연결 상태 관리

  const subscribeToChatRoom = (
    roomId: string,
    userId: string,
    //TODO : 이 message 뭐 들어오는지 확인
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setChats: React.Dispatch<React.SetStateAction<IChatMsg[]>>
  ) => {
    if (stompClient && stompClient.connected) {
      return stompClient.subscribe(
        "/sub/chatroom/" + roomId,
        (message) => {
          const newMsg = JSON.parse(message.body);
          newMsg.createdAt = new Date();
          newMsg.id = "0";
          console.log("메시지 수신:", JSON.parse(message.body));
          setChats((prev) => [...prev, newMsg]);
        },
        /** TODO: 채팅 방 목록에서 userID 받아서 여기에 userId 넣어야함
         * 채팅방 목록에서 userID 받는 법은 기본 chatroom basic Info 에서 추가하기로 하였음.  */
        {
          userId: userId, // 헤더에 userId 추가
        }
      );
    } else {
      console.error("WebSocket is not connected for subscription.");
    }
  };

  const connect = async (
    roomId: string,
    userId: string,
    setChats: React.Dispatch<React.SetStateAction<IChatMsg[]>>
  ) => {
    if (isConnected) {
      console.log("WebSocket already connected.");
      return;
    }

    stompClient = new Client({
      brokerURL: `wss://${import.meta.env.VITE_WEBSOCKET_URL}/ws`, // WebSocket 서버 URL
      debug: function (str: string) {
        console.log(str);
      },
      onConnect: () => {
        console.log("연결 완료");
        setIsConnected(true); // 상태 업데이트
        // 구독 실행 및 반환 값 확인
        const subscription = subscribeToChatRoom(roomId, userId, setChats);

        if (subscription) {
          console.log("Successfully subscribed to room:", subscription);
        } else {
          console.error("Failed to subscribe to room:", subscription);
        }
      },
      onStompError: (frame) => {
        console.error("Broker reported error: " + frame.headers.message);
        console.error("Additional details: " + frame.body);
      },
    });

    await stompClient.activate();
  };

  const disconnect = async () => {
    console.log("disconnect 실행");
    console.log(isConnected);
    if (!isConnected) {
      console.log("WebSocket is not connected.");
      return;
    }
    if (stompClient) {
      await stompClient.deactivate();
      console.log("웹 소켓 연결 끊음");
      setIsConnected(false); // 상태 업데이트
    }
    console.log("Disconnected");
  };

  /**
   * TODO
   * 파라미터에 receiverId: number, 추가
   * chatMessage쪽에 receiverId는 receiverId, senderId: senderId, 로 재변경 필요
   *
   */
  const sendMessage = (
    roomId: string,
    content: string,
    senderId: number, // 나
    receiverId: number // 받는 사람
  ) => {
    if (stompClient && stompClient.connected) {
      const chatMessage = {
        roomId: roomId,
        receiverId: receiverId, //받는 사람 otheruserId
        content: content,
        senderId: senderId,
      };
      console.log("Sending message:", chatMessage);
      stompClient.publish({
        destination: "/pub/message",
        body: JSON.stringify(chatMessage),
      });
    } else {
      console.error("WebSocket is not connected.");
    }
  };

  return { connect, disconnect, sendMessage, isConnected };
}
