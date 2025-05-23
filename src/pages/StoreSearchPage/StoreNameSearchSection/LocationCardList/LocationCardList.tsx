import { Fragment } from 'react'
import LocationCard from '@components/LocationCard/LocationCard';
import * as S from './LocationCardList.style';
import Divider from '@components/common/divider/Divider';

const mockStores = [
  {
    storeId: 1,
    storeName: '홍대입구점',
    location: '서울특별시 마포구 홍익로 25 (서교동)',
    openingHours: '10:00~22:00',
    latitude: 37.5563,
    longitude: 126.9236,
    isPickupAvailable: true,
    floor: 'B1F',
    shelfNo: 1,
    stockCount: 7,
    stockStatus: '재고 보유',
  },
  {
    storeId: 2,
    storeName: '홍대2호점',
    location: '서울특별시 마포구 양화로 182 (동교동)',
    openingHours: '10:00~22:00',
    latitude: 37.5552,
    longitude: 126.9259,
    isPickupAvailable: true,
    floor: '1F',
    shelfNo: 1,
    stockCount: 166,
    stockStatus: '재고 보유',
  },
  {
    storeId: 3,
    storeName: 'e에브리데이명지대점',
    location: '서울특별시 서대문구 거북골로 34(남가좌동)',
    openingHours: '10:00~23:00',
    latitude: 37.5581,
    longitude: 126.9368,
    isPickupAvailable: false,
    floor: '1F',
    shelfNo: 1,
    stockCount: 0,
    stockStatus: '입고 예정',
  },
  {
    storeId: 4,
    storeName: '신촌명물거리점',
    location: '서울특별시 서대문구 명물길 27 (창천동)',
    openingHours: '10:00~22:00',
    latitude: 37.5598,
    longitude: 126.9423,
    isPickupAvailable: false,
    floor: '1F',
    shelfNo: 1,
    stockCount: 0,
    stockStatus: '재고 소진',
  },
];

const LocationCardList = () => {
  return (
    <div css={S.cardListWrapper}>
      <h3 css={S.countResult}>총 3개</h3>
      {mockStores.map((store) => (
        <Fragment key={store.storeId}>
          <LocationCard
            storeName={store.storeName}
            distance="-"
            address={store.location}
            isOpen={store.stockCount > 0}
            time={store.openingHours}
            floor={store.floor}
            stand={`${store.shelfNo}번`}
            stock={store.stockCount}
            isPickupAvailable={store.isPickupAvailable}
          />
          <Divider />
        </Fragment>
      ))}
    </div>
  );
};

export default LocationCardList;
