import dayjs from "dayjs";

/**
 * 현재 시간이랑 param으로 들어온 Date 비교해서 남은 시간을 `XX일 XX시간 XX분 XX초` 형태로 리턴하는 함수입니다.
 * @param targetDate Date
 * @returns string
 */
export const getTimeRemaining = (targetDate: Date): string => {
  const now = dayjs();
  const target = dayjs(targetDate);

  if (target.isBefore(now)) {
    return "마감시간이 지나 경매가 종료되었습니다!";
  }

  const diff = target.diff(now);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  const parts: string[] = [];

  if (days > 0) parts.push(`${days}일`);
  if (hours > 0) parts.push(`${hours}시간`);
  if (minutes > 0) parts.push(`${String(minutes).padStart(2, "0")}분`);
  if (seconds > 0) parts.push(`${String(seconds).padStart(2, "0")}초`);

  return parts.join(" ");
};

/**
 * 현재 시간이랑 param으로 들어온 Date 비교해서 남은 시간을 아래 형태로 변경하는 함수
 * 1초 ~ 59초 = "n 초 전",
 * 1분 ~ 59분 = "n 분 전",
 * 1시 ~ 23시간 = "n 시간 전"
 * 1일 ~ 29일 = "n 일 전"
 * 30일 ~ 364일 = "n 개월 전"
 * 365일 단위로 = "n 년 전"
 * @param date Date
 * @returns string
 */
export const getRelativeTime = (date: string): string => {
  const now = dayjs();
  const target = dayjs(date);

  if (target.isAfter(now)) {
    return "전달받은 시간 값이 미래의 시간입니다.";
  }

  const diffInSeconds = now.diff(target, "second");
  const diffInMinutes = now.diff(target, "minute");
  const diffInHours = now.diff(target, "hour");
  const diffInDays = now.diff(target, "day");
  const diffInMonths = now.diff(target, "month");
  const diffInYears = now.diff(target, "year");

  if (diffInSeconds < 60) {
    return `${diffInSeconds}초 전`;
  } else if (diffInMinutes < 60) {
    return `${diffInMinutes}분 전`;
  } else if (diffInHours < 24) {
    return `${diffInHours}시간 전`;
  } else if (diffInDays < 30) {
    return `${diffInDays}일 전`;
  } else if (diffInDays < 365) {
    return `${diffInMonths}개월 전`;
  } else {
    return `${diffInYears}년 전`;
  }
};
