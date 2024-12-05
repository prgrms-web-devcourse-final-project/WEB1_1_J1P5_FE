import { create, type StoreApi, type UseBoundStore } from "zustand";
import { persist } from "zustand/middleware";
import type { IUser } from "types";

const localStorageKey = "meerket--login" as const;

interface UserState {
  user?: IUser;
  setUser: (user: IUser) => void;
}

export const useUserStore: UseBoundStore<StoreApi<UserState>> = create(
  persist<UserState>(
    (set) => ({
      user: undefined,
      setUser: (user) => set({ user }),
    }),
    {
      name: localStorageKey,
    },
  ),
);
