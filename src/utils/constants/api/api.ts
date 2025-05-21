export const BASE_URL: string = import.meta.env.VITE_API_BASE_URL;

export const END_POINT = {
  GET_PRODUCTS_SEARCH: '/products/search',
  GET_PRODUCTS_ID: (productId: number) => `/products/${productId}`,
} as const;
