export const BASE_URL: string = import.meta.env.VITE_API_BASE_URL;

export const END_POINT = {
  GET_PRODUCTS_SEARCH: '/products/search',
  GET_PRODUCTS_ID: (productId: number) => `/products/${productId}`,
  GET_PRODUCTS_POPULAR: '/api/v1/products/popular',
  GET_STORES_BY_PRODUCT_ID: '/api/v1/stores',
  SEARCH_STORES_BY_NAME: '/api/v1/stores/search',
} as const;
