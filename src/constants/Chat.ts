export type chatRoomTabMapKey = "전체" | "판매" | "구매" | "안 읽은 채팅방";
export type chatRoomTabMapValue = "ALL" | "SALE" | "PURCHASE";
export const chatRoomTabMap: Map<chatRoomTabMapKey, chatRoomTabMapValue> =
  new Map<chatRoomTabMapKey, chatRoomTabMapValue>();
chatRoomTabMap.set("전체", "ALL");
chatRoomTabMap.set("판매", "SALE");
chatRoomTabMap.set("구매", "PURCHASE");
chatRoomTabMap.set("안 읽은 채팅방", "ALL");

export const CHAT_URL: string = `/chats`;
