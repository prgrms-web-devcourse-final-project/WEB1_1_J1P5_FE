import { create, type StoreApi, type UseBoundStore } from "zustand";
import type { IconType } from "types";

interface TopBarState {
  // States
  title: string;
  onBackClick: () => void;
  value: string;
  setValue: (value: string) => void;
  icon?: IconType;
  onRightClick?: () => void;
  // SetActions
  setTitle: (title: string) => void;
  setBackClick: (backClick: () => void) => void;
  setSearchBar: (value: string, setValue: (value: string) => void) => void;
  setIcon: (icon: IconType) => void;
  setRightClick: (rightClick: () => void) => void;
  clear: () => void;
}

export const defaultState: Pick<
  TopBarState,
  "title" | "icon" | "onRightClick"
> = {
  title: "",
  icon: undefined,
  onRightClick: undefined,
};

export const useTopBarStore: UseBoundStore<StoreApi<TopBarState>> =
  create<TopBarState>((set, get) => ({
    ...defaultState,
    value: "",
    setValue: () => {},
    onBackClick: () => {},
    //
    setTitle: (title) => set({ ...get(), title }),
    setBackClick: (backClick) => set({ onBackClick: backClick }),
    setSearchBar: (value, setValue) => set({ ...get(), value, setValue }),
    setIcon: (icon) => set({ ...get(), icon }),
    setRightClick: (rightClick) => set({ ...get(), onRightClick: rightClick }),
    clear: () => set({ ...get(), ...defaultState }),
  }));
