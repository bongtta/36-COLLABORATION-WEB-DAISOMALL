export interface ProductImageInfo {
  productImageId: number;
  imageUrl: string;
  sortOrder: number;
}

export interface GetProductDetailResponseData {
  productId: number;
  productName: string;
  price: string;
  ratingAvg: string;
  reviewCount: string;
  brandName: string;
  productImages: {
    main: ProductImageInfo[];
    detail: ProductImageInfo[];
  };
}
