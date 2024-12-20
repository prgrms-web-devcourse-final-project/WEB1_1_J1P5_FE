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
    console.log('BlockedUsersPage 마운트됨');
    setTitle("차단 사용자 관리");
    
    return () => {
      console.log('BlockedUsersPage 언마운트됨');
      setUnblockingUsers(new Set());
      setProcessingUsers(new Set());
    };
  }, []);

  const {
    data,
    isLoading,
    isFetching,
    isFetchingNextPage,
    ref,
  } = useFetchBlockedUsers();

  const blockedUsers = useMemo<IBlockedUserItem[]>(() => {
    console.log('현재 데이터:', data?.pages);
    console.log('차단 해제 중인 유저:', Array.from(unblockingUsers));
    console.log('처리 중인 유저:', Array.from(processingUsers));
    console.log('데이터 fetch 중:', isFetching);  // fetch 상태 로깅

    if (!data?.pages?.length) return [];
    
    return data.pages.map(user => ({
      ...user,
      isBlocked: !unblockingUsers.has(user.userId)
    }));
  }, [data, unblockingUsers, isFetching]);

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
