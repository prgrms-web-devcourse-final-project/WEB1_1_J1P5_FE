import { Client } from "@stomp/stompjs";
import { IChatMsg } from "pages/ChatRoomPage";
import { useState } from "react";

let stompClient: Client | undefined = undefined;

export function useWebSocket() {
  const [isConnected, setIsConnected] = useState(false); // WebSocket 연결 상태 관리

  const subscribeToChatRoom = (
    roomId: string,
    //TODO : 이 message 뭐 들어오는지 확인
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setChats: React.Dispatch<React.SetStateAction<IChatMsg[]>>
  ) => {
    if (stompClient && stompClient.connected) {
      return stompClient.subscribe("/sub/chatroom/" + roomId, (message) => {
        const newMsg = JSON.parse(message.body);
        newMsg.createdAt = new Date();
        newMsg.id = "0";
        console.log("메시지 수신:", JSON.parse(message.body));
        setChats((prev) => [...prev, newMsg]);
      });
    } else {
      console.error("WebSocket is not connected for subscription.");
    }
  };

  const connect = async (
    roomId: string,
    setChats: React.Dispatch<React.SetStateAction<IChatMsg[]>>
  ) => {
    if (isConnected) {
      console.log("WebSocket already connected.");
      return;
    }

    stompClient = new Client({
      brokerURL: "ws://localhost:8080/ws", // WebSocket 서버 URL
      debug: function (str: string) {
        //console.log(str);
      },
      onConnect: () => {
        console.log("연결 완료");
        setIsConnected(true); // 상태 업데이트

        // 구독 실행 및 반환 값 확인
        const subscription = subscribeToChatRoom(roomId, setChats);

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

  const sendMessage = (roomId: string, senderId: number, content: string) => {
    if (stompClient && stompClient.connected) {
      const chatMessage = {
        roomId: roomId,
        receiverId: senderId,
        content: content,
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
