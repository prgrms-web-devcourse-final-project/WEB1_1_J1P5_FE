import { Text } from "components/atoms";
import { AuctionTimerWrapper } from "./styled";
import { useRemainingTimer } from "hooks";

interface IAuctionTimerProps {
  /** 경매 종료 시간 */
  targetDate: Date;
}

export const AuctionTimer = ({ targetDate }: IAuctionTimerProps) => {
  const { timeRemaining } = useRemainingTimer(targetDate);

  return (
    <AuctionTimerWrapper>
      <Text
        variant="button"
        content={
          timeRemaining !== "over"
            ? `경매 종료까지 ${timeRemaining} 남았어요!`
            : "마감시간이 지나 경매가 종료되었습니다!"
        }
      />
    </AuctionTimerWrapper>
  );
};
