import { useEffect, useState } from "react";
import { Toast } from "components/atoms";
import { BlockedUsersTemplate, EmptyTemplate } from "components/templates";
import { http } from "services/api";
import { IResponse, IBlockedUserItem } from "types";

interface IBlockedUser {
  memberId: number;
  profile: string;
  nickname: string;
  address: string;
}

interface IBlockedUserId {
  memberId: number;
}

const fetchBlockedUsers = async (): Promise<IBlockedUser[] | undefined> => {
  try {
    const response = await http.get<IBlockedUsersResponse>("/blocks");
    if (response.success && response.code === "COMMON200") {
      return response.result;
    }
  } catch (error) {
    console.error("Failed to fetch messages:", error);
    return undefined;
  }
};

const unblockUser = async (memberId: number): Promise<boolean> => {
  try {
    const response = await http.delete<IResponse, IBlockedUserId>(`/reports`, {
      memberId
    });
    return response.success && response.code === "COMMON200";
  } catch (error) {
    console.error("Failed to fetch messages:", error);
    return false;
  }
};

const blockUser = async (memberId: number): Promise<boolean> => {
  try {
    const response = await http.post<IResponse, IBlockedUserId>(`/reports`, {
      memberId
    });
    return response.success && response.code === "COMMON200";
  } catch (error) {
    console.error("Failed to fetch messages:", error);
    return false;
  }
};

interface IBlockedUsersResponse extends IResponse {
  result: IBlockedUser[];
}

export const BlockedUsersPage = () => {
  const [blockedUserItems, setBlockedUserItems] = useState<IBlockedUserItem[]>(
    []
  );
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadBlockedUsers = async () => {
      try {
        const blockedUsersResult: IBlockedUser[] | undefined =
          await fetchBlockedUsers();
        let defaultBlockedUserItems: IBlockedUserItem[];
        if (blockedUsersResult && blockedUsersResult.length > 0) {
          defaultBlockedUserItems = blockedUsersResult?.map((user) => ({
            memberId: user.memberId,
            imgUrl: user.profile,
            nickname: user.nickname,
            address: user.address,
            isBlocked: true
          }));
        } else {
          defaultBlockedUserItems = [];
        }

        setBlockedUserItems(defaultBlockedUserItems);
      } catch (error) {
        console.error("Failed to fetch blocked users:", error);
      } finally {
        setLoading(false);
      }
    };

    loadBlockedUsers().catch((error) => {
      console.error("Failed to load blocked users:", error);
    });
  }, []);

  const handleClick = async (index: number) => {
    const user = blockedUserItems[index];
    const isBlocked: boolean = user.isBlocked;

    setBlockedUserItems((prevItems: IBlockedUserItem[]) =>
      prevItems.map((item, i) =>
        i === index
          ? {
              ...item,
              isBlocked: !item.isBlocked
            }
          : item
      )
    );

    try {
      let isSuccess: boolean;
      if (isBlocked) {
        isSuccess = await unblockUser(Number(user.memberId));
        if (isSuccess) {
          Toast.show(`${user.nickname}님 차단을 해제했어요`, 2000);
        } else {
          throw new Error("Unblock failed");
        }
      } else {
        isSuccess = await blockUser(Number(user.memberId));
        if (isSuccess) {
          Toast.show(`${user.nickname}님을 차단했어요`, 2000);
        } else {
          throw new Error("Block failed");
        }
      }
    } catch (error) {
      setBlockedUserItems((prevItems: IBlockedUserItem[]) =>
        prevItems.map((item, i) =>
          i === index
            ? {
                ...item,
                isBlocked
              }
            : item
        )
      );
      Toast.show("문제가 생겼어요. 잠시 후에 다시 시도해주세요", 2000);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {blockedUserItems.length > 0 ? (
        <BlockedUsersTemplate
          blockedUserItems={blockedUserItems}
          onClick={handleClick}
        />
      ) : (
        <EmptyTemplate type="blockedUser" />
      )}
    </>
  );
};
