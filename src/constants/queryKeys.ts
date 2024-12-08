const SESSION = "session" as const;
const PRODUCT = "product" as const;
const COMMENT = "comment" as const;
const AUCTION = "auction" as const;
const PURCHASES = "purchases" as const;
const BIDDING = "bidding" as const;

export const queries = {
  session: {
    DEFAULT: [SESSION],
  },
  product: {
    DEFAULT: [PRODUCT],
    detail: (productId: string) => [PRODUCT, productId],
  },
  comment: {
    DEFAULT: (productId: string) => [COMMENT, productId],
  },
  auction: {
    DEFAULT: [AUCTION],
    purchases: [AUCTION, PURCHASES],
    bidding: [AUCTION, BIDDING],
  },
} as const;
