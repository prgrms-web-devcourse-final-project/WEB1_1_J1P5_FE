import { create, type StoreApi, type UseBoundStore } from "zustand";
import type { IUser } from "types";

interface UserState {
  user?: IUser;
  setUser: (user: IUser) => void;
}

export const useUserStore: UseBoundStore<StoreApi<UserState>> =
  create<UserState>((set) => ({
    user: undefined,
    setUser: (user) => set({ user }),
  }));
