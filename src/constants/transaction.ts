export const BUYING_TAB: string = "입찰중";
export const COMPLETED_TAB: string = "거래완료";
export const SELLING_TAB: string = "판매중";

/** 시연용 더미 데이터 */
const DUMMY_ING_URL: string = "/dummy/transaction";
interface DummyPost {
  imgUrl: string;
  title: string;
  price: number;
  address: string;
  uploadTime: string;
  expiredTime: string;
  maxPrice: number;
}
const address: string = "경기도 부천시 소사구 송내동";
const uploadTimeArr: string[] = [
  "2024-12-05 10:00:00",
  "2024-12-08 15:00:00",
  "2024-12-08 20:00:00",
  "2024-12-04 23:00:00",
  "2024-12-02 23:00:00",
  "2024-11-01 23:00:00",
  "2024-03-08 23:00:00",
  "2023-12-08 23:00:00",
];
const expiredTimeArr: string[] = [
  "2024-12-12 10:00:00",
  "2024-12-11 15:00:00",
  "2024-12-10 20:00:00",
  "2024-12-10 23:00:00",
  "2024-12-12 10:00:00",
  "2024-12-11 15:00:00",
  "2024-12-10 20:00:00",
  "2024-12-10 23:00:00",
];
const titleArr: string[] = [
  "JImMM CHOO 구두 240",
  "스내치드 스몰 토트백 블랙",
  "중고 반클리프 아펠 스위트 알함브라 펜던트 목걸이",
  "L 사이즈 로즈 골드 컬러 쁘띠 CD 스타 참 반지",
  "아이패드 mini 2",
  "펠리칸 소베렌 M800",
  "다리미 팔아요~",
  "다이아 반지 처분합니다. ",
];
const priceArr: number[] = [
  550000, 895000, 1850000, 25000, 150000, 199999, 10000, 299999,
];
const maxPriceArr: number[] = [
  560000, 935000, 1855000, 30000, 150000, 230000, 13000, 499999,
];

export const TempData: DummyPost[] = titleArr.map((title, idx) => ({
  imgUrl: DUMMY_ING_URL + `/${idx + 1}.png`,
  title: title,
  price: priceArr[idx],
  address: address,
  uploadTime: uploadTimeArr[idx],
  expiredTime: expiredTimeArr[idx],
  maxPrice: maxPriceArr[idx],
}));

export const TempBuyData: DummyPost[] = TempData.slice(0, 4);

export const TempSellData: DummyPost[] = TempData.slice(4, 8);
