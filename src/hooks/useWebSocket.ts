import { Client } from "@stomp/stompjs";
import { useState } from "react";

let stompClient: Client | undefined = undefined;

export function useWebSocket() {
  const [isConnected, setIsConnected] = useState(false); // WebSocket 연결 상태 관리

  const subscribeToChatRoom = (
    roomId: string,
    //TODO : 이 message 뭐 들어오는지 확인
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onMessageReceived: (message: any) => void
  ) => {
    if (stompClient && stompClient.connected) {
      return stompClient.subscribe(
        "/sub/chatroom/" + roomId,
        onMessageReceived
      );
    } else {
      console.error("WebSocket is not connected for subscription.");
    }
  };

  const connect = async (roomId: string) => {
    if (isConnected) {
      //console.log("WebSocket already connected.");
      return;
    }

    stompClient = new Client({
      brokerURL: "ws://localhost:8080/ws", // WebSocket 서버 URL
      debug: function (str: string) {
        //console.log(str);
      },
      onConnect: () => {
        //console.log("연결 완료");
        setIsConnected(true); // 상태 업데이트

        // 연결 후 자동으로 채팅방 구독
        subscribeToChatRoom(roomId, (message) => {
          console.log("메시지 수신:", JSON.parse(message.body));
        });
      },
      onStompError: (frame) => {
        console.error("Broker reported error: " + frame.headers.message);
        console.error("Additional details: " + frame.body);
      },
    });

    await stompClient.activate();
  };

  const disconnect = async () => {
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

  const sendMessage = (roomId: string, senderId: string, content: string) => {
    if (stompClient && stompClient.connected) {
      const chatMessage = {
        roomId: roomId,
        senderId: senderId,
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
