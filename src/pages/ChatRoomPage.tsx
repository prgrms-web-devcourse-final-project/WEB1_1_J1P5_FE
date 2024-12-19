import { Loading } from "components/molecules/Loading";
import { IPost } from "components/organisms/PostList";
import { Toast } from "components/atoms";
import { EmptyTemplate } from "components/templates";
import { ChatRoomTemplate } from "components/templates/ChatRoomTemplate";
import { TopSheet } from "components/templates/ChatRoomTemplate/TopSheet";
import { DEFAULT_IMG_PATH } from "constants/imgPath";
import { useChatGroups } from "hooks/useChatGroups";
import { useWebSocket } from "hooks/useWebSocket";
import { throttle } from "lodash";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { http } from "services/api";
import { completeProduct } from "services/apis";
import { useTopBarStore } from "stores";
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
  /** 게시글 판매 동네*/
  sellerAddress: string;
  /** 게시글 등록 날짜 */
  productCreatedAt: string;
  /** 게시글 상태 */
  productStatus: "BIDDING" | "IN_PROGRESS" | "COMPLETED";
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
interface IChatRoomNewMsgResponse extends IResponse {
  result: IChatMsg[];
}
export const ChatRoomPage = () => {
  const { clear, setTitle } = useTopBarStore();
  const navigate = useNavigate();
  const { roomId, userId } = useParams(); // URL에서 roomId 가져오기
  const decrtyptRoomId = roomId ? decryptRoomId(roomId) : "";

  const chatRoomEnterurl = `/chats/enter/${decrtyptRoomId}`;
  const chatRoomNewMessagesurl = `/chats/messages`;
  const [post, setPost] = useState<IPost>();
  const [otherUserId, setOtherUserId] = useState<number>(-1);
  const [otherNickname, setOtherNickname] = useState<string>("");
  const [imgUrl, setImgUrl] = useState<string>(DEFAULT_IMG_PATH);
  const [chats, setChats] = useState<IChatMsg[]>([]);
  const [lastMsgTime, setLastMsgTime] = useState<string>("");
  const [isFirstFetch, setIsFirstFetch] = useState(true);
  const chatGroups = useChatGroups(chats, otherUserId, imgUrl);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const { connect, disconnect, sendMessage, isConnected } = useWebSocket();
  const [isMsgSended, setIsMsgSended] = useState<boolean>(false);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const [loading, setLoading] = useState(true); // 로딩 상태

  /** 백엔드 IChatRoom 타입을 프론트 IChatItemProps 으로 변환 함수
   * @param chatRoom : IChatRoom
   * @returns IChatItemProps
   */
  const createChatRoomBasicInfo = (
    chatRoomBasicInfo: IChatRoomBasic
  ): IPost => {
    setIsCompleted(chatRoomBasicInfo.productStatus === "COMPLETED");
    return {
      productId: chatRoomBasicInfo.productId,
      imgUrl: chatRoomBasicInfo.productImage || DEFAULT_IMG_PATH,
      title: chatRoomBasicInfo.productTitle,
      maxPrice: 0,
      price: chatRoomBasicInfo.price,
      address: chatRoomBasicInfo.sellerAddress,
      uploadTime: chatRoomBasicInfo.productCreatedAt,
      expiredTime: "",
      isSeller: chatRoomBasicInfo.isSeller,
      status: chatRoomBasicInfo.productStatus,
      onClick: () => {
        navigate(`/product/${chatRoomBasicInfo.productId}`);
      },
      onTextButtonClick: () => {
        completeProduct(chatRoomBasicInfo.productId!.toString())
          .then((data) => {
            console.log(data);
            Toast.show("거래가 완료되었어요!", 2000);
            setIsCompleted(true);
          })
          .catch((error) => {
            Toast.show("잠시 후에 다시 시도해 주세요.", 2000);
            console.error(error);
          });
      },
      onIconButtonClick: () => {
        console.log("onIconButtonClick");
      },
    };
  };

  /** 메시지 시간순(오름차순) 으로 정렬하는 함수
   * @param messages : IChatMsg[]
   * @return messages : IChatMsg[]
   */
  const sortMessages = (messages: IChatMsg[]): IChatMsg[] => {
    messages.sort((a, b) => {
      const dateA = new Date(a.createdAt); // a의 createdAt을 Date 객체로 변환
      const dateB = new Date(b.createdAt); // b의 createdAt을 Date 객체로 변환

      return dateA.getTime() - dateB.getTime(); // 오름차순 정렬
    });
    return messages;
  };

  /** 초기 채팅방 진입 시 기본 정보 및 초기 메시지30 불러오는 함수
   */
  const fetchMessages = async () => {
    console.log("메시지를 fetch하는 함수 실행");
    try {
      const response = await http.post<IChatRoomPageResponse>(chatRoomEnterurl);
      if (response.success && response.code === "COMMON200") {
        setOtherUserId(response.result.chatRoomBasicInfo.otherUserId);
        setOtherNickname(response.result.chatRoomBasicInfo.otherNickname);
        // 백엔드 타입 프론트엔드 타입으로 변환
        const createdPost = createChatRoomBasicInfo(
          response.result.chatRoomBasicInfo
        );
        setPost(createdPost);
        setImgUrl(
          response.result.chatRoomBasicInfo.otherProfileImage ||
            DEFAULT_IMG_PATH
        );
        if (response.result.messages.length !== 0) {
          const sortedMessages = sortMessages(response.result.messages);
          console.log(sortedMessages[0].createdAt);
          setChats(sortedMessages);
          setLastMsgTime(sortedMessages[0].createdAt);
        }
      }
    } catch (error) {
      console.error("Failed to fetch messages:", error);
    }
  };

  /** 스크롤 올릴때마다 30개씩 새로운 메시지만 fetch 하는 함수
   */
  const fetchNewMessages = async () => {
    console.log("새로운 메시지를 fetch하는 함수 실행");
    console.log(lastMsgTime);
    try {
      const response = await http.get<
        IChatRoomNewMsgResponse,
        { roomId: string; beforeTime: string }
      >(chatRoomNewMessagesurl, {
        roomId: decrtyptRoomId || "",
        beforeTime: lastMsgTime || "",
      });
      if (
        response.success &&
        response.code === "COMMON200" &&
        response.result.length !== 0
      ) {
        const sortedMessages = sortMessages(response.result);
        console.log(sortedMessages);
        const responseLastMsgTime = sortedMessages[0].createdAt;
        if (lastMsgTime !== responseLastMsgTime) {
          setChats([...sortedMessages, ...chats]);
          setLastMsgTime(responseLastMsgTime);
        }
      }
    } catch (error) {
      console.error("Failed to fetch messages:", error);
    }
  };

  /** 초기 채팅방 진입 시 수행되는 useEffect
   * 1. fetchChatMessages 호출
   */
  useEffect(() => {
    clear();
    const fetchChatMessages = async () => {
      await fetchMessages();
    };
    fetchChatMessages()
      .catch((error) => {
        console.error("Error fetchting Chat Message:", error);
      })
      .finally(() => {
        setLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setTitle(otherNickname);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [otherNickname]);

  /**
   * 2. connectToWebSocket 호출(웹소켓 연결)
   * 3. 컴포넌트 언마운트시 disconnectFromWebSocket 호출 설정
   * (isConnected 값 바로 반영안되는 문제로 초기 채팅방 진입 시 수행되는 useEffect와 분리 하였음)
   */
  useEffect(() => {
    /** 웹 소켓 연결 */
    const connectToWebSocket = async () => {
      if (decrtyptRoomId && userId) {
        await connect(decrtyptRoomId, userId, setChats);
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
  }, [isConnected]);

  /** 초기 채팅방 입장 시 스크롤 맨 아래로 내리는 함수
   */
  const scrollToBottom = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollIntoView({ behavior: "auto" });
      console.log("3. 스크롤 함수 완료");
    } else {
      console.log("3. 없지 않나?");
    }
  };

  /** 데이터가 fetch된 후, DOM이 렌더링된 상태에서 스크롤을 내리는 useEffect
   *  isFirstFetch 값에 따라 scrollToBottom() 실행해서 맨 아래로 내림
   */
  useEffect(() => {
    if (chatGroups.length !== 0 && isFirstFetch) {
      console.log("2. 스크롤 함수 실행");
      scrollToBottom();
      setIsFirstFetch(false);
    }
  }, [chatGroups, isFirstFetch]); // 데이터가 fetch된 이후에만 실행

  /** 스크롤 이벤트 핸들러, 스크롤 상단으로 올리는 경우 새로운 메시지 fetch 함수 실행
   *  throttle 사용하여 1.5초 딜레이
   */
  const handleScroll = throttle(async () => {
    const scrollTop = document.documentElement.scrollTop;
    if (scrollTop <= 100) {
      await fetchNewMessages();
    }
  }, 1500);

  /** lastMsgTime 값에 따라 윈도우에 스크롤 이벤트 등록하는 useEffect
   */
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastMsgTime]);

  const handleInput = (message: string) => {
    sendMessage(decrtyptRoomId, message, Number(userId!), otherUserId);
    setIsMsgSended(true);
  };

  useEffect(() => {
    if (chatGroups.length >= 0 && isMsgSended) {
      scrollToBottom();
      setIsMsgSended(false);
    }
  }, [chatGroups]); // 데이터가 fetch된 이후에만 실행

  const chatLoadingMsg = "채팅 글\n불러 오는 중";
  if (loading) {
    return <Loading message={chatLoadingMsg}></Loading>; // 로딩 중 메시지
  }
  return post ? (
    <>
      <TopSheet post={post} isCompleted={isCompleted}></TopSheet>
      <ChatRoomTemplate
        post={post}
        chatBubbles={chatGroups}
        onWriteMessage={handleInput}
        scrollContainerRef={scrollContainerRef}
      />
    </>
  ) : (
    <div style={{ width: "100%" }}>
      <EmptyTemplate type={"chatRoom"}></EmptyTemplate>
    </div>
  );
};
