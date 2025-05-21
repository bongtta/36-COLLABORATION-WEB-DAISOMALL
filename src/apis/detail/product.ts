import { END_POINT } from '@utils/constants/api/api';
import { instance } from '@apis/instance';
import type { GetProductDetailResponseData } from '@app-types/product';

export const getProductDetail = async (
  productId: number,
): Promise<GetProductDetailResponseData> =>
  instance.get(END_POINT.GET_PRODUCTS_ID(productId));
