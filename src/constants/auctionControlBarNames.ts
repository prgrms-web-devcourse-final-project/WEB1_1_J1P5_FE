export const priceKeys = ["minimumPrice", "maximumPrice", "myPrice"] as const;
export type PriceKey = (typeof priceKeys)[number];
export const priceNames: Record<PriceKey, string> = {
  minimumPrice: "최소 입찰가",
  maximumPrice: "현재 최고 입찰가",
  myPrice: "내 입찰가",
};

export const buttonKeys = ["bid", "edit", "cancel", "early"] as const;
export type ButtonKey = (typeof buttonKeys)[number];
export const buttonNames: Record<ButtonKey, string> = {
  bid: "입찰하기",
  edit: "수정하기",
  cancel: "취소하기",
  early: "경매 조기 종료하기",
} as const;
