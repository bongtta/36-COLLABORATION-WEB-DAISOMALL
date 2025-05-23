import { END_POINT } from '@utils/constants/api/api';
import { instance } from '@apis/instance';
import type { SearchProductsResponseData, ApiResponse } from '@app-types/apiResponseType';

export const searchProducts = async (
  keyword: string,
  page: number = 0,
  size: number = 20
): Promise<SearchProductsResponseData> => {
  const response = await instance.get<ApiResponse<SearchProductsResponseData>>(
    END_POINT.GET_PRODUCTS_SEARCH,
    {
      params: {
        keyword,
        request: {
          pageNumber: page,
          pageSize: size
        }
      }
    }
  );
  return response.data.data;
};

// 상품 정렬 API
export const getSortedProducts = async (
  keyword: string,
  page: number = 0,
  size: number = 20,
  sortOption: string
): Promise<SearchProductsResponseData> => {
  const encodedKeyword = encodeURIComponent(keyword);
  const response = await instance.get<ApiResponse<SearchProductsResponseData>>(
    END_POINT.GET_PRODUCTS_SORT(encodedKeyword),
    {
      params: {
        request: {
          pageNumber: page,
          pageSize: size,
          sortOption
        }
      }
    }
  );
  return response.data.data;
};