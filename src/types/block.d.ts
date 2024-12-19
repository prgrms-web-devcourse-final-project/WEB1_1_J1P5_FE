import { IBlockedUser } from "types";

export interface IBlockedUserItem extends IBlockedUser {
  /** 차단 여부 */
  isBlocked: boolean;
}
