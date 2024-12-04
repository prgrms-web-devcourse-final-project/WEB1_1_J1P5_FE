import { create, type StoreApi, type UseBoundStore } from "zustand";

interface State {
  isOpen: boolean;
  content?: React.ReactNode;
}

interface Actions {
  actions: {
    openModal: (content: React.ReactNode) => void;
    closeModal: () => void;
  };
}

export const defaultState: State = {
  isOpen: false,
  content: undefined
};

export const useModalStore: UseBoundStore<StoreApi<State & Actions>> = create<
  State & Actions
>((set) => ({
  ...defaultState,
  actions: {
    openModal: (content) => set({ isOpen: true, content }),
    closeModal: () => set(defaultState)
  }
}));

