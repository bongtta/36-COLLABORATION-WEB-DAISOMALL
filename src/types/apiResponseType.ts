export interface ApiResponse<T> {
  status: number;
  message: string;
  data: T;
}

export interface Pageable {
  pageNumber: number;
  pageSize: number;
  numberOfElements: number;
  isLast: boolean;
}

export interface SearchedProduct {
  productId: number;
  productName: string;
  productCode: string;
  price: number;
  mainImage: string;
}

export interface SearchProductsResponseData {
  products: SearchedProduct[];
  pageable: Pageable;
}

// 브랜드 타입 추가
export type BrandType = 'VT' | '비즈' | '락앤락';

// 정렬 옵션 타입 추가
export type SortOptionType = 'latest' | 'priceLow' | 'priceHigh';
