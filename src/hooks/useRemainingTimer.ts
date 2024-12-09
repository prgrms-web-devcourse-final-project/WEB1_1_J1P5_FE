import { useEffect, useRef, useState } from "react";
import { getTimeRemaining } from "utils";

/**
 * 남은 시간을 계산하여 반환하는 hook
 * @param targetDate 기준이 될 날짜
 * @param refetch `optional` 만약 시간이 종료된 경우 실행될 함수
 * @returns timeRemaining 남은 시간 텍스트 (종료 시 "over")
 */
export const useRemainingTimer = (
  targetDate: Date | string,
  refetch?: () => void,
) => {
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

  useEffect(() => {
    if (timeRemaining === "over") {
      if (refetch) {
        refetch();
      }
    }
  }, [timeRemaining]);

  return {
    timeRemaining,
  };
};
