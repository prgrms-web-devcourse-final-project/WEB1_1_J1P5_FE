import { create, type StoreApi, type UseBoundStore } from "zustand";
import { produce } from "immer";
import { persist } from "zustand/middleware";

import type { IProductForm } from "types";

const localStorageKey = "meerket--formData" as const;

interface State {
  productId?: number;
  formData: IProductForm;
  setProductId: (id: string | number) => void;
  setFormData: (data: Partial<IProductForm>) => void;
  isFormDataEmpty: () => boolean;
  clear: () => void;
}

export const defaultState: Omit<
  State,
  "setFormData" | "setProductId" | "isFormDataEmpty" | "clear"
> = {
  productId: undefined,
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

export const useFormDataStore: UseBoundStore<StoreApi<State>> = create(
  persist<State>(
    (set, get) => ({
      ...defaultState,
      setProductId: (id: string | number) =>
        set(() => ({
          productId: Number(id),
        })),
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
      clear: () =>
        set(() => ({
          ...defaultState,
        })),
    }),
    {
      name: localStorageKey,
    }
  )
);
