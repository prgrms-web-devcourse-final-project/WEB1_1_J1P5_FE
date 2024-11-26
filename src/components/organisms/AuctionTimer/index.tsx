import { useEffect, useState, useRef } from "react";
import { Text } from "components/atoms";
import { getTimeRemaining } from "utils";
import { AuctionTimerWrapper } from "./styled";

interface IAuctionTimerProps {
  /** 경매 종료 시간 */
  targetDate: Date;
}

export const AuctionTimer = ({ targetDate }: IAuctionTimerProps) => {
  const [timeRemaining, setTimeRemaining] = useState<string>("");
  const intervalId = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const updateTimer = () => {
      const remainingTime = getTimeRemaining(targetDate);
      setTimeRemaining(remainingTime);

      if (intervalId.current && remainingTime === "over") {
        clearInterval(intervalId.current);
      }
    };

    updateTimer();

    if (timeRemaining !== "over") {
      intervalId.current = setInterval(updateTimer, 1000);
    }

    return () => {
      if (intervalId.current) {
        clearInterval(intervalId.current);
      }
    };
  }, [targetDate, timeRemaining]);

  return (
    <AuctionTimerWrapper>
      <Text
        content={
          timeRemaining !== "over"
            ? "경매까지 남은 시간 " + timeRemaining
            : "마감시간이 지나 경매가 종료되었습니다!"
        }
      />
    </AuctionTimerWrapper>
  );
};

