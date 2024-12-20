import type { IResponse } from "types";

export interface IBlockedUser {
    /** 유저 Id */
    userId: number;
    /** 닉네임 */
    nickname: string;
    /** 프로필 이미지 URL */
    imageUrl: string;
    /** 인증한 지역 */
    emdName: string;
}

export interface IGetBlockedUsersResponse extends IResponse {
    result: {
        content: IBlockedUser[],
        totalPages: number;
        hasNext: boolean;
    };
}
  
export interface IBlockUser {
    blockUserId: number;
}

export interface IUnblockUser {
    unblockId: number;
}
  
export interface IBlockResponse extends IResponse {
    result: null;
}