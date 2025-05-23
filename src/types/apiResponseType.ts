export interface ApiResponse<T> {
  code: number;
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
}

export interface SearchProductsResponseData {
  products: SearchedProduct[];
  pageable: Pageable;
}
