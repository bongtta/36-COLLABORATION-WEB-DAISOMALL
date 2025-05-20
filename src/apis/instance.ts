import axios, { AxiosError, type InternalAxiosRequestConfig, type AxiosResponse } from 'axios';
import type {
  BaseApiResponse,
  PageRequest,
  GetBrandProductsResponseData,
  GetProductDetailResponseData,
  SearchProductsResponseData,
  SortProductsRequest,
  GetPopularProductsResponseData,
  GetReviewsResponseData,
  GetStoreStockInfoResponseData,
  SearchStoreByNameResponseData,
  FilterStoreRequestParams,
  FilterStoresResponseData
} from '../types/api';

const baseURL = import.meta.env.VITE_API_BASE_URL; // 환경 변수가 없으면 기본 /api/v1 사용 (명세서 기준)

const instance = axios.create({
  baseURL,
  timeout: 3000, // 타임아웃 3초
  headers: {
    'Content-Type': 'application/json',
  },
});

// 요청 인터셉터
instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // 예시: 인증 토큰 추가 로직 (필요시 주석 해제 및 수정)
    // const accessToken = localStorage.getItem('accessToken');
    // if (accessToken && config.headers) {
    //   config.headers.Authorization = `Bearer ${accessToken}`;
    // }
    return config;
  },
  (error: AxiosError) => {
    console.error('Request Error Interceptor:', error);
    return Promise.reject(error);
  },
);

// 응답 인터셉터
instance.interceptors.response.use(
  // API 응답 전체를 BaseApiResponse<T> 타입으로 받고, 실제 사용하는 data 필드만 반환
  <T>(response: AxiosResponse<BaseApiResponse<T>>): T => {
    // 명세서의 status가 200인 경우를 성공으로 간주
    // 일반적으로 status는 HTTP 상태 코드를 따르지만, 여기서는 응답 바디의 status를 사용
    if (response.data && response.data.status === 0) { // 명세서에는 status: 0 으로 되어 있음
      return response.data.data;
    }
    // 성공적이지 않은 응답 처리 (status가 0이 아니거나, data 필드가 없는 경우 등)
    const errorMessage = response.data?.message || 'API 요청 처리 중 오류가 발생했습니다.';
    console.error('API Error Message:', errorMessage, 'Status Code:', response.data?.status);
    throw new Error(errorMessage);
  },
  (error: AxiosError<BaseApiResponse<unknown>>) => {
    console.error('Response Error Interceptor:', error);

    if (error.response) {
      // 서버가 응답을 반환했지만, HTTP 상태 코드가 2xx 범위가 아닌 경우
      const apiError = error.response.data;
      const errorMessage = apiError?.message || error.message || '서버 응답 오류';
      console.error(`Server Error (HTTP ${error.response.status}): ${errorMessage}`);
      return Promise.reject(new Error(errorMessage));
    } if (error.request) {
      // 요청이 이루어졌으나 응답을 받지 못한 경우
      console.error('No response received:', error.request);
      return Promise.reject(new Error('서버로부터 응답을 받지 못했습니다.'));
    }
    // 요청 설정 중 오류가 발생한 경우
    console.error('Error setting up request:', error.message);
    return Promise.reject(new Error('요청 설정 중 오류가 발생했습니다.'));
  },
);

// --- brand-controller ---
/**
 * GET /api/v1/brands/{brandId}/products 브랜드별 상품 조회
 */
export const getBrandProducts = async (
  brandId: number,
  params: PageRequest,
): Promise<GetBrandProductsResponseData> => {
  return instance.get(`/brands/${brandId}/products`, { params });
};

// --- product-controller ---
/**
 * GET /api/v1/products/{productId} 상품 상세 조회
 */
export const getProductDetail = async (
  productId: number,
): Promise<GetProductDetailResponseData> => {
  return instance.get(`/products/${productId}`);
};

/**
 * GET /api/v1/products/search 상품 검색 (상품명, 품번, 브랜드)
 * @param keyword 검색어
 * @param params 페이지네이션
 */
export const searchProducts = async (
  keyword: string,
  params: PageRequest, // specification.md 에서는 request 객체 안에 pageNumber, pageSize
): Promise<SearchProductsResponseData> => {
  return instance.get('/products/search', { params: { keyword, ...params } });
};

/**
 * GET /api/v1/products/search/{keyword}/sort 상품 정렬 (최신, 가격 낮은 순, 높은 순)
 * @param keyword 검색어
 * @param params 정렬 옵션 및 페이지네이션 (SortProductsRequest 타입 사용)
 */
export const sortProducts = async (
  keyword: string,
  params: SortProductsRequest,
): Promise<SearchProductsResponseData> => { // 응답은 SearchedProduct[]와 Pageable을 포함하는 SearchProductsResponseData
  return instance.get(`/products/search/${keyword}/sort`, { params });
};

/**
 * GET /api/v1/products/popular 지금 많이 찾는 상품 조회
 */
export const getPopularProducts = async (): Promise<GetPopularProductsResponseData> => {
  return instance.get('/products/popular');
};

// --- review-controller ---
/**
 * GET /api/v1/reviews 상품에 대한 전체 리뷰를 조회합니다
 * @param productId 상품 ID
 * @param params 페이지네이션
 */
export const getReviews = async (
  productId: number,
  params: PageRequest,
): Promise<GetReviewsResponseData> => {
  return instance.get('/reviews', { params: { productId, ...params } }); // 명세서상 productId와 request 객체가 파라미터
};

// --- store-controller ---
/**
 * GET /api/v1/stores 상품별 매장 재고 기본 조희
 * @param productId 상품 ID
 * @param params 페이지네이션
 */
export const getStoreStockInfo = async (
  productId: number,
  params: PageRequest,
): Promise<GetStoreStockInfoResponseData> => {
  return instance.get('/stores', { params: { productId, ...params } }); // 명세서상 productId와 request 객체가 파라미터
};

/**
 * GET /api/v1/stores/search 매장명으로 검색
 * 특정 상품(productId)에 입고된 매장 목록을 매장 이름(keyword)으로 검색
 * @param productId 상품 ID (query)
 * @param keyword 매장명 키워드 (query)
 * @param params 페이지네이션 (query)
 */
export const searchStoreByName = async (
  productId: number,
  keyword: string,
  params: PageRequest,
): Promise<SearchStoreByNameResponseData> => {
  return instance.get('/stores/search', { params: { productId, keyword, ...params } });
};

/**
 * GET /api/v1/stores/filter 상품별 매장 필터 조회
 * @param productId 상품 ID (query)
 * @param params 필터 조건 및 페이지네이션 (FilterStoreRequestParams 타입 사용)
 * 명세서에는 basicRequest (pageNumber, pageSize)와 filterRequest (pickup, excludeOutOfStock, excludeStoreType) 로 나뉘어 있음.
 * 이를 FilterStoreRequestParams 로 통합하여 전달.
 */
export const filterStores = async (
  productId: number,
  params: FilterStoreRequestParams,
): Promise<FilterStoresResponseData> => {
  return instance.get('/stores/filter', { params: { productId, ...params } });
};
