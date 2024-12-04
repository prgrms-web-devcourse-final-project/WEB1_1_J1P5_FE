const PRODUCT = "product" as const;
const COMMENT = "comment" as const;

export const queries = {
  product: {
    DEFAULT: [PRODUCT],
    detail: (productId: string) => [PRODUCT, productId],
  },
  comment: {
    DEFAULT: (productId: string) => [COMMENT, productId],
  },
} as const;
