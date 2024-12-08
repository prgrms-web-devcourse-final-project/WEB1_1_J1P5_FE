import { create, type StoreApi, type UseBoundStore } from "zustand";
import { persist } from "zustand/middleware";
import { produce } from "immer";
import type { IUser } from "types";
import { LOGO_PATH } from "constants/imgPath";

const localStorageKey = "meerket--login" as const;

interface UserState {
  user: IUser | null; // @rushstack/ no-new-null
  setUser: (user: IUser | null) => void;
}

// TODO: 프로필 이미지가 없을 시 Logo를 넣은 부분 테스트 필요
export const useUserStore: UseBoundStore<StoreApi<UserState>> = create(
  persist<UserState>(
    (set) => ({
      user: null,
      setUser: (user) => {
        if (user && !user.profile) {
          user.profile = LOGO_PATH;
        }
        set(
          produce((state: UserState) => {
            if (state.user) {
              Object.assign(state.user, user);
            } else {
              state.user = user;
            }
          })
        );
      }
    }),
    {
      name: localStorageKey
    }
  )
);
