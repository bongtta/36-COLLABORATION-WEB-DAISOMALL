import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { BASE_URL, END_POINT } from '@utils/constants/api/api';
import type { ApiResponse } from '@app-types/apiResponseType';
import type { LocationCardDataType } from '@app-types/store';

interface UseStoresByProductParams {
  productId: number;
  keyword?: string;
  pageNumber?: number;
  pageSize?: number;
}

export const useStoresByProduct = ({
  productId,
  keyword,
  pageNumber = 0,
  pageSize = 10,
}: UseStoresByProductParams) => {
  const endpoint = keyword
    ? END_POINT.SEARCH_STORES_BY_NAME
    : END_POINT.GET_STORES_BY_PRODUCT_ID;

  const queryKey = ['stores', productId, keyword, pageNumber, pageSize];

  return useQuery({
    queryKey,
    queryFn: async () => {
      const res = await axios.get<
        ApiResponse<{ stores: LocationCardDataType[] }>
      >(`${BASE_URL}${endpoint}`, {
        params: {
          productId,
          ...(keyword && { keyword }),
          pageNumber,
          pageSize,
        },
      });
      return res.data.data.stores;
    },
    enabled: !!productId,
  });
};
