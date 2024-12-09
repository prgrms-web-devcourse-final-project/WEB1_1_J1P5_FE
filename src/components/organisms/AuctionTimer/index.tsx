import { Text } from "components/atoms";
import { AuctionTimerWrapper } from "./styled";
import { useRemainingTimer } from "hooks";

interface IAuctionTimerProps {
  /** 경매 종료 시간 */
  targetDate: Date;
  /** 조기 마감 여부 */
  isEarly?: boolean;
  /** 데이터 다시 받아오기 함수 */
  refetch?: () => void;
}

export const AuctionTimer = ({
  targetDate,
  isEarly,
  refetch,
}: IAuctionTimerProps) => {
  const { timeRemaining } = useRemainingTimer(targetDate, refetch);

  return (
    <AuctionTimerWrapper>
      <Text
        variant="title_bold"
        content={
          timeRemaining === "over"
            ? "마감시간이 지나 경매가 종료되었습니다!"
            : isEarly
              ? `조기마감이 적용되어 ${timeRemaining} 남았어요!`
              : `경매 종료까지 ${timeRemaining} 남았어요!`
        }
      />
    </AuctionTimerWrapper>
  );
};
