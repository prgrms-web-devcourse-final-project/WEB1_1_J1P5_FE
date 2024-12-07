import { create, type StoreApi, type UseBoundStore } from "zustand";

interface State {
  activityAreaId: number;
  activityArea: string;
}

interface Actions {
  actions: {
    setActivityArea: (activityAreaId: number, activityArea: string) => void;
    clear: () => void;
  };
}

export const defaultState: State = {
  activityAreaId: 0,
  activityArea: "서울시 강남구 역삼동"
};

export const useActivityAreaStore: UseBoundStore<StoreApi<State & Actions>> =
  create<State & Actions>((set) => ({
    ...defaultState,
    actions: {
      setActivityArea: (activityAreaId, activityArea) =>
        set({ activityAreaId, activityArea }),
      clear: () => set(defaultState)
    }
  }));
