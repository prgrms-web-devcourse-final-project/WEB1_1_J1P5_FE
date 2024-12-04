import { CATEGORIES } from "./categories";
import type { ISelectOption } from "types";

export const CATEGORY_OPTIONS: ISelectOption[] = CATEGORIES.map((category) => ({
  value: category.code,
  label: category.name
}));

export const EXPIRED_TIMES: ISelectOption[] = [
  { value: "3일 후", label: "3일 후" },
  { value: "2일 후", label: "2일 후" },
  { value: "24시간 후", label: "24시간 후" },
  { value: "12시간 후", label: "12시간 후" },
  { value: "6시간 후", label: "6시간 후" }
] as const;

