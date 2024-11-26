import { useState, useEffect } from "react";
import { Text } from "components/atoms";
import { getTimeRemaining } from "utils";
import { AuctionTimerWrapper } from "./styled";

interface IAuctionTimerProps {
  /** 경매 종료 시간 */
  targetDate: Date;
}

export const AuctionTimer = ({ targetDate }: IAuctionTimerProps) => {
  const [timeRemaining, setTimeRemaining] = useState<string>("");

  useEffect(() => {
    const updateTimer = () => {
      setTimeRemaining(getTimeRemaining(targetDate));
    };

    updateTimer();

    const intervalId = setInterval(updateTimer, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

  return (
    <AuctionTimerWrapper>
      <Text content={"경매까지 남은 시간 " + timeRemaining} />
    </AuctionTimerWrapper>
  );
};

