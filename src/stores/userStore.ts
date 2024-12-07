import { create, type StoreApi, type UseBoundStore } from "zustand";
import { persist } from "zustand/middleware";
import type { IUser } from "types";

const localStorageKey = "meerket--login" as const;

interface UserState {
  user: IUser | null; // @rushstack/ no-new-null
  setUser: (user: IUser | null) => void;
}

export const useUserStore: UseBoundStore<StoreApi<UserState>> = create(
  persist<UserState>(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
    }),
    {
      name: localStorageKey,
    },
  ),
);
