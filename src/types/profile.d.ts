export interface IProfile {
  /** 프로필 이미지 URL */
  imgUrl: string;
  /** 닉네임 */
  nickname: string;
  /** 인증한 지역 */
  location: string;
  /** 차단 여부 */
  isBlocked: boolean;
}
export interface IBlockedUserItem {
  /** 유저 프로필 */
  profile: IProfile;
  /** 차단하기 버튼 클릭시 동작 */
  onClick: (index: number) => void;
}

