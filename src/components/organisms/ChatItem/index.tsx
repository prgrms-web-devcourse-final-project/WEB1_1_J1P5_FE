import { OverlappingImage } from "components/molecules";
import { ChatItemWrapper } from "./styled";
import { Badge, Text } from "components/atoms";
import { getRelativeTime } from "utils";

interface IChatItemProps {
  profileImgUrl: string;
  itemImgUrl: string;
  name: string;
  lastMsg: string;
  lastMsgTime: string;
  lastMsgCnt: number;
  onClick: () => void;
}

export const ChatItem = ({
  profileImgUrl,
  itemImgUrl,
  name,
  lastMsg,
  lastMsgTime,
  lastMsgCnt,
  onClick,
}: IChatItemProps) => {
  const lastMsgTimeStr = getRelativeTime(lastMsgTime);
  return (
    <ChatItemWrapper onClick={onClick}>
      <div className="img-msg-con">
        <OverlappingImage
          frontImgUrl={itemImgUrl}
          backImgUrl={profileImgUrl}
          type="square"
        ></OverlappingImage>
        <div className="msg-con">
          <Text content={name}></Text>
          <Text content={lastMsg}></Text>
        </div>
      </div>
      <div className="time-cnt-con">
        <Text content={lastMsgTimeStr}></Text>
        {lastMsgCnt > 0 && <Badge text={lastMsgCnt.toString()}></Badge>}
      </div>
    </ChatItemWrapper>
  );
};
