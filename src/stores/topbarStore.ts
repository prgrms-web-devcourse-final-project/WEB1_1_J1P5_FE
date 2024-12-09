import { create, type StoreApi, type UseBoundStore } from "zustand";
import type { IconType } from "types";

interface TopBarState {
  // States
  title: string;
  onBackClick: () => void;
  value: string;
  setValue: (value: string) => void;
  onSearch?: () => void;
  placeholder?: string;
  icon?: IconType;
  onRightClick?: () => void;
  // SetActions
  setTitle: (title: string) => void;
  setBackClick: (backClick: () => void) => void;
  setSearchBar: (
    value: string,
    setValue: (value: string) => void,
    placeholder?: string,
    onSearch?: () => void,
  ) => void;
  setRightIcon: (icon: IconType, onClick: () => void) => void;
  clear: () => void;
}

export const defaultState: Pick<TopBarState, "icon" | "onRightClick"> = {
  icon: undefined,
  onRightClick: undefined,
};

export const useTopBarStore: UseBoundStore<StoreApi<TopBarState>> =
  create<TopBarState>((set, get) => ({
    ...defaultState,
    title: "",
    value: "",
    placeholder: "",
    setValue: () => {},
    onSearch: () => {},
    onBackClick: () => {},
    //
    setTitle: (title) => set({ ...get(), title }),
    setBackClick: (backClick) => set({ onBackClick: backClick }),
    setSearchBar: (value, setValue, placeholder = "", onSearch) =>
      set({ ...get(), value, setValue, placeholder, onSearch }),
    setRightIcon: (icon, onClick) =>
      set({ ...get(), icon, onRightClick: onClick }),
    clear: () => set({ ...get(), ...defaultState }),
  }));
