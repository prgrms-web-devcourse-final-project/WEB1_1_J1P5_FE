/**
 * 알림
 */
export interface INotification {
  /** 알림 제목 */
  title: string;
  /** 알림 설명(내용) */
  desc: string;
  /** 이미지 */
  imgUrl?: string;
  /** 알림 클릭 시 실행될 함수 */
  onClick?: () => void;
}
