import { formatDate } from "utils";
import ChatDayWarpper from "./ChatDay.styles";
import { Text } from "components/atoms";

interface ChatDayProps {
  /** 채팅 날짜 */
  date: string;
}
const ChatDay = ({ date }: ChatDayProps) => {
  //Date - > 'XXXX년XX월XX일(X) 형식으로 변환
  const formattedDate = formatDate(date);

  return (
    <ChatDayWarpper>
      <Text variant="tag_regular" content={formattedDate}></Text>
    </ChatDayWarpper>
  );
};

export default ChatDay;
