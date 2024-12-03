import { create, type StoreApi, type UseBoundStore } from "zustand";

interface HeaderState {
  title: string;
  setTitle: (title: string) => void;
}

export const useHeaderStore: UseBoundStore<StoreApi<HeaderState>> =
  create<HeaderState>((set) => ({
    title: "",
    setTitle: (title) => set({ title }),
  }));
