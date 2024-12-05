export interface IBlockedUserItem {
  /** 유저 IDd */
  memberId: number;
  /** 프로필 이미지 URL */
  imgUrl: string;
  /** 닉네임 */
  nickname: string;
  /** 인증한 지역 */
  address: string;
  /** 차단 여부 */
  isBlocked: boolean;
}
