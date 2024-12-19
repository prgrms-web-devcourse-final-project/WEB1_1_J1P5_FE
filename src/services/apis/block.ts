import { http } from "services/api";
import type {
    IBlockUser,
    IUnblockUser,
    IGetBlockedUsersResponse,
    IBlockResponse
} from "types";
import { BlockedUserResponse } from "types/response/block.d.ts";

export const getBlockedUsers = async ({ 
  page = 0, 
  size = 10 
}: { 
  page?: number; 
  size?: number;
}) => {
  const response = await http.get<BlockedUserResponse>(
    `/api/blocks?page=${page}&size=${size}`
  );
  return response.data;
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