export interface ApiResponse<T> {
  success: boolean;
  data: T;
  error?: {
    code: string;
    message: string;
  };
}

// 기본 API 응답 구조
export interface BaseApiResponse<T = unknown> {
  status: number;
  message: string;
  data: T;
}

// --- 공통 타입 ---
export interface Pageable {
  pageNumber: number;
  pageSize: number;
  numberOfElements: number;
  isLast: boolean;
}

export interface PageRequest {
  pageNumber: number;
  pageSize: number;
}

// --- brand-controller ---
// GET /api/v1/brands/{brandId}/products
export interface BrandProduct {
  productId: number;
  productName: string;
  price: number;
  tags: string[];
}

export interface GetBrandProductsResponseData {
  products: BrandProduct[];
  pageable: Pageable;
}
// 요청시 request 객체는 PageRequest와 동일
// export type GetBrandProductsRequest = PageRequest; // 명시적으로 선언하거나, API 함수에서 PageRequest를 직접 사용

// --- product-controller ---
// GET /api/v1/products/{productId}
export interface ProductImageInfo {
  productImageId: number;
  imageUrl: string;
  sortOrder: number;
}

export interface GetProductDetailResponseData {
  productId: number;
  productName: string;
  price: string; // 명세서 기준
  ratingAvg: string; // 명세서 기준
  reviewCount: string; // 명세서 기준
  brandName: string;
  productImages: {
    main: ProductImageInfo[];
    detail: ProductImageInfo[];
  };
}

// GET /api/v1/products/search
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

export interface SearchProductsRequest extends PageRequest {
  // keyword는 API 함수 파라미터로 직접 받음
}

// GET /api/v1/products/search/{keyword}/sort
export interface SortProductsRequest extends PageRequest {
  sortOption: string; // "latest", "priceLow", "priceHigh" 등 예상, 명세서에는 string으로만 표기
}
// 응답 데이터는 SearchProductsResponseData와 동일

// GET /api/v1/products/popular
export interface PopularProduct {
  productId: number;
  productName: string;
  productCode: string;
  price: number;
}

export interface GetPopularProductsResponseData {
  pages: PopularProduct[][]; // 2차원 배열
  total: number;
}

// --- review-controller ---
// GET /api/v1/reviews
export interface ReviewImage {
  reviewImageId: number;
  imageUrl: string;
  isMain: boolean;
  sortOrder: number;
}

export interface Review {
  reviewId: number;
  nickname: string;
  profileImageUrl: string;
  rating: number;
  content: string;
  images: ReviewImage[];
}

export interface GetReviewsResponseData {
  reviews: Review[];
  pageable: Pageable;
}
// 요청시 productId는 API 함수 파라미터로, request 객체는 PageRequest와 동일

// --- store-controller ---
// GET /api/v1/stores
export interface StoreStockInfo {
  storeId: number;
  storeName: string;
  location: string;
  openingHours: string;
  latitude: number;
  longitude: number;
  isPickupAvailable: boolean;
  floor: string;
  shelfNo: number; // 명세서에는 shelfNo: 0 으로 되어있어 number로 추정
  stockCount: number;
  stockStatus: string; // "AVAILABLE", "OUT_OF_STOCK" 등 예상
}

export interface GetStoreStockInfoResponseData {
  stores: StoreStockInfo[];
  pageable: Pageable;
}
// 요청시 productId는 API 함수 파라미터로, request 객체는 PageRequest와 동일

// GET /api/v1/stores/search
// 참고: 명세서 설명에 productId, keyword, request(pageNumber, pageSize)가 모두 query로 명시
export interface SearchStoreByNameInfo {
  storeId: number;
  storeName: string;
  location: string;
  openingHours: string;
  storeType: string;
  stockCount: number;
  shelfNo: number; // 명세서에는 shelfNo: 0 으로 되어있어 number로 추정
  floor: string;
}

export interface SearchStoreByNameResponseData {
  stores: SearchStoreByNameInfo[];
  pageable: Pageable;
}

// GET /api/v1/stores/filter
export interface FilterStoreRequestParams { // 명세서에는 basicRequest, filterRequest로 나뉘어 있지만, API 함수에서는 하나로 합치거나 개별 객체로 받을 수 있음
  pageNumber: number;
  pageSize: number;
  pickup?: boolean; // filterRequest 내부 필드
  excludeOutOfStock?: boolean; // filterRequest 내부 필드
  excludeStoreType?: boolean; // filterRequest 내부 필드. storeType을 어떤 것을 제외할지에 대한 구체적인 명시 필요.
}

export interface FilteredStoreInfo { // GetStoreStockInfoResponseData의 store와 동일한 구조로 보임
  storeId: number;
  storeName: string;
  location: string;
  openingHours: string;
  latitude: number;
  longitude: number;
  isPickupAvailable: boolean;
  floor: string;
  shelfNo: number;
  stockCount: number;
  stockStatus: string;
}

export interface FilterStoresResponseData {
  stores: FilteredStoreInfo[];
  pageable: Pageable;
}

