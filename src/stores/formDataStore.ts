import { create, type StoreApi, type UseBoundStore } from "zustand";
import { produce } from "immer";

import type { IProductForm } from "types";

interface State {
  formData: IProductForm;
}

interface Actions {
  actions: {
    setFormData: (data: Partial<IProductForm>) => void;
    isFormDataEmpty: () => boolean;
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
    imgUrls: [],
  },
};

export const useFormDataStore: UseBoundStore<StoreApi<State & Actions>> =
  create<State & Actions>((set, get) => ({
    ...defaultState,
    actions: {
      setFormData: (data) =>
        set(
          produce((state: State) => {
            Object.assign(state.formData, data);
          })
        ),
      isFormDataEmpty: () => {
        const { formData } = get();
        return Object.values(formData).every(
          (value) => value === undefined || value === null || value === ""
        );
      },
      clear: () => set(defaultState),
    },
  }));
