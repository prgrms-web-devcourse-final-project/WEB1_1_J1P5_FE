import { create, type StoreApi, type UseBoundStore } from "zustand";
import { produce } from "immer";

import type { IPostForm } from "types";

interface State {
  formData: IPostForm;
}

interface Actions {
  actions: {
    setFormData: (data: Partial<IPostForm>) => void;
    clear: () => void;
  };
}

export const defaultState: State = {
  formData: {
    title: "",
    content: "",
    minimumPrice: undefined,
    category: undefined,
    latitude: undefined,
    longitude: undefined,
    address: "",
    location: "",
    expiredTime: undefined,
    imgUrls: []
  }
};

export const useFormDataStore: UseBoundStore<StoreApi<State & Actions>> =
  create<State & Actions>((set) => ({
    ...defaultState,
    actions: {
      setFormData: (data) =>
        set(
          produce((state: State) => {
            Object.assign(state.formData, data);
          })
        ),
      clear: () => set(defaultState)
    }
  }));
