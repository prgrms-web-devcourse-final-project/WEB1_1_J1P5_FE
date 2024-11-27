import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko"; /** 한국어 로케일 임포트 */

/** 플러그인 확장 */
dayjs.extend(duration);
dayjs.extend(relativeTime);

/** 로케일 설정 (한국어) */
dayjs.locale("ko");

/**
 * 현재 시간이랑 param으로 들어온 Date 비교해서 남은 시간을 `XX일 XX시간 XX분 XX초` 형태로 리턴하는 함수입니다.
 * @param targetDate Date | string
 * @returns string
 */
export const getTimeRemaining = (targetDate: Date | string): string => {
  const now = dayjs();
  const target = dayjs(targetDate);

  if (target.isBefore(now)) {
    return "over";
  }

  const diff = dayjs.duration(target.diff(now));
  const parts: string[] = [];

  if (diff.days() > 0) parts.push(`${diff.days()}일`);
  if (diff.hours() > 0) parts.push(`${diff.hours()}시간`);
  if (diff.minutes() > 0)
    parts.push(`${String(diff.minutes()).padStart(2, "0")}분`);
  parts.push(`${String(diff.seconds()).padStart(2, "0")}초`);

  return parts.join(" ");
};

/**
 * 현재 시간이랑 param으로 들어온 Date 비교해서 남은 시간을 아래 형태로 변경하는 함수
 * https://day.js.org/docs/en/durations/humanize 참조 바람
 * 1초 ~ 59초 = "n 초 전",
 * 1분 ~ 59분 = "n 분 전",
 * 1시 ~ 23시간 = "n 시간 전"
 * 1일 ~ 29일 = "n 일 전"
 * 30일 ~ 364일 = "n 개월 전"
 * 365일 단위로 = "n 년 전"
 * @param date Date | string
 * @returns string
 */
export const getRelativeTime = (date: Date | string): string => {
  const now = dayjs();
  const target = dayjs(date);
  if (target.isAfter(now)) {
    return "전달받은 시간 값이 미래의 시간입니다.";
  }
  return dayjs.duration(target.diff(now)).humanize(true);
};
