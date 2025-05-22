export interface PopularProduct {
  productId: number;
  productName: string;
  productCode: string;
  price: number;
}

export interface GetPopularProductsResponseData {
  pages: PopularProduct[][];
  total: number;
}