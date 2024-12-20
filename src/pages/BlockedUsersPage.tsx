import { useEffect, useState, useMemo } from "react";
import { Toast } from "components/atoms";
import { BlockedUsersTemplate, EmptyTemplate } from "components/templates";
import { blockUser, unblockUser} from "services/apis";
import { useTopBarStore } from "stores";
import { useFetchBlockedUsers } from "hooks";
import { Loading } from "components/molecules/Loading";
import { IBlockedUserItem } from "types";

export const BlockedUsersPage = () => {
  const { setTitle } = useTopBarStore();
  const [unblockingUsers, setUnblockingUsers] = useState<Set<number>>(new Set());
  const [processingUsers, setProcessingUsers] = useState<Set<number>>(new Set());

  useEffect(() => {
    setTitle("차단 사용자 관리");
  }, []);

  const {
    data,
    isLoading,
    isFetchingNextPage,
    ref,
  } = useFetchBlockedUsers();

  const blockedUsers = useMemo<IBlockedUserItem[]>(() => 
    data?.pages.map(user => ({
      ...user,
      isBlocked: !unblockingUsers.has(user.userId)
    })) ?? [], 
    [data, unblockingUsers]
  );

  const handleClick = async (index: number) => {
    const user = blockedUsers[index];
    if (!user?.userId || processingUsers.has(user.userId)) return;

    setProcessingUsers(prev => new Set([...prev, user.userId]));
    try {
      const isCurrentlyBlocked = !unblockingUsers.has(user.userId); 
      if (isCurrentlyBlocked) {
        await unblockUser(user.userId);
        setUnblockingUsers(prev => new Set([...prev, user.userId]));
        Toast.show(`${user.nickname}님 차단을 해제했어요`, 2000);
      } else {
        await blockUser(user.userId);
        setUnblockingUsers(prev => {
          const newSet = new Set(prev);
          newSet.delete(user.userId);
          return newSet;
        });
        Toast.show(`${user.nickname}님을 차단했어요`, 2000);
      }
    } catch (error: unknown) {
      console.error('Failed to handle block/unblock:', error);
      Toast.show("문제가 생겼어요. 잠시 후에 다시 시도해주세요", 2000);
    } finally {
      setProcessingUsers(prev => {
        const newSet = new Set(prev);
        newSet.delete(user.userId);
        return newSet;
      });
    }
  };
  


  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      {blockedUsers.length > 0 ? (
        <BlockedUsersTemplate
          blockedUserItems={blockedUsers}
          onClick={handleClick}
        >
          {!isFetchingNextPage && <div ref={ref} />}
        </BlockedUsersTemplate>
      ) : (
        <EmptyTemplate type="blockedUser" />
      )}
    </>
  );
};
