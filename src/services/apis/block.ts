
import { http } from "services/api";
import type {
    IBlockUser,
    IUnblockUser,
    IGetBlockedUsersResponse,
    IBlockResponse
} from "types";


export const getBlockedUsers = async ({page, size}: {page: number, size: number}) => {
    return http.get<IGetBlockedUsersResponse, {page: number, size:number}>("/blocks",{
        page: page, size: size
      });
};
  
export const blockUser = async (blockUserId: number) => {
    return  http.post<IBlockResponse, IBlockUser>(`/blocks`, {
        blockUserId
      });
    
};
    
export const unblockUser = async (unblockId: number) => {
    return http.delete<IBlockResponse, IUnblockUser>(`/blocks`, {
        unblockId
      });

};