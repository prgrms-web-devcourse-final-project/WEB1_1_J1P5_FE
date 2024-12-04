import { create, type StoreApi, type UseBoundStore } from "zustand";
import type { ILocation } from "types";

interface State extends ILocation {
  location?: string;
}

interface Actions {
  actions: {
    setCoord: (coord: ILocation["coord"]) => void;
    setAddress: (address: string) => void;
    setLocation: (location: string) => void;
    clear: () => void;
  };
}

export const defaultState: State = {
  coord: undefined,
  address: "",
  location: ""
};

export const useSelectedLocationStore: UseBoundStore<
  StoreApi<State & Actions>
> = create<State & Actions>((set) => ({
  ...defaultState,
  actions: {
    setCoord: (coord) => set({ coord }),
    setAddress: (address) => set({ address }),
    setLocation: (location) => set({ location }),
    clear: () => set(defaultState)
  }
}));

